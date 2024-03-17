
import express from 'express';
import { getBlogPostsCtrl } from '../controllers/getBlogPostsCtrl.js';


const router = express.Router()

router.get('/blog', getBlogPostsCtrl)



export default router