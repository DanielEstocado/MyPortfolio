import React from 'react'
import { tagColors } from '../../constants'

const ProjectCard = () => {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
         <figure>
            <img
               src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
               alt="Shoes" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">
               Card Title
               <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
               <div className={`badge badge-sm font-montserrat font-semibold px-3 w-20 ${tagColors["primary"] || "bg-gray-300 text-black"}`}>Fashion</div>
               <div className={`badge badge-sm font-montserrat font-semibold px-3 w-20 ${tagColors["secondary"] || "bg-gray-300 text-black"}`}>Products</div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default ProjectCard
