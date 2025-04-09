import ProjectCards from "./Components/Project/ProjectCards";
import { Project } from '@/app/Types/Interface'

export default function Home() {
  const project_details: Project[] = [
    {
      title: 'Project #1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper ullamcorper vulputate. Phasellus efficitur lacus a lectus mollis, ut posuere tortor scelerisque',
      tags: ['UX Resarch, UI, Frontend'],
      caseStudyLink: 'www.google.com', 
      resourceLink: 'www.google.com'
    }
  ]

  return (
    <div className="flex flex-col gap-8 responsive-padding mb-8">
      <div className="text-4xl font-heading">
        I’m Aman — blending <span className="text-primary">UX research</span>, <span className="text-primary">design</span>, and <span className="text-primary">frontend development</span> to build meaningful digital products.
      </div>
      <div className="flex flex-col w-full gap-8">
        <ProjectCards project={project_details[0]}/>
        <ProjectCards project={project_details[0]}/>
      </div>
    </div>
  );
}
