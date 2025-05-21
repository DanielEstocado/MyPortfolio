import React from 'react'
import { education } from '../../constants'

const EducationTimeline = () => {
  return (
    <div>
         <h1 className='divider-start divider'>Educational Attainment</h1>
            <ul className='timeline timeline-vertical items-start timeline-snap-icon '>
               {education.map((item, index)=>(
                  <li key={index} className='!grid-cols-none gap-3'>
                     {index !== 0 && <hr className=''/>}
                     <div className="timeline-middle ">
                        <div className="timeline-middle bg-base-content px-1 rounded-sm">
                           <i className='fa-solid fa-book text-base-100'></i>
                        </div>
                     </div>
                     <div className="timeline-end timeline-box px-8 py-5 w-full" >
                        <h1 className='font-bold text-base uppercase'>{item.label}</h1>
                        <h3 className='italic mb-3 text-neutral-500'>{item.graduated}</h3>
                        <h3 className='my-2 '>{item.school}</h3>
                        {item.course && <h1>{item.course}</h1>}
                        {item.strand && <h1>{item.strand}</h1>}
                     </div>
                     {index !== education.length-1 && <hr/>}
                  </li>
               ))}
            </ul>
    </div>
  )
}

export default EducationTimeline
