import React from 'react'
import NavItems from '../components/NavItems'

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
    <div className="flex items-center">
      <h1 className="text-3xl mr-20">
        Smith<span>.</span>CV
      </h1>
      <div className="flex text-2xl">
        {items.map((item) => (
          <NavItems key={item.id} slug={item.slug} title={item.title} />
        ))}
      </div>
    </div>
  );
}
