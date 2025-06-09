
import { User } from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config()

export const userRagister = async (req, res) => {
    const { userName, email, password } = req.body
    try {
        const checkUser = await User.findOne({ email: email })
        if (checkUser) {
            return res.json({ message: 'user already exist' })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({ userName, email, password: hashPassword })
        res.json({ message: 'new user created', newUser })


    } catch (error) {
        console.log('error to create new user', error)
    }
}
export const getAllUsers = async (req, res) => {

    try {
        const allUserData = await User.find()
        res.json({ message: "all user data is here", allUserData })
    } catch (error) {
        console.log('error to create new user', error)
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email: email })

        if (!user) {
            return res.json({ message: "invalid credentials" })
        }
      
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.json({ message: "invalid credentials" })
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
            expiresIn: '1d'
        })
     
        res.json({ message: 'login succsesful', user, token })
    } catch (error) {
        console.log('error to create new user', error)
    }
}