import React from 'react'

const About = () => {
  return (
    <div  className='md:h-[80vh]'>
      <div>
     <h1 className='text-xl font-bold ml-12 mt-4'> About This Blog Project</h1>
     <p className='m-12 font-medium'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
This blog platform is a personal project built to demonstrate my skills as a full-stack web developer using the MERN stack (MongoDB, Express.js, React, Node.js). The application features user authentication, full CRUD operations for blog posts, and a protected admin panel for managing content.

I developed this project to gain deeper experience with RESTful APIs, token-based authentication (JWT), state management using Redux, and responsive design. The frontend is built in React with React Router for navigation, and the backend uses Express.js and MongoDB for handling data and user sessions.

Although this is a sample project, it is fully functional and designed to reflect the workflow and structure of a real-world blogging platform.
    </p>
    </div>
    </div>
  )
}

export default About
