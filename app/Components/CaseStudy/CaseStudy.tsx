'use client'

import React, { useState, useEffect } from 'react'
import PageNavigation from './PageNavigation'
import PageProgress from './PageProgress'

const CaseStudy = () => {
    const sections = [
        {
            key: 0,
            id: 'section-a',
            title: 'Section A',
            bg: 'bg-green-800'
        },
        {
            key: 1,
            id: 'section-b',
            title: 'Section B',
            bg: 'bg-red-800'
        },
        {
            key: 2,
            id: 'section-c',
            title: 'Section C',
            bg: 'bg-black'
        },
        {
            key: 3,
            id: 'section-d',
            title: 'Section D',
            bg: 'bg-blue-800'
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
            {sections.map(section =>
                <section
                    key={section.key}
                    id={section.id}
                    className={`h-screen w-full ${section.bg}`}
                >{section.title}</section>
            )}
            <PageProgress />
        </div>
    )
}

export default CaseStudy