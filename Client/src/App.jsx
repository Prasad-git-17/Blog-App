import React from 'react'
import Navbar from './component/Navbar'
import {Routes,Route,useParams} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import About from './pages/About'
import Footer from './component/Footer'
import SignIn from './component/SignIn'
import LogIn from './component/LogIn'
import ProtectedRoute from './component/ProtectedRout'
import AddBlogPost from './UserBlogPost/AddBlogPost'
import Dashboard from './component/Dashboard'
import NotFound from './pages/NotFound'
import ViewBlogPost from './UserBlogPost/ViewBlogPost'
import UpdatePost from './UserBlogPost/UpdatePost'
const App = () => {
 
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/logIn' element={<LogIn/>}/>
        <Route path='/view/:id' element={<ViewBlogPost/>}/>
         <Route path='/update/:id' element={<UpdatePost/>}/>
         <Route path='*' element={<NotFound/>}/>

        <Route path='/user' element={<ProtectedRoute/>}>
        <Route path='dash/:id' element={<Dashboard/>}/>
         <Route path='addPost/:id' element={<AddBlogPost/>}/>
        </Route>
        
       
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

