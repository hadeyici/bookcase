import express from 'express';
import userRouter from '../../controller/user';
import bookRouter from '../../controller/book';

const apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => {
  res.json({ message: 'from index api' });
});

apiRoutes.use('/users', userRouter);
apiRoutes.use('/books', bookRouter);

export default apiRoutes;
