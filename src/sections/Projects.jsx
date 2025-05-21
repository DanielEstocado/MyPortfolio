import React from 'react'
import ProjectCard from '../assets/components/ProjectCard'
import ProjectStats from '../assets/components/ProjectStats'

const Projects = () => {
  return (
    <div className='padding-x  lg:pt-24 lg:pb-12 py-18 lg:rounded-4xl bg-base-300 shadow-xl'>
      <h1 className=' divider lg:text-primary lg:uppercase lg:text-6xl lg:font-montserrat lg:font-bold mb-15'>Projects</h1>
      
      <div className='flex gap-4'>
         <ProjectCard/>
         <ProjectCard/>
         <ProjectCard/>
      </div>
      <div className='flex justify-end items-center mt-10'>
         <button className="btn btn-outline btn-primary px-3 py-1 border-primary text-primary">See More</button>
      </div>
    </div>
  )
}

export default Projects
