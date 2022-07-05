import React from 'react'

export default function PortfolioBlocRight() {
  return (
    <div className="bg-[#f5f0f0] px-20">
      <div className="py-12">
        <h2 className="text-[3rem] font-medium">Mon Portfolio</h2>
      </div>
      <div className="flex gap-10">
        <p className='font-medium'>Tous</p>
        <p className='font-medium'>React</p>
        <p className='font-medium'>Php-Laravel</p>
      </div>
      <div className='flex gap-5 py-[5.25rem]'>
        <img className='w-[18rem] h-[20rem]' src="img/personne1.webp" alt="" />
        <img className='w-[18rem] h-[20rem]' src="img/personne2.webp" alt="" />
      </div>
    </div>
  );
}
