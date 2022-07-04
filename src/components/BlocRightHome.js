import React from 'react'
import HomeCard from './HomeCard';


export default function BlocRightHome() {
  const items3 = [
    {
      valeur : "75%",
      title : "INTUITION",
      id : 1
    },
    {
      valeur : "83%",
      title : "CREATIVTY",
      id : 2
    },
    {
      valeur : "25%",
      title : "PURE LUCK",
      id : 3
    },
    {
      valeur : "95%",
      title : "AWESOMENESS",
      id : 4
    }
  ]
  return (
    <div className="bg-[#f5f0f0]">
      <div className="px-20 py-12">
        <p className="text-3xl">Développeur full stack</p>
        <h2 className="text-[4.5rem] pb-5 mt-[-1.5rem]">Justin Bieber</h2>
        <p className="text-2xl pb-8">Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad
          earum optio eum mollitia atque id possimus aliquam repellendus,
          adipisci repellat ab architecto similique officia doloribus fuga odio
          quis ullam cum ipsam quibusdam vel consectetur. Quam saepe asperiores
          animi delectus amet tempora quod suscipit sunt sit officiis architecto
          sed, id, explicabo at deleniti pariatur est. Facilis illo soluta vitae
          in fugit. Dolor nulla deserunt quos dolore facere eveniet beatae
          nesciunt in exercitationem ab quam accusamus officia magni eum
          suscipit, quod, officiis voluptatum! Quisquam a dolores quia, ullam
          reprehenderit quibusdam non modi ut amet officia ad quis aliquid
          dolorum dolor nisi?
        </p>
      </div>
      <div className='flex gap-[8rem] px-20 py-[2.55rem] text-center'>
        {items3.map((item) => (
          <HomeCard
            key={item.id}
            valeur={item.valeur}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
