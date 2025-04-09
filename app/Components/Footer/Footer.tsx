import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-600 text-white responsive-padding'>
      <div>
        <h4>Say Hi!</h4>
        <a href="mailto:25amrj@gmail.com">25amrj@gmail.com</a>
      </div>
      <div className='flex flex-col sm:flex-row sm:justify-between'>
        <p>Copyright © Aman Raj</p>
        <p>Roorkee, IN</p>
        <div className='flex gap-4'>
          <div>Behance</div>
          <div>Linkedin</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer