import React from 'react'

import { workExperience } from '../../constants'
import { tagColors } from '../../constants'

const WorkTimeline = () => {
  return (
    <div>
      <h1 className='divider divider-start'>Work Experience</h1>
            <ul className='timeline timeline-vertical items-start timeline-snap-icon'>
               {workExperience.map((item, index) => (
                  <li key={index} className='!grid-cols-none gap-2'>
                  {index !== 0 && <hr />}
                  <div className="timeline-middle bg-base-content px-1 rounded-sm">
                     <i className='fa-solid fa-computer text-base-100'></i>
                  </div>
                  <div className="timeline-end timeline-box py-5">
                     {Object.keys(item).map((key) => {
                        if (key === "tags") {
                        return (
                           <div key={key} className="flex flex-wrap gap-2 py-2 mt-3 ml-5">
                              {Object.entries(item[key]).map(([tag, color]) => (
                              <div 
                                 key={tag} 
                                 className={`badge badge-sm font-montserrat px-3 w-20 ${tagColors[color] || "bg-gray-300 text-black"}`}
                              >
                                 {tag}
                              </div>
                              ))}
                           </div>
                        );
                        }
                        return (
                        <div key={key} className="flex items-baseline gap-3 py-2">
                           <i className={`${item[key].icon}`}></i>
                           <span>{item[key].value}</span>
                        </div>
                        );
                     })}
                  </div>
                  {index !== workExperience.length - 1 && <hr />}
                  </li>
               ))}
            </ul>
    </div>
  )
}

export default WorkTimeline
