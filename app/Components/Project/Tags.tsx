import React from 'react'

const Tags: React.FC<{title: string}> = ({title}) => {
  return (
    <li className='border-1 border-white rounded-[4px] px-3 py-1'>{title}</li>
  )
}

export default Tags