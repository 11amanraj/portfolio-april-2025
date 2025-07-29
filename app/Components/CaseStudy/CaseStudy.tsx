'use client'

import React, { useState, useEffect } from 'react'
// import PageNavigation from './PageNavigation'
import PageProgress from './PageProgress'
import { sectionDetail } from '@/app/Types/Interface'
import CaseSection from './CaseSection'

const CaseStudy = () => {
    const sections: sectionDetail[] = [
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

    // const [activeSection, setActiveSection] = useState(sections[0].id)

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     setActiveSection(entry.target.id)
    //                 }
    //             })
    //         },
    //         {
    //             rootMargin: '0px',
    //             threshold: 0.6,
    //         }
    //     )

    //     sections.forEach((section) => {
    //         const el = document.getElementById(section.id)
    //         if (el) observer.observe(el)
    //     })

    //     return () => observer.disconnect()
    // }, [])

    return (
        <div>
            {/* <PageNavigation activeSection={activeSection} sectionDetail={sections} /> */}
            <section className="w-full max-w-[1280px] aspect-[16/9] bg-gray-800 mx-auto">
                Video goes here
            </section>
            {sections.map(section => (
                <CaseSection key={section.key} sectionDetail={section} totalSections={sections.length}>
                    This is children Section
                </CaseSection>
            ))}
            <PageProgress />
        </div>
    )
}

export default CaseStudy