import React from 'react'
import { sectionDetail } from '@/app/Types/Interface'

const CaseSection: React.FC<{ sectionDetail: sectionDetail, totalSections: number }> = ({ sectionDetail, totalSections }) => {
  return (
    <section
      key={sectionDetail.key}
      id={sectionDetail.id}
      className={`h-screen max-w-320 mx-auto p-4 ${sectionDetail.bg}`}
    >
      <div className='flex font-mono'>
        <div className='flex flex-col gap-2'>
          <span>
            {`0${sectionDetail.key + 1} / 0${totalSections}`}
          </span>
          <span className='h-0.5 bg-red-400'></span>
          <h2 className='text-5xl'>Title</h2>
        </div>

        <div className='flex flex-col gap-2'>
          <span className='text-right'>
            Mini Title
          </span>
          <span className='h-0.5 bg-red-400'></span>
          <h2 className='text-3xl max-w-140 text-right'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>

        <div className='flex flex-col gap-2'>
          <span className='text-right'>
            Mini Title
          </span>
          <span className='h-0.5 bg-red-400'></span>
          <h2 className='text-3xl max-w-140 text-right'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default CaseSection