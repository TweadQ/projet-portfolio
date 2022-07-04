import React from 'react'

export default function ProgressBarSkill({title, valeur}) {
  return (
    <div className='flex gap-20 text-[1.4rem]'>
        <p className=''>{title}</p>
        <p>{valeur}</p>
    </div>
  )
}
