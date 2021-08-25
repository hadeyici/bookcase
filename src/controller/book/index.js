import express from 'express';
import book from './book';

const bookRouter = express.Router();

// Create
bookRouter.post('/', book.create);

// GetAll Data
bookRouter.get('/', book.findAll);

// GetBy ID
bookRouter.get('/:bookId', book.findOne);

export default bookRouter;
