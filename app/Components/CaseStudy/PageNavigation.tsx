import React from 'react'
import { sectionDetail } from '@/app/Types/Interface'

const PageNavigation: React.FC<{ activeSection: string, sectionDetail: sectionDetail[] }> = ({ activeSection, sectionDetail }) => {
  return (
    <div className='fixed left-0 right-0 top-0 flex gap-8 p-4 bg-yellow-500 text-black'>
      {sectionDetail.map(section =>
        <a key={section.key} href={`#${section.id}`}
          className={`${activeSection === section.id ? 'text-blue-700' : 'text-gray-700'}`}
        >{section.title}</a>
      )}
    </div>
  )
}

export default PageNavigation