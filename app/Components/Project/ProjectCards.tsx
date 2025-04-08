import React from 'react'

const ProjectCards: React.FC<{title: string, description: string}> = ({title, description}) => {
  return (
    <div className="flex rounded-2xl overflow-hidden h-120 flex-col sm:h-60 sm:flex-row">
        <div className="bg-red-800 flex-1"></div>
        <div className="bg-green-800 flex-1 flex flex-col justify-between">
            <div className='pt-4 flex flex-col gap-4'>
                <h3 className='text-2xl'>{title}</h3>
                <p>{description}</p>
            </div>
            <ul className='pb-4 flex gap-2'>
                <li>UX Research</li>
                <li>UX Research</li>
                <li>UX Research</li>
            </ul>
        </div>
    </div>
  )
}

export default ProjectCards