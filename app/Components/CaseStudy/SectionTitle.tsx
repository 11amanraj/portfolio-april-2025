import React from 'react'
import { titleSection } from '@/app/Types/Interface'

const SectionTitle: React.FC<{ sectionNumber: string, titleDetail: titleSection[] }> = ({ sectionNumber, titleDetail }) => {
    return (
        <div className='flex font-mono justify-between'>
            <div className='flex flex-col basis-0 flex-[1] gap-2'>
                <span>
                    {sectionNumber}
                </span>
                <span className='h-0.5 bg-red-400'></span>
                <h2 className='text-5xl'>{titleDetail[0].text}</h2>
            </div>

            {titleDetail.slice(1).map(detail =>
                <div key={detail.id} className='flex flex-col basis-0 flex-[2] gap-2'>
                    {detail.header ?
                        <span className='text-right'>
                            {detail.header}
                        </span> :
                        <span className='text-right'>
                            &nbsp;
                        </span>
                    }
                    <span className='h-0.5 bg-red-400'></span>
                    <span className='w-full text-3xl max-w-100 self-end text-right'>
                        {detail.text}
                    </span>
                </div>
            )}

            {/* <div className='flex flex-col basis-0 flex-[2] gap-2'>
                <span className='text-right'>
                    Mini Title
                </span>
                <span className='h-0.5 bg-red-400'></span>
                <h2 className='text-3xl max-w-120 text-right'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
            </div>

            <div className='flex flex-col basis-0 flex-[2] gap-2'>
                <span className='text-right'>
                    Mini Title
                </span>
                <span className='h-0.5 bg-red-400'></span>
                <h2 className='text-3xl max-w-120 text-right'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
            </div> */}
        </div>
    )
}

export default SectionTitle