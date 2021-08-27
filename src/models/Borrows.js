import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * @class Borrows
 */

const BorrowsSchema = new Schema({
  user_id: Schema.Types.ObjectId,
  book_id: Schema.Types.ObjectId,
  return: {
    type: Boolean,
    default: false,
  },
  score: {
    type: Number,
    min: 1,
    max: 10,
  },
});

const Borrows = mongoose.model('Borrows', BorrowsSchema);

export default Borrows;
