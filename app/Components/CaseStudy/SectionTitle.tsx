import React from 'react'
import { titleSection } from '@/app/Types/Interface'

const SectionTitle: React.FC<{ sectionNumber: string, titleDetail: titleSection[] }> = ({ sectionNumber, titleDetail }) => {
    return (
        <div className='flex flex-wrap gap-y-8 font-mono justify-between'>
            <div className='flex flex-col basis-0 flex-[1] gap-2'>
                <span>
                    {sectionNumber}
                </span>
                <span className='h-0.5 bg-red-400'></span>
                <h2 className='text-5xl'>{titleDetail[0].text}</h2>
            </div>

            <div className='flex justify-between'>
                {titleDetail.slice(1).map(detail =>
                    <div key={detail.id} className='flex flex-col gap-2'>
                        {detail.header ?
                            <span className='text-right'>
                                {detail.header}
                            </span> :
                            <span className='text-right'>
                                &nbsp;
                            </span>
                        }
                        <span className='h-0.5 bg-red-400'></span>
                        <span className='text-3xl w-100 self-end text-right'>
                            {detail.text}
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SectionTitle