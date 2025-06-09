import express from 'express'
const router=express.Router()
import {userRagister,getAllUsers,login} from '../controllers/user.Controller.js'


router.post('/addUser',userRagister)
router.get('/userData',getAllUsers)
router.post('/login',login)


export default router;