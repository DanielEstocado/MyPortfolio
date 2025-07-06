import React from 'react'
import { tagColors, tagCategoryMap } from '../../constants'

const ProjectCard = ({title, description, imgUrl, tags}) => {
  return (
    <div className='h-full cursor-pointer'>
      <div className="card group bg-base-100  shadow-sm h-full relative rounded-2xl">
         <div className='px-6 py-6 overflow-hidden relative border-b border-base-300'>
            <div className="absolute inset-0 bg-cross z-0 rounded-2xl" />
            <figure className=" py-1 overflow-hidden md:h-40 lg:aspect-auto aspect-square w-full relative rounded-2xl ">
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
            <p className='text-xs 2xl:text-base'>{description}</p>
            <div className=" flex flex-wrap gap-2 justify-start items-start mt-3">
               {tags &&
              tags.map((tag, index) => {
                const tagCategory = tagCategoryMap[tag] || "default"
                const tagClass = tagColors[tagCategory] || "bg-gray-300 text-black"
                return (
                  <div
                    key={index}
                    className={`badge badge-sm font-montserrat text-xs rounded-md font-semibold px-2 ${tagClass}`}
                  >
                    {tag}
                  </div>
                )
              })}
            </div>
         </div>
      </div>
    </div>
  )
}

export default ProjectCard
