import express from 'express'
const router=express.Router()
import {addBlogPost,findPostByUserId, fetchAllBlogPost,DeleteBlogById, getPostById,updateBlogById} from '../controllers/blog.Controller.js'
import { authMiddle } from '../controllers/middleWare.js'
router.post('/addPost',authMiddle,addBlogPost)
router.get('/findPost/:id',authMiddle,findPostByUserId)
router.get('/totalPost', fetchAllBlogPost)
router.delete('/deletePost/:id',DeleteBlogById)
router.get('/viewBlog/:id',getPostById)
router.put('/update/:id',authMiddle,updateBlogById)







export default router