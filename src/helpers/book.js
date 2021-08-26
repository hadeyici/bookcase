import Book from '../models/Book';

const bookHelpers = {};

// Existing Book
// eslint-disable-next-line consistent-return
bookHelpers.checkBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (!book) {
      res.status(404).json({ error: 'Book not found' });
      return false;
    }
    return true;
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

export default bookHelpers;