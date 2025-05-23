import React from 'react'

import { workExperience } from '../../constants'
import { tagColors, tagCategoryMap } from '../../constants'

const WorkTimeline = () => {
  return (
    <div>
      <ul className='timeline timeline-vertical items-start timeline-snap-icon'>
         {workExperience.map((item, index) => (
            <li key={index} className='!grid-cols-none lg:gap-3'>
            {index !== 0 && <hr className='md:block hidden bg-primary'/>}
            <div className="timeline-middle bg-primary px-1 rounded-full md:block hidden">
               <i className='fa-solid fa-computer text-base-100'></i>
            </div>
            <div className="timeline-end timeline-box px-8 py-5 ">
               <div className='flex items-baseline gap-3 py-2'>
                  <i className={`${item.company.icon}`}></i>
                  <h1 className='font-bold text-base uppercase'>{item.company.value}</h1>
               </div>
               <h3 className='italic mb-5 px-5 text-neutral-500'>{item.date.value}</h3>
               <div className='flex items-baseline gap-3'>
                  <i className={`${item.position.icon}`}></i>
                  <h3 className='my-2 '>{item.position.value}</h3>
               </div>
               <div className='flex items-baseline gap-3'>
                  <i className={`${item.specialization.icon}`}></i>
                  <h3 className='my-2 '>{item.specialization.value}</h3>
               </div>
               <div className='flex items-baseline gap-3'>
                  <i className={`${item.indsutry.icon}`}></i>
                  <h3 className='my-2 '>{item.indsutry.value}</h3>
               </div>
               <div className='flex items-baseline gap-3'>
                  <i className={`${item.goal.icon}`}></i>
                  <h3 className='my-2 '>{item.goal.value}</h3>
               </div>
               <div className="flex flex-wrap gap-2 mt-4 px-5">
                  {item.tags.map((tag, i) => {
                     const category = tagCategoryMap[tag] || "primary";
                     const colorClass = tagColors[category] || "bg-gray-300 text-black"; 
                     return (
                        <span
                        key={i}
                        className={`badge badge-sm font-montserrat font-semibold px-3 ${colorClass}`}
                        >
                        {tag}
                        </span>
                     );
                  })}
               </div>
            </div>
            {index !== workExperience.length - 1 && <hr className='md:block hidden bg-primary'/>}
            </li>
         ))}
      </ul>
    </div>
  )
}

export default WorkTimeline
