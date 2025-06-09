import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const ViewBlogPost = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [blogPost, setBlogPost] = useState([])
    const [user, setUser] = useState('')

    useEffect(() => {
        const viewBlogById = async () => {
            const res = await axios.get(`http://localhost:5000/blog/viewBlog/${id}`)
          //  console.log(res.data.blogPostById);
            setBlogPost(res.data.blogPostById)
            setUser(res.data.blogPostById.user.userName) 
        }
    viewBlogById()
    }, [])

    
    return (
        <div>

            <h1 className='text-center text-3xl font-bold m-3'>{blogPost.title}</h1>
            <div className='flex justify-center items-center m-4'>
                <img className='w-[90%] h-[90%] sm:w-[800px] sm:h-[400px] object-cover rounded'
                    src={blogPost.image} alt='image of peace' />
            </div>
            <div className='flex justify-between '>
                <h1 className='ml-10 text-md font-bold '>{blogPost.catogery}</h1>
                <h1 className='mr-10 text-md font-bold '>Writer: <span className=' text-orange-600'>{user}</span> </h1>
            </div>

            <div className='m-10 text-justify font-medium'>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{blogPost.content}

                </p>
            </div>
            <div className='ml-12'>
                <button className='block m-2 p-1 rounded-md text-white bg-orange-600 ' onClick={() => navigate(`/`)}>Home</button>
            </div>
        </div>
    )
}

export default ViewBlogPost
