import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPosts, updatePosts, likePosts, deletePosts, commentPost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPosts);
router.patch('/:id', auth, updatePosts);
router.delete('/:id', auth, deletePosts);
router.patch('/:id/likePost', auth, likePosts);
router.post('/:id/commentPost', auth, commentPost);

export default router;