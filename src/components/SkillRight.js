import React from 'react'
import ProgressBarSkill from './ProgressBarSkill';

export default function SkillRight() {
    const items4 = [
        {
            title : "HTML5",
            valeur : "70%",
            valeur2 : "w-[70%]",
            id : 1
        },
        {
            title : "CSS",
            valeur : "60%",
            valeur2 : "w-[60%]",
            id : 2
        },
        {
            title : "JavaScript",
            valeur : "75%",
            valeur2 : "w-[75%]",
            id : 3
        },
    ]
    const items5 = [
    {    
      title: "React",
      valeur : "100%",
      valeur2: "w-[100%]",
      id: 4,
    },
    {
      title: "WordPress",
      valeur : "90%",
      valeur2: "w-[90%]",
      id: 5,
    },
    {
      title: "PHP/Laravel",
      valeur : "100%",
      valeur2: "w-[100%]",
      id: 6,
    }
    ]
    
  return (
    <div className="bg-[#f5f0f0]">
      <div className="px-20 py-11">
        <p className="text-3xl">Ce que je fais bien</p>
        <h2 className="text-[4.5rem] pb-5 mt-[-1.5rem] font-medium">Mes Compétences</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad
          earum optio eum mollitia atque id possimus aliquam repellendus,
          adipisci repellat ab architecto similique officia doloribus fuga odio
          quis ullam cum ipsam quibusdam vel consectetur. Quam saepe asperiores
          animi delectus amet tempora quod suscipit sunt sit officiis architecto
          sed, id, explicabo at deleniti pariatur est.
        </p>
      </div>
      <div className='lg:flex lg:gap-[8rem] px-20 lg:py-12'>
        {items4.map((item) => (
          <ProgressBarSkill key={item.id} valeur={item.valeur} title={item.title} valeur2={item.valeur2}/>
        ))}
      </div>
      <div className='lg:flex gap-[8rem] px-20 lg:py-12 pb-[8.57rem]'>
        {items5.map((item) => (
          <ProgressBarSkill key={item.id} valeur={item.valeur} title={item.title} valeur2={item.valeur2}/>
        ))}
      </div>
    </div>
  );
}
