import React from 'react'

export default function TestimonialsCards({title, contenu, src, text}) {
  return (
    <div className='bg-[#fff] sm:mb-[5rem] lg:mb-0'>
      <div className='px-4 py-4'>
        <h4 className='pb-4 text-[1.3rem] font-medium'>{title}</h4>
        <p>{contenu}</p>
        <img className='w-[6rem] py-5 rounded-full' src={src} alt="" />
        <span className='text-blue-500'>{text}</span><span> Customer</span>
      </div>
    </div>
  )
}
