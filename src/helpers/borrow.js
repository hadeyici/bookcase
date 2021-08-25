import Borrows from '../models/Borrows';

const borrowHelpers = {};

// Existing Borrow
borrowHelpers.checkBorrow = async (req, res) => {
  Borrows.findOne(
    {
      book_id: req.params.bookId,
      return: false,
    },
    (error, data) => {
      if (data) {
        res.status(500).json({ error: 'This book already borrow' });
      }
      if (error) {
        res.status(500).json({ error: error.toString() });
      }
    },
  );
};

export default borrowHelpers;
