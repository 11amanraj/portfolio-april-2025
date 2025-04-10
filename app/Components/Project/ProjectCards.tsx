import React from 'react'
import Tags from './Tags'
import { Project } from '@/app/Types/Interface'

interface ProjectCardsProps {
  project: Project
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ project }) => {
  return (
    <div className="flex rounded-2xl overflow-hidden h-120 flex-col sm:h-60 sm:flex-row">
        <div className="bg-red-800 flex-1 overflow-hidden">
          <img src={project.image} alt={project.title} className='h-full object-cover'/>
        </div>
        <div className="bg-green-800 flex-1 flex flex-col justify-between">
            <div className='pt-4 flex flex-col gap-4'>
                <h3 className='text-2xl font-heading flex gap-2'><span>{project.title}</span><span><a href={project.caseStudyLink}>Open</a></span></h3>
                <p className='font-text'>{project.description}</p>
            </div>
            <ul className='pb-4 flex gap-2 flex-wrap'>
                <Tags title='UX Research'/>
                <Tags title='UI'/>
                <Tags title='Frontend'/>
            </ul>
        </div>
    </div>
  )
}

export default ProjectCards