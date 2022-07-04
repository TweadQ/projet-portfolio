import React from 'react'
import Navigation from './Navigation'
import BlocLeftHome from './BlocLeft'

export default function Layout({children}) {
  return (
    <div className='px-10 py-4'>
      <Navigation />
      <div className='flex'>
        <div>
          <BlocLeftHome />
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}


