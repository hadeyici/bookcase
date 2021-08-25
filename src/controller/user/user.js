const userController = {};

// Create User
userController.create = async (req, res) => {
  console.log('create job');
};

// Get All Users
userController.findAll = async (req, res) => {
  console.log('find all job');
};

// Get User By ID
userController.findOne = async (req, res) => {
  console.log('find one job');
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
