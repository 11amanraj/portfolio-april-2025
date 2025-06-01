import React from 'react'
import NavLinks from '../Navigation/NavLinks'
import NavLinksCondensed from '../Navigation/NavLinksCondensed'

const NavBar = () => {
  return (
    <nav className='flex justify-between py-8 responsive-padding'>
        {/* <div>Logo</div> */}
        <img src='/icons/website_logo.svg' alt='website-logo' className='w-8'/>
        <a 
          href='/aman_resume.pdf' 
          download
          className='text-primary font-heading'
        >
          Resume
        </a>
        {/* <NavLinks /> */}
        {/* <NavLinksCondensed /> */}
    </nav>
  )
}

export default NavBar