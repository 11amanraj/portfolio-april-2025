import React from 'react'
import { sectionDetail } from '@/app/Types/Interface'

const CaseSection: React.FC<{ sectionDetail: sectionDetail }> = ({ sectionDetail }) => {
  return (
    <section
      key={sectionDetail.key}
      id={sectionDetail.id}
      className={`h-screen max-w-320 mx-auto ${sectionDetail.bg}`}
    >{sectionDetail.title}</section>
  )
}

export default CaseSection