import React from 'react'

const PageNavigation: React.FC<{activeSection: string}> = ({activeSection}) => {
  console.log(activeSection)
  
    return (
    <div className='fixed left-0 right-0 top-0 flex gap-8 p-4 bg-yellow-500 text-black'>
        <a href='#section-a' className={`${activeSection === 'section-a' ? 'text-blue-700' : 'text-gray-700'}`}>Section A</a>
        <a href='#section-b' className={`${activeSection === 'section-b' ? 'text-blue-700' : 'text-gray-700'}`}>Section B</a>
        <a href='#section-c' className={`${activeSection === 'section-c' ? 'text-blue-700' : 'text-gray-700'}`}>Section C</a>
        <a href='#section-d' className={`${activeSection === 'section-d' ? 'text-blue-700' : 'text-gray-700'}`}>Section D</a>
    </div>
  )
}

export default PageNavigation