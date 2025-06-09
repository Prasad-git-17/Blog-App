import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const UpdatePost = () => {
  let userId = localStorage.getItem('userId')
  const navigate = useNavigate()
  const { id } = useParams()
  let token = localStorage.getItem('token')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [catogery, seCatogery] = useState('')

  
  useEffect(() => {
    const viewBlogById = async () => {
      const res = await axios.get(`http://localhost:5000/blog/viewBlog/${id}`)
      // console.log(res.data.blogPostById);
      // console.log(res.data.blogPostById.catogery);
      setTitle(res.data.blogPostById.title)
      setImage(res.data.blogPostById.image)
      seCatogery(res.data.blogPostById.catogery)
      setContent(res.data.blogPostById.content)
      //  setBlogPost(res.data.blogPostById)

    }
    viewBlogById()
  }, [])




  const handleUpdate = async (e) => {
    e.preventDefault()

    const updatedPost = {
      title,
      content,
      image,
      catogery
    }

    try {
      const res = await axios.put(`http://localhost:5000/blog/update/${id}`, updatedPost,
        {
          headers: {
            Auth: token
          }
        }
      )
      // console.log('blog updated sucsscfully',res.data);
      navigate(`/user/dash/${userId}`)

    } catch (error) {
      console.log('error happans to update blag post');

    }


  }



  return (
    <div className='flex justify-center items-center'>

      <div>
        <h1 className='text-center text-xl mt-4 font-bold'>Update your <span className=' text-orange-600 text-2xl'>Blog</span> Post</h1>
        <div className='flex justify-center items-center m-8 border '>
          <form onSubmit={handleUpdate} >
            <label className='m-2 text-xl font-bold'>Title</label>
            <input
              className='border block focus:outline-none m-auto  w-[95%]'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter Title here'
              required
            />
            <label className='m-2 text-xl font-bold'>Category</label>
            <input
              className='border block  focus:outline-none m-auto  w-[95%]'
              type='text'
              value={catogery}
              onChange={(e) => seCatogery(e.target.value)}
              placeholder='Enter Category here'
              required
            />
            <label className='m-2 text-xl focus:outline-none font-bold'>Image</label>
            <input
              className='border block   m-auto  w-[95%]'
              type='text'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder='Enter Image url here.'
              required
            />
            <label className='m-2 text-xl font-bold' htmlFor='textArea'>Content</label>


            <textarea
              className='border block focus:outline-none m-auto w-[95%]'
              id='textArea'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder='Enter your blog content'
              rows='15'
              cols='50' />

            <div className='flex justify-between'>
              <button className='block m-2 w-20 p-1 rounded-md text-white bg-orange-600' type='submit'>Submit</button>
              <button className='block m-2 w-20 p-1 rounded-md text-white bg-orange-600'>Cancel</button>
            </div>





          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdatePost
