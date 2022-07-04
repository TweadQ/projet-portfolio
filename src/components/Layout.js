import React from 'react'
import Navigation from './Navigation'
import BlocLeft from './BlocLeft'

export default function Layout({children}) {
  return (
    <div>
      <Navigation />
      <div className='flex'>
        <div>
          <BlocLeft />
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
