import React from 'react'
import { sectionDetail } from '@/app/Types/Interface'

const CaseSection: React.FC<{ sectionDetail: sectionDetail, totalSections: number }> = ({ sectionDetail, totalSections }) => {
  return (
    <section
      key={sectionDetail.key}
      id={sectionDetail.id}
      className={`h-screen max-w-320 mx-auto p-4 ${sectionDetail.bg}`}
    >
      <h2 className='flex flex-col gap-2 font-mono'>
        <span>
          {`0${sectionDetail.key + 1} / 0${totalSections}`}
        </span>
        <span className='h-0.5 bg-red-400'></span>
        <span className='text-5xl'>
          {sectionDetail.title}
        </span>
      </h2>
    </section>
  )
}

export default CaseSection