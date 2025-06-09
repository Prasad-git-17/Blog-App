import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 m-2 bg-black mb-4 mt-10'>
        <div className=' m-4 '>
            <h1 className='text-center font-bold text-xl text-white'>MyBlog</h1>
            <p className='text-white text-center'>Copyright@prasad</p>
        </div>
        <div className=' m-4 '>
            <h1 className='text-white text-xl font-bold text-center'>USEFUL LINKS</h1>
            <ul className='text-center mt-4 text-white font-semibold'>
                                  <li className={`m-1 cursor-pointer`}><Link to="/">Home</Link></li>
                                  <li className={`m-1 cursor-pointer`}><Link to="/blog">Blogs</Link></li>
                                  <li className={`m-1 cursor-pointer `}><Link to="/about">About</Link></li>
                                  <li className={`m-1 cursor-pointer `}><Link to="/contact">Contact</Link></li>

            </ul>
        </div>
        <div className=' m-4 '>
        <h1 className='text-white text-xl font-bold text-center'>CONTACT</h1>
        <div className='mt-4'>
            <p className='text-white font-bold text-center '>123 XYZ Road BSK 3</p>
            <p className='text-white font-bold text-center '>Maharashtra,Pune,IN</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
