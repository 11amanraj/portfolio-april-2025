import React from 'react'

const SectionTitle: React.FC<{ sectionNumber: string }> = ({ sectionNumber }) => {
    return (
        <div className='flex font-mono justify-between'>
            <div className='flex flex-col basis-0 flex-[1] gap-2'>
                <span>
                    {sectionNumber}
                </span>
                <span className='h-0.5 bg-red-400'></span>
                <h2 className='text-5xl'>Title</h2>
            </div>

            <div className='flex flex-col basis-0 flex-[2] gap-2'>
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
            </div>
        </div>
    )
}

export default SectionTitle