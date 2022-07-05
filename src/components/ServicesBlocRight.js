import React from 'react'
import ServicesCards from './ServicesCards';

export default function ServicesBlocRight() {
  const items6 = [
    {
      src : 'img/temps.webp',
      title : 'Développement de site web',
      contenu : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim veritatis animi accusamus laborum assumenda non soluta obcaecati vero optio quisquam saepe et ipsa quis deleniti.',
      id : 1
    },
    {
      src : 'img/fiche.webp',
      title : 'Maintenance',
      contenu : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim veritatis animi accusamus laborum assumenda non soluta obcaecati vero optio quisquam saepe et ipsa quis deleniti.',
      id : 2
    },
    {
      src : 'img/référence.webp',
      title : 'Référencement (SEO)',
      contenu : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam enim veritatis animi accusamus laborum assumenda non soluta obcaecati vero optio quisquam saepe et ipsa quis deleniti.',
      id : 3
    }
  ]
  return (
    <div className="bg-[#f5f0f0] px-20">
      <div className="py-12">
        <p className="text-3xl">Ce que je vous offre</p>
        <h2 className="text-[4.5rem] pb-5 mt-[-1.5rem] font-medium">Mes Services</h2>
      </div>
      <div className='flex gap-8'>
        {items6.map((item) => (
          <ServicesCards
            key={item.id}
            src={item.src}
            title={item.title}
            contenu={item.contenu}
          />
        ))}
      </div>
      <div className='py-[4.65rem]'>
      <button className='bg-blue-500 text-center w-[10rem] h-[2rem]'>Contactez-moi</button>
      </div>
    </div>
  );
}
