import express from 'express'
import connectDb from './utils/connectDb.js'
import userRouter from './router/user.route.js'
import blogRouter from './router/blog.route.js'
import cookieParser from 'cookie-parser'
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();



const app = express()
app.use(cookieParser())
const port = process.env.PORT
app.use(express.json())
app.use(cors({
    //https://blog-app-eta-tan.vercel.app/
    origin:'https://blog-app-eta-tan.vercel.app/',
    credentials:true,
    methods:['POST','GET','PUT','DELETE']

}))

//routes
app.use('/user', userRouter)
app.use('/blog',blogRouter)

app.listen(port, () => {
    connectDb()
    console.log(`server is running on port ${port}`);
})