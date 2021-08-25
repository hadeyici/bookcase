import Book from '../../models/Book';

const bookController = {};

// Create Book
bookController.create = async (req, res) => {
  const data = new Book({
    name: req.body.name,
  });

  data
    .save()
    .then((book) => res.json(book))
    .catch((error) => res.status(500).json({ error: error.toString() }));
};

// Get All Books
bookController.findAll = async (req, res) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

// Get Book By ID
bookController.findOne = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    return res.json(book);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

export default bookController;
