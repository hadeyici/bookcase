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

export default borrowHelpers;
