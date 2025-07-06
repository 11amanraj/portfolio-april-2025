import React from 'react'
import PageNavigation from './PageNavigation'

const CaseStudy = () => {
  return (
    <div>
        <PageNavigation />
        <section id='section-a' className='h-screen w-full bg-green-800'>Section A</section>
        <section id='section-b' className='h-screen w-full bg-red-800'>Section B</section>
        <section id='section-c' className='h-screen w-full bg-black'>Section C</section>
        <section id='section-d' className='h-screen w-full bg-blue-800'>Section D</section>
    </div>
  )
}

export default CaseStudy