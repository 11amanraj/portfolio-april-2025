'use client'

import React, { useState, useEffect } from 'react'

const PageProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100
      setScrollWidth(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ width: `${scrollWidth}%` }}
      className='h-4 w-80 fixed bottom-4 bg-blue-200'
    >
      PageProgress
    </div>
  )
}


export default PageProgress