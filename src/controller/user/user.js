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

  data
    .save()
    .then((user) => res.json(user))
    .catch((error) => res.status(500).json({ error: error.toString() }));
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
// eslint-disable-next-line consistent-return
userController.borrow = async (req, res) => {
  const isUser = await userHelpers.checkUser(req, res);
  const isBook = await bookHelpers.checkBook(req, res);
  const isBorrow = await borrowHelpers.checkBorrow(req, res);

  if (isUser && isBook && !isBorrow) {
    const data = new Borrows({
      user_id: req.params.userId,
      book_id: req.params.bookId,
      return: false,
    });

    const borrow = await data
      .save()
      .catch((error) => res.status(500).json({ error: error.toString() }));

    return res.json(borrow);
  }
};

// Return Book
userController.return = async (req, res) => {
  if (!req.body.score) {
    res.status(500).json({ error: '`score` is required' });
  }

  Borrows.findOneAndUpdate(
    {
      user_id: req.params.userId,
      book_id: req.params.bookId,
      return: false,
    },
    { $set: { return: true, score: req.body.score } },
    (error, data) => {
      if (!data) {
        res.status(404).json({ error: 'data not found' });
      }
      if (error) {
        res.status(500).json({ error: error.toString() });
      }

      // eslint-disable-next-line no-param-reassign
      data.return = true;
      // eslint-disable-next-line no-param-reassign
      data.score = req.body.score;

      data
        .save()
        .then((borrow) => res.json(borrow))
        .catch((err) => res.status(500).json({ error: err.toString() }));
    },
  );
};

export default userController;
