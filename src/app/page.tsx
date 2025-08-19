import AiCard from '@/components/HomeCards/AiCard'
import Special  from '@/components/HomeCards/Special'
import Template from '@/components/HomeCards/Template'
import Home from '@/components/LandingPage/Home'
import Nav from '@/components/Navbar/Nav'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full ' >
      <Nav />
      <Home />
      <Template />
      <Special />
      <AiCard />
    </div>
  )
}

export default page