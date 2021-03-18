import express from 'express';
import authMiddleware from '../middleware/auth.js.js';
const router = express.Router();

import { getPosts, createPost, deletePost, updatePost, likePost } from '../controllers/post.js.js';

router.get('/', getPosts);
router.post('/', authMiddleware, createPost);
router.delete('/:id', authMiddleware, deletePost);
router.patch('/:id', authMiddleware, updatePost);
router.patch('/:id/likePost', authMiddleware, likePost);

export default router;
