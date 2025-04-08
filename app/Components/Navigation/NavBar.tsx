import React from 'react'
import NavLinks from '../Navigation/NavLinks'
import NavLinksCondensed from '../Navigation/NavLinksCondensed'

const NavBar = () => {
  return (
    <nav className='flex justify-between py-8'>
        <div>Logo</div>
        <a 
          href='/aman_resume.pdf' 
          download
        >
          Resume
        </a>
        <NavLinks />
        {/* <NavLinksCondensed /> */}
    </nav>
  )
}

export default NavBar