import React from 'react'
import ProjectCards from './ProjectCards'
import { Project } from '@/app/Types/Interface'

const ProjectsList = () => {
    const project_details: Project[] = [
        {
          id: 0,
          title: 'Academic Info System for IIT Roorkee',
          description: 'Identified communication gaps in IIT Roorkee’s academic ecosystem and designed a centralized platform using user interviews and the Double Diamond approach.',
          tags: ['UX Resarch, UI, Frontend'],
          caseStudyLink: 'https://www.behance.net/gallery/221113241/Academic-Information-System', 
          resourceLink: 'www.google.com',
          image: '/project-thumbnails/ais-portal.jpg'
        },
        {
          id: 1,
          title: 'GPay Redesign: Smarter Splits, Clearer Expenses',
          description: 'An experience-focused redesign that simplifies how users split costs and monitor spending within the Google Pay ecosystem.',
          tags: ['UX Resarch, UI, Frontend'],
          caseStudyLink: 'https://www.behance.net/gallery/211761657/GPay-Redesign', 
          resourceLink: 'www.google.com',
          image: '/project-thumbnails/gpay-redesign.jpg'
        },
        {
          id: 2,
          title: 'Researching Mobile Accessibility for the Elderly',
          description: 'Through user interviews and observational research, we uncovered barriers faced by older adults in mobile usage — culminating in a comprehensive set of accessibility guidelines.',
          tags: ['UX Resarch, UI, Frontend'],
          caseStudyLink: 'https://www.behance.net/gallery/213415765/A-UX-case-study-on-senior-friendly-mobile-interactions', 
          resourceLink: 'www.google.com',
          image: '/project-thumbnails/gpay-redesign.jpg'
        },
        {
          id: 3,
          title: 'A Designer–Developer’s Portfolio, Built with Code',
          description: 'Designed and developed my own portfolio using Next.js, TailwindCSS, and TypeScript — blending aesthetics with performance and thoughtful UX.',
          tags: ['UX Resarch, UI, Frontend'],
          caseStudyLink: 'https://www.behance.net/gallery/213415765/A-UX-case-study-on-senior-friendly-mobile-interactions', 
          resourceLink: 'www.google.com',
          image: '/project-thumbnails/gpay-redesign.jpg'
        },
        {
          id: 4,
          title: 'Starbound: A Static Site for a Space Tourism Brand',
          description: 'Designed and developed a concept website with custom layouts and page routing, highlighting creative theming and component reuse.',
          tags: ['UX Resarch, UI, Frontend'],
          caseStudyLink: 'https://www.behance.net/gallery/213415765/A-UX-case-study-on-senior-friendly-mobile-interactions', 
          resourceLink: 'www.google.com',
          image: '/project-thumbnails/gpay-redesign.jpg'
        }
    
      ]

  return (
    <div className="text-background flex flex-col w-full gap-8 py-16 responsive-padding bg-primary">
        <h3 className='text-[96px]'>Projects</h3>
        {project_details
            .map(project => 
                <ProjectCards key={project.id} project={project}/>
            )}
      </div>
  )
}

export default ProjectsList