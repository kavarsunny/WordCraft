import React from 'react'

import PostList from '../components/PostList'
import EmailCapture from '../components/EmailCapture'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='sm:text-center bg-white'>
      <Hero />
 
      <h1 className='text-4xl font-extrabold sm:pl-12 sm:pt-12 sm:pb-4 sm:text-left text-center'>HOME</h1>
      <PostList />
      {/* <EmailCapture /> */}
      <div className='flex   bg-red-600 text-black'>
    {/* <div className='mx-4 py-8'>
      <h2 className='text-2xl font-bold uppercase'>Blog Website – WordCraft</h2>
      <p className='text-lg mt-8 max-w-1/2'>I developed a full-stack Blog Web Application as a student at SSEC, using the MERN stack (MongoDB, Express, React, Node.js). This platform allows users to create, edit, and delete blog posts, while managing authentication and dynamic content rendering.</p>
      </div> */}
      <img className='scale-75'/>
    </div>
    </div>
  )
}

export default Home
