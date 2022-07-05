import React from 'react'

export default function ContactBlocRight() {
  return (
    <div className="bg-[#f5f0f0] px-20">
      <div className="py-20">
        <h2 className="text-[4.5rem] pb-5 mt-[-1.5rem]">Contactez moi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          adLorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          adLorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          adLorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex gap-[6rem] pb-5">
        <input className="rounded w-[25rem]" type="text" placeholder="Name" />
        <input className="rounded w-[25rem]" type="text" placeholder="E-mail" />
      </div>
      <div className='flex flex-col'>
        <input className="rounded mb-5" type="text" placeholder="Subject" />
        <input className="rounded h-[8rem] mb-10" type="text" placeholder="Message" />
      </div>
      <div className='pb-[1.25rem]'>
        <button className="bg-blue-500 text-center w-[10rem] h-[2rem]">Send Message</button>
      </div>
    </div>
  );
}
