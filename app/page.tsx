import ProjectCards from "./Components/Project/ProjectCards";
import { Project } from '@/app/Types/Interface'

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
  ]

  return (
    <div className="flex flex-col gap-8 responsive-padding mb-8">
      <div className="text-4xl font-heading">
        I’m Aman — blending <span className="text-primary">UX research</span>, <span className="text-primary">design</span>, and <span className="text-primary">frontend development</span> to build meaningful digital products.
      </div>
      <div className="flex flex-col w-full gap-8">
        {project_details.map(project => <ProjectCards key={project.id} project={project}/>)}
        {/* <ProjectCards project={project_details[0]}/>
        <ProjectCards project={project_details[0]}/> */}
      </div>
    </div>
  );
}
