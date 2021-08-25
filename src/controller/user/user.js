import User from '../../models/User';

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
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

// Borrow Book
userController.borrow = async (req, res) => {
  console.log('borrow job');
};

// Return Book
userController.return = async (req, res) => {
  console.log('return job');
};

export default userController;
