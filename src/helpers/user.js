import User from '../models/User';

const userHelpers = {};

// Existing User
userHelpers.checkUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return Promise.reject(new Error('User not found'));
    }
    return true;
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

export default userHelpers;
