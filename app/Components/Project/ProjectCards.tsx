'use client';
import React from 'react'
import Tags from './Tags'
import { Project } from '@/app/Types/Interface'
import ActionLink from './ActionLink';

interface ProjectCardsProps {
  project: Project,
  isReverse: boolean
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ project, isReverse }) => {

  return (
    <li className={`max-w-300 p-8 rounded-4xl bg-white/70 flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 md:gap-16`}>
        <div className="rounded-2xl w-full flex-1 overflow-hidden">
          <img src={project.image} alt={project.title} className='h-full object-cover'/>
        </div>
        <div className='flex flex-col flex-1 gap-3 sm:gap-4'>
          <h4 className='font-text font-bold text-2xl sm:text-3xl xl:text-4xl'>{project.title}</h4>
          <div className='flex gap-3 flex-wrap'>
            <ActionLink title='Read Case Study' isPrimary={true} link={project.caseStudyLink}/>
            <ActionLink title='Github' isPrimary={false} link={project.caseStudyLink}/>
          </div>
          <ul className='flex gap-3'>
            <Tags title='UX Research'/>
            <Tags title='UI'/>
            <Tags title='Frontend'/>
          </ul>
        </div>
    </li>
  )
}

export default ProjectCards