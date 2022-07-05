import React from 'react'

export default function ProgressBarSkill({title, valeur, valeur2}) {
  return (
    <div className='mb-[2.75rem] sm:w-[26rem] lg:w-[13rem]'>
      <div className="flex justify-between lg:mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          {title}
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {valeur}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className={`bg-blue-600 h-2.5 rounded-full ${valeur2}`}/>
      </div>
    </div>
  );
}
