import React from 'react'
import { tagColors } from '../../constants'

const ProjectCard = ({title, description, imgUrl, status, tags}) => {
  return (
    <div className='h-full cursor-pointer'>
      <div className="card group bg-base-100  shadow-sm h-full relative rounded-2xl">
         <div className='flex justify-end'>
            <div className="  px-3 py-1 mb-2 text-neutral-500 mx-3 mt-3 text-xs">{status}</div>
         </div>
         <div className='px-6 overflow-hidden '>
            <figure className=" py-1 overflow-hidden md:h-50 aspect-square w-full relative rounded-2xl border-1 border-primary">
               <img
                  src={imgUrl}
                  alt="Project"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
               />
            </figure>
         </div>

         <div className="card-body pt-3 flex flex-col flex-grow-0 ">
            <h2 className="card-title uppercase">
               {title}
               
            </h2>
            <p>{description}</p>
            <div className=" flex flex-wrap gap-2 justify-start items-start mt-3">
               {tags &&
                  Object.entries(tags).map(([tag, color], index) => (
                     <div
                     key={index}
                     className={`badge badge-sm font-montserrat text-xs font-semibold px-2 ${tagColors[color] || "bg-gray-300 text-black"}`}
                     >
                     {tag}
                     </div>
                  ))}
            </div>
         </div>
      </div>
    </div>
  )
}

export default ProjectCard
