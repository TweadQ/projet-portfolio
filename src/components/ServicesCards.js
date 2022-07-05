import React from 'react'

export default function ServicesCards({src, title, contenu}) {
  return (
    <div className='flex gap-5'>
      <img className='h-10 mt-2' src={src} alt="" />
      <div>
        <h3 className='text-2xl font-medium mb-2'>{title}</h3>
        <p>{contenu}</p>
      </div>
    </div>
  );
}
