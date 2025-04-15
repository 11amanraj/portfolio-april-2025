import React from 'react'

const Tags: React.FC<{title: string}> = ({title}) => {
  return (
    <li className='bg-[#FFEDF3] text-[#DD97BC] font-heading text-xs rounded-[4px] font-bold px-3 py-1'>{title.toUpperCase()}</li>
  )
}

export default Tags