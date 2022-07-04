import React from 'react'

export default function BlocLeftBottomItem({src, title, contenu}) {
  return (
    <div className='pb-2'>
    <img src={src} alt="" />
    <span>{title} <span className='text-[#fff]'>{contenu}</span></span>
    </div>
  )
}
