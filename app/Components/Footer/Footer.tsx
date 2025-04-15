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
          <a 
            href='https://www.behance.net/amanraj228'
            target='_blank'
            rel="noopener noreferrer"
            className='w-8'
          >
            <img src='./icons/behance.png' alt='behance'/>
          </a>
          <a 
            href='https://www.linkedin.com/in/aman-r-8a2724107/'
            target='_blank'
            rel="noopener noreferrer"
            className='w-8'
          >
            <img src='./icons/linkedin.png' alt='linkedin'/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer