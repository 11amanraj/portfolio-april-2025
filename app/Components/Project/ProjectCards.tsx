'use client';
import React from 'react'
import Tags from './Tags'
import { Project } from '@/app/Types/Interface'
import ActionLink from './ActionLink';

interface ProjectCardsProps {
  project: Project
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ project }) => {

  return (
    <div className="text-background flex rounded-2xl overflow-hidden h-140 flex-col sm:h-140 sm:flex-row">
        <div className="bg-red-800 rounded-2xl flex-1 overflow-hidden">
          <img src={project.image} alt={project.title} className='h-full object-cover'/>
        </div>
        <div className='flex flex-col gap-4'>
          <p>
            <span>Google Pay</span>
            <span>|</span>
            <span>Finance</span>
          </p>
          <h4>{project.title}</h4>
          <div className='flex gap-3'>
            <ActionLink />
            <ActionLink />
          </div>
          <ul className='flex gap-3'>
            <Tags title='UX Research'/>
            <Tags title='UI'/>
            <Tags title='Frontend'/>
          </ul>
        </div>
        {/* <div className="bg-red-800 rounded-2xl flex-1 overflow-hidden">
          <img src={project.image} alt={project.title} className='h-full object-cover'/>
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
            <h3 className='text-2xl font-heading text-primary'>
              <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <ul className='flex gap-2 flex-wrap'>
                <Tags title='UX Research'/>
                <Tags title='UI'/>
                <Tags title='Frontend'/>
            </ul>
            <p className='font-text'>{project.description}</p>
        </div> */}
    </div>
  )
}

export default ProjectCards