import Book from '../models/Book';

const bookHelpers = {};

// Existing Book
bookHelpers.checkBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (!book) {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

export default bookHelpers;
