import React from 'react'

const ActionLink: React.FC<{title: string, link: string, isPrimary: boolean}> = ({title, link, isPrimary}) => {
  if (isPrimary) {
      return (
      <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className='bg-background border border-background flex gap-3 px-5 py-3 rounded-full'
      >
          <p className='font-text font-bold text-2xl text-primary'>{title}</p>
          <div className='w-9 h-9 bg-primary rounded-full'></div>
      </a>
    )
  } else {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className='border border-background flex gap-3 px-5 py-3 rounded-full'
        >
            <p className='font-text font-bold text-2xl text-background'>{title}</p>
            <div className='w-9 h-9 bg-background rounded-full'></div>
        </a>
      )
  }
  
}

export default ActionLink