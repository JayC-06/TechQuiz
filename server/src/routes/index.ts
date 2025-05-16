import express from 'express';
const router = express.Router();
import questionRoutes from './api/questionRoutes';

router.use('/questions', questionRoutes);

export default router;
