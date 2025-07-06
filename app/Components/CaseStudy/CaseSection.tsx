import React, { ReactNode } from 'react'
import { sectionDetail } from '@/app/Types/Interface'
import SectionTitle from './SectionTitle'

const CaseSection: React.FC<{ sectionDetail: sectionDetail, totalSections: number, children?: ReactNode }> = ({ sectionDetail, totalSections, children }) => {
  return (
    <section
      key={sectionDetail.key}
      id={sectionDetail.id}
      className={`h-screen max-w-320 mx-auto p-4 ${sectionDetail.bg}`}
    >
      <SectionTitle sectionNumber={`0${sectionDetail.key + 1} / 0${totalSections}`} />
      <div className='text-7xl'>{children}</div>
    </section>
  )
}

export default CaseSection