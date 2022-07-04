import React from 'react'
import BlocLeftBottomItem from './BlocLeftBottomItem'


export default function BlocLeftHome() {
  const items2 = [
    {
      src : "téléchargemnt(2).webp",
      title : "Name :",
      contenu : "Justin Bieber",
      id : 1
    },
    {
      src : "téléchargemnt(3).webp",
      title : "Location :",
      contenu : "Justin Bieber",
      id : 2
    },
    {
      src : "téléchargemnt(4).webp",
      title : "contactme@templatename.com",
      contenu : "",
      id : 3
    },
    {
      src : "téléchargemnt(5).webp",
      title : "+76 6524 567862 763",
      contenu : "",
      id : 4
    },
    {
      src : "téléchargemnt(6).webp",
      title : "www.mytemplatename.com",
      contenu : "",
      id : 5
    },
  ]
  return (
    <div>
      <div className="w-[25rem]">
        <img src="img/xsmith.jpg.pagespeed.ic.-fvXWI23nq.webp" alt="" />
      </div>
      <div className="bg-blue-900">
        <div className="ml-[4rem] py-[2rem]">
          <h2 className="pb-[1.5rem] text-[#fff] text-2xl">General Information</h2>
          {items2.map((item) => (
          <BlocLeftBottomItem key={item.id} src={item.src} title={item.title} contenu={item.contenu} />
        ))}
        </div>
      </div>
    </div>
  );
}


