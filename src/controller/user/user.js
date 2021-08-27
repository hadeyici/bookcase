import User from '../../models/User';
import Borrows from '../../models/Borrows';
import borrowHelpers from '../../helpers/borrow';
import userHelpers from '../../helpers/user';
import bookHelpers from '../../helpers/book';

const userController = {};

// Create User
userController.create = async (req, res) => {
  const data = new User({
    name: req.body.name,
  });

  const user = await data
    .save()
    .catch((error) => res.status(500).json({ error: error.toString() }));

  return res.json(user);
};

// Get All Users
userController.findAll = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

// Get User By ID
userController.findOne = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    }

    const past = await borrowHelpers.getBooks(req, res, true);
    const present = await borrowHelpers.getBooks(req, res, false);

    return res.json({
      id: user.id,
      name: user.name,
      books: { past, present },
    });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

// Borrow Book
userController.borrow = async (req, res) => {
  try {
    await userHelpers.checkUser(req, res);
    await bookHelpers.checkBook(req, res);
    await borrowHelpers.checkBorrow(req, res);

    const data = new Borrows({
      user_id: req.params.userId,
      book_id: req.params.bookId,
      return: false,
    });

    const borrow = await data
      .save()
      .catch((error) => res.status(500).json({ error: error.toString() }));

    return res.json(borrow);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

// Return Book
userController.return = async (req, res) => {
  if (!req.body.score) {
    return res.status(201).json({ error: '`score` is required' });
  }

  await Borrows.findOneAndUpdate(
    {
      user_id: req.params.userId,
      book_id: req.params.bookId,
      return: false,
    },
    { $set: { return: true, score: req.body.score } },
    async (error, data) => {
      if (!data) {
        return res.status(404).json({ error: 'data not found' });
      }
      if (error) {
        return res.status(500).json({ error: error.toString() });
      }

      data.return = true;
      data.score = req.body.score;

      const borrow = await data
        .save()
        .catch((err) => res.status(500).json({ error: err.toString() }));

      return res.json(borrow);
    },
  );
  return {};
};

export default userController;
