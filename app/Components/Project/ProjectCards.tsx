import React from 'react'
import Tags from './Tags'

const ProjectCards: React.FC<{title: string, description: string}> = ({title, description}) => {
  return (
    <div className="flex rounded-2xl overflow-hidden h-120 flex-col sm:h-60 sm:flex-row">
        <div className="bg-red-800 flex-1"></div>
        <div className="bg-green-800 flex-1 flex flex-col justify-between">
            <div className='pt-4 flex flex-col gap-4'>
                <h3 className='text-2xl font-heading'>{title}</h3>
                <p className='font-text'>{description}</p>
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