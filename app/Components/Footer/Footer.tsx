import React from 'react'

const Footer = () => {
  return (
    <footer className='responsive-padding flex justify-between items-end pt-15 pb-4 font-heading text-'>
      <div>
        <h5 className='text-[72px] font-text'><span>Get in </span><span className='italic'>touch</span></h5>
        <div className='flex gap-5'>
          <p>Copyright © Aman Raj</p>
          <div>|</div>
          <p className='flex gap-1'>
            <span>Made with</span>
            <img src='/icons/heart.svg' alt='heart'/>
          </p>  
        </div>
      </div>
      <div className='flex gap-5'>
        <a href="mailto:25amrj@gmail.com">25amrj@gmail.com</a>
        <div>|</div>
        <a 
            href='https://www.linkedin.com/in/aman-r-8a2724107/'
            target='_blank'
            rel="noopener noreferrer"
        >LinkedIn</a>
        <div>|</div>
        <a 
            href='https://www.behance.net/amanraj228'
            target='_blank'
            rel="noopener noreferrer"
        >Behance</a>
        <div>|</div>
        <a 
            href='https://github.com/11amanraj'
            target='_blank'
            rel="noopener noreferrer"
        >Github</a>
      </div>
    </footer>
  )
}

export default Footer