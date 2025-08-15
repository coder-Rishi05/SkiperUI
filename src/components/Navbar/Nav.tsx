import React from 'react'
import Nav1 from './Nav1'
import Nav2 from './Nav2'

const Nav = () => {
  return (
    <div>
        <nav className='flex items-center justify-between py-4' >
          <Nav1 />
          <Nav2 />
          {/* <div className="left">
            <h2>skiper/ui  </h2>
          <p>Beta</p>
          <li>Component</li>
          <li>Pricing</li>
          <li>Newsletter</li>
          </div>

          <div className="right">

          </div> */}
          
        </nav>
    </div>
  )
}

export default Nav