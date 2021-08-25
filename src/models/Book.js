import mongoose from 'mongoose';
import validator from 'validator';

const { Schema } = mongoose;

/**
 * @class Book
 */

const BookSchema = new Schema({
  name: {
    type: String,
    required: [true, '`name` is required'],
    validate: (value) => validator.toString(value),
  },
});

const Book = mongoose.model('Book', BookSchema);
export default Book;
