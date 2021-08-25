import express from 'express';
import apiRoutes from './api';

const indexRouter = express.Router();

indexRouter.use('/', apiRoutes);

export default indexRouter;
