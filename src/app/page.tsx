import Template from '@/components/HomeCards/Template'
import Home from '@/components/LandingPage/Home'
import Nav from '@/components/Navbar/Nav'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen ' >
      <Nav />
      <Home />
      <Template />
    </div>
  )
}

export default page