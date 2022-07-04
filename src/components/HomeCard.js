import React from 'react'

export default function HomeCard({valeur, title}) {
  return (
    <div>
        <p className='pb-10 text-[3.5rem]'>{valeur}</p>
        <p className='text-[1.3rem]'>{title}</p>
    </div>
  )
}
