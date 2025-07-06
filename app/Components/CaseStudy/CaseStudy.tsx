'use client'

import React, { useState, useEffect } from 'react'
import PageNavigation from './PageNavigation'
import PageProgress from './PageProgress'

const CaseStudy = () => {
    const sections = [
        {
            key: 0,
            id: 'section-a',
            title: 'Section A'
        },
        {
            key: 1,
            id: 'section-b',
            title: 'Section B'
        },
        {
            key: 2,
            id: 'section-c',
            title: 'Section C'
        },
        {
            key: 3,
            id: 'section-d',
            title: 'Section D'
        },
    ]

    const [activeSection, setActiveSection] = useState(sections[0].id)

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id)
            }
            })
        },
        {
            rootMargin: '0px',
            threshold: 0.6,
        }
        )

        sections.forEach((section) => {
        const el = document.getElementById(section.id)
        if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

  return (
    <div>
        <PageNavigation activeSection={activeSection} />
        <section id='section-a' className='h-screen w-full bg-green-800'>Section A</section>
        <section id='section-b' className='h-screen w-full bg-red-800'>Section B</section>
        <section id='section-c' className='h-screen w-full bg-black'>Section C</section>
        <section id='section-d' className='h-screen w-full bg-blue-800'>Section D</section>
        <PageProgress />
    </div>
  )
}

export default CaseStudy