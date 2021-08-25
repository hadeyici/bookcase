import User from '../models/User';

const userHelpers = {};

// Existing User
userHelpers.checkUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

export default userHelpers;
