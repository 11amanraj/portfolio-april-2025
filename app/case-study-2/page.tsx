import React from 'react'

const HomePage = () => {
    return (
        <>
            <section className="w-full aspect-[16/6] bg-gray-800 mx-auto">
                Video goes here
            </section>

            <section className={`h-screen max-w-320 mx-auto p-4 bg-red-400`}>
                {/* <SectionTitle titleDetail={titleDetail} sectionNumber={`0${sectionDetail.key + 1} / 0${totalSections}`} /> */}
                <div className='flex flex-wrap gap-y-8 font-mono justify-between'>
                    <div className='flex flex-col basis-0 flex-[1] gap-2'>
                        <span>
                            01
                        </span>
                        <span className='h-0.5 bg-red-400'></span>
                        <h2 className='text-5xl'>Title #1</h2>
                    </div>

                    {/* <div className='flex justify-between'>
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
                    </div> */}
                </div>
                <div className='text-7xl'>Section Children</div>
            </section>
        </>
    )
}

export default HomePage