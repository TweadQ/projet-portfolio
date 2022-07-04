import React from 'react'
import ItemNavBar from '../components/NavItems'

export default function Navigation() {
  const items = [
    {
      slug : '/',
      title : 'About',
      id : 1
    },
    {
      slug : '/Skill',
      title : 'Skill',
      id : 2
    },
    {
      slug : '/Services',
      title : 'Services',
      id : 3
    },
    {
      slug : '/Portfolio',
      title : 'Portfolio',
      id : 4
    },
    {
      slug : '/Testimonials',
      title : 'Testimonials',
      id : 5
    },
    {
      slug : '/Contact',
      title : 'Contact',
      id : 6
    }
  ]
  return (
    <div>
      <h1 className='bg-blue-800'>
        Smith<span>.</span>CV
      </h1>
      {items.map((item) => (
        <ItemNavBar key={item.id} slug={item.slug} title={item.title} />
      ))}
    </div>
  );
}
