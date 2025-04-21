import React from 'react'

const Tags: React.FC<{title: string}> = ({title}) => {
  return (
    <li className='text-[18px] font-bold font-text border-2 p-2 rounded-xl'>
      {title.toUpperCase()}
    </li>
  )
}

export default Tags