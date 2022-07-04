import React from 'react'
import { Link } from 'react-router-dom'


export default function NavItems({title, slug}) {
  return (
      <Link className="bg-blue-800 mr-[0.05rem] w-36 text-center" to={slug}>
        {title}
      </Link>
  );
}

