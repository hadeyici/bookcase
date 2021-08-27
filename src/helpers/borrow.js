import mongoose from 'mongoose';
import Borrows from '../models/Borrows';

const borrowHelpers = {};

// Existing Borrow
// eslint-disable-next-line consistent-return
borrowHelpers.checkBorrow = async (req, res) => {
  try {
    const borrow = await Borrows.findOne({
      book_id: req.params.bookId,
      return: false,
    });

    if (borrow) {
      res.status(500).json({ error: 'This book already borrow' });
      return true;
    }
    return false;
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

// eslint-disable-next-line consistent-return
borrowHelpers.getBooks = async (req, res, value) => {
  try {
    const books = await Borrows.aggregate([
      {
        $lookup: {
          from: 'books',
          localField: 'book_id',
          foreignField: '_id',
          as: 'book',
        },
      },
      { $unwind: '$book' },
      {
        $match: {
          user_id: mongoose.Types.ObjectId(req.params.userId),
          return: value,
        },
      },
      {
        $project: {
          _id: 0,
          name: '$book.name',
          score: 1,
        },
      },
    ]);
    if (books) {
      return books;
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

// eslint-disable-next-line consistent-return
borrowHelpers.avgBook = async (req, res) => {
  try {
    const avg = await Borrows.aggregate([
      {
        $match: {
          book_id: mongoose.Types.ObjectId(req.params.bookId),
          return: true,
        },
      },
      {
        $group: {
          _id: null,
          scoreAvg: { $avg: '$score' },
        },
      },
    ]);
    if (avg.length > 0) {
      return avg[0].scoreAvg; // todo
    }
    return -1;
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

export default borrowHelpers;
