import ProjectCards from "./Components/Project/ProjectCards";
import { Project } from '@/app/Types/Interface'
import Image from "next/image";

export default function Home() {
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
    <div className="flex flex-col gap-8 responsive-padding mb-8">
      <div className="min-h-[calc(100vh-88px)] flex flex-col gap-8 sm:max-w-200">
        {/* <div className="w-50 h-50 ml-16 sm:w-65 sm:h-65 sm:ml-20 bg-green-600 rounded-full">
          <img src="/hero-image.jpg" alt="hero-image" className="w-full h-full rounded-full overflow-clip"/>
        </div> */}
        <img src="/hero-image.jpg" alt="hero-image" className="w-50 h-50 ml-16 sm:w-70 sm:h-70 sm:ml-20 md:w-84 md:h-84 md:mb-16 rounded-full overflow-clip"/>
        <div className="text-3xl font-heading md:text-5xl">
          I’m Aman — blending <span className="text-primary">UX research</span>, <span className="text-primary">design</span>, and <span className="text-primary">frontend development</span> to build meaningful digital products.
        </div>
        <div className="text-xl font-heading md:text-3xl">I aim to craft experiences that are not only functional, but emotionally resonant and inclusive.</div>
      </div>
      <div className="flex flex-col w-full gap-8">
        {project_details.map(project => <ProjectCards key={project.id} project={project}/>)}
      </div>
    </div>
  );
}
