import Home from '@/components/LandingPage/Home'
import Nav from '@/components/Navbar/Nav'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen bg-[#0A0A0A]' >
      <Nav />
      <Home />
    </div>
  )
}

export default page