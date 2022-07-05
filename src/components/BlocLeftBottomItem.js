import React from 'react'

export default function BlocLeftBottomItem({src, title, contenu}) {
  return (
    <div className='pb-2 flex gap-2'>
    <img className='w-[1.4rem]' src={src} alt="" />
    <span>{title} <span className='text-[#fff]'>{contenu}</span></span>
    </div>
  )
}
