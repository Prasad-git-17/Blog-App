import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { id } = useParams()
    let userId = localStorage.getItem('userId')
    let token = localStorage.getItem('token')
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const hndleLogOut =()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    navigate('/')
  }


    return (
        <div>
            <div className='flex justify-between items-center h-10 bg-white shadow-md'>
                <div className='ml-4 text-xl cursor-pointer'>
                    My <span className='font-extrabold'>Blog</span>
                </div>
                <div className='hidden sm:block'>
                    <ul className=' flex '>
                        <li className={`m-1 cursor-pointer `}><Link to="/">Home</Link></li>
                        <li className={`m-1 cursor-pointer ${token ? 'hidden' : 'block'}`}><Link to="/blog">Blogs</Link></li>
                        <li className={`m-1 cursor-pointer ${token ? 'hidden' : 'block'}`}><Link to="/about">About</Link></li>
                        <li className={`m-1 cursor-pointer ${token ? 'hidden' : 'block'}`}><Link to="/contact">Contact</Link></li>
                        <li className='m-1 cursor-pointer  text-orange-600 font-bold '><Link to={`/user/dash/${userId}`}>Dashboard</Link></li>
                        
                    </ul>
                </div>
                <div className='flex'>
                    <button className={`block m-2 p-1 rounded-md text-white bg-orange-600  ${token ? 'block' : 'hidden'}`} onClick={()=>hndleLogOut()}>logOut</button>
                    <button className={`  ${token ? 'hidden' : 'block'}  mr-3 text-white cursor-pointer bg-orange-600   h-7 m-2 rounded-xl w-20`}
                        onClick={() => navigate('/signIn')}
                    >SignIn</button>
                    <div className='mr-3 sm:hidden cursor-pointer  m-2 text-xl' onClick={() => setIsOpen(!isOpen)}><GiHamburgerMenu /></div>
                </div>

            </div>
            <div className={`${isOpen ? "block" : 'hidden'} sm:hidden  bg-gray-300 `}>
                <ul className=' flex flex-col justify-center items-center'>
                    <li className={`m-1 cursor-pointer ${token ? 'hidden' : 'block'}`}><Link to="/">Home</Link></li>
                    <li className={`m-1 cursor-pointer ${token ? 'hidden' : 'block'}`}><Link to="/blog">Blogs</Link></li>
                    <li className={`m-1 cursor-pointer ${token ? 'hidden' : 'block'}`}><Link to="/about">About</Link></li>
                    <li className={`m-1 cursor-pointer ${token ? 'hidden' : 'block'}`}><Link to="/contact">Contact</Link></li>
                    <li className='m-1 cursor-pointer text-orange-600 font-bold'><Link to={`/user/dash/${userId}`}>Dashboard</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
