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
    <li className='flex flex-col sm:flex-row items-center gap-8 sm:gap-16  sm:bg-green-950 md:bg-yellow-200 lg:bg-white xl:bg-black 2xl:bg-amber-600'>
        <div className="rounded-2xl flex-1 overflow-hidden">
          <img src={project.image} alt={project.title} className='h-full object-cover'/>
        </div>
        <div className='flex flex-col gap-3 sm:gap-4'>
          {/* <p>
            <span>Google Pay</span>
            <span>|</span>
            <span>Finance</span>
          </p> */}
          <h4 className='font-text font-bold text-2xl sm:text-4xl'>{project.title}</h4>
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

{/* <li className='max-w-[78vw] max-h-138 flex flex-col sm:flex-row items-center gap-16 bg-violet-400 sm:bg-green-950 md:bg-yellow-200 lg:bg-white xl:bg-black 2xl:bg-amber-600'>
        <div className="bg-red-800 min-w-[43vw] rounded-2xl flex-1 overflow-hidden">
          <img src={project.image} alt={project.title} className='h-full object-cover'/>
        </div>
        <div className='flex flex-col gap-4'>
          <p>
            <span>Google Pay</span>
            <span>|</span>
            <span>Finance</span>
          </p>
          <h4 className='font-text font-bold text-2xl sm:text-4xl'>{project.title}</h4>
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
    </li> */}



{/* <li className='max-w-378 max-h-138 flex items-center gap-16 bg-violet-400 sm:bg-green-950 md:bg-yellow-200 lg:bg-white xl:bg-black 2xl:bg-amber-600'>
        <div className="bg-red-800 min-w-206 rounded-2xl flex-1 overflow-hidden">
          <img src={project.image} alt={project.title} className='h-full object-cover'/>
        </div>
        <div className='flex flex-col gap-4'>
          <p>
            <span>Google Pay</span>
            <span>|</span>
            <span>Finance</span>
          </p>
          <h4 className='font-text font-bold text-4xl'>{project.title}</h4>
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
    </li> */}