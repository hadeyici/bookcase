import Book from '../models/Book';

const bookHelpers = {};

// Existing Book
bookHelpers.checkBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (!book) {
      return Promise.reject(new Error('Book not found'));
    }
    return true;
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

export default bookHelpers;
