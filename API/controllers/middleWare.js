
import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js';
import dotenv from "dotenv"

dotenv.config()
export const authMiddle = async (req, res, next) => {

  const token = req.header('Auth')
 
  
  

  if (!token) return res.json({ message: 'login first' })

  try {

    const decoded = jwt.verify(token,  process.env.SECRET_KEY)

    //console.log(decoded);
    const id = decoded.id

    let user = await User.findById(id)

    if (!user) return res.json({ message: 'user not found' })
    req.user = user
    next()

  } catch (error) {
     return res.json({message:'invalid token / token expired'})
  }

}