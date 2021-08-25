import express from 'express';
import user from './user';

const userRouter = express.Router();

// Create
userRouter.post('/', user.create);

// GetAll Data
userRouter.get('/', user.findAll);

// GetBy ID
userRouter.get('/:userId', user.findOne);

// Borrow Book
userRouter.post('/:userId/borrow/:bookId', user.borrow);

// Return Book
userRouter.post('/:userId/return/:bookId', user.return);

export default userRouter;
