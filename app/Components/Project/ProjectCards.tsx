import React from 'react'
import Tags from './Tags'
import { Project } from '@/app/Types/Interface'

interface ProjectCardsProps {
  project: Project
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ project }) => {
  return (
    <div className="flex rounded-2xl overflow-hidden h-140 flex-col sm:h-70 sm:flex-row">
        <div className="bg-red-800 rounded-2xl flex-1 overflow-hidden">
          <img src={project.image} alt={project.title} className='h-full object-cover'/>
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
            <h3 className='text-2xl font-heading text-primary'>
              <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer">
                {project.title}
                {/* <img src="./icons/open_in_new.svg" alt="open-in-new" /> */}
              </a>
            </h3>
            <ul className='flex gap-2 flex-wrap'>
                <Tags title='UX Research'/>
                <Tags title='UI'/>
                <Tags title='Frontend'/>
            </ul>
            <p className='font-text'>{project.description}</p>
            {/* <div className='pt-4 flex flex-col gap-4'>
            </div> */}
          {/* <div className='flex gap-4'>
            <span>Open Case Study</span>
            <span>
              <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer">
                <img src="./icons/open_in_new.svg" alt="open-in-new" />
              </a>
            </span>
          </div> */}
        </div>
    </div>
  )
}

export default ProjectCards