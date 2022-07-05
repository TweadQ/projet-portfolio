import React from 'react'
import TestimonialsCards from './TestimonialsCards'

export default function TestimonialsBlocRight() {
    const items7 = [
        {
            title : 'Rapide et efficace',
            contenu : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat adLorem ipsum dolor sit amet consectetur adipisicing elit.',
            src : 'img/personne1.webp',
            text : 'Diane Smith',
            id : 1
        },
        {
            title : 'Fort de proposition',
            contenu : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat adLorem ipsum dolor sit amet consectetur adipisicing elit.',
            src : 'img/personne2.webp',
            text : 'Diane Smith',
            id : 2
        },
        {
            title : 'Agréable et proffessionel',
            contenu : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat adLorem ipsum dolor sit amet consectetur adipisicing elit.',
            src : 'img/personne3.webp',
            text : 'Diane Smith',
            id : 3
        }
    ]
  return (
    <div className="bg-[#f5f0f0] px-20">
      <div className="py-12">
        <p className="text-3xl">Ce que les clients disent</p>
        <h2 className="text-[4.5rem] pb-5 mt-[-1.5rem]">Témoignages</h2>
      </div>
      <div className='flex gap-8 pb-[6.83rem]'>
        {items7.map((item) => (
          <TestimonialsCards
            key={item.id}
            src={item.src}
            title={item.title}
            contenu={item.contenu}
            text = {item.text}
          />
        ))}
      </div>
    </div>
  )
}
