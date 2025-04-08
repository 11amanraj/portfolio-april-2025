import React from 'react'
import NavLinks from './NavLinks'
import NavLinksCondensed from './NavLinksCondensed'

const NavBar = () => {
  return (
    <nav className='flex justify-between py-8'>
        <div>Logo</div>
        <NavLinks />
        {/* <NavLinksCondensed /> */}
    </nav>
  )
}

export default NavBar