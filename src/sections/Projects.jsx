import React from 'react'
import ProjectCard from '../assets/components/ProjectCard'
import Button from '../assets/components/Button'
import ProjectStats from '../assets/components/ProjectStats'

const Projects = () => {
  return (
    <div className='padding-x  lg:pt-24 lg:pb-12 py-18 lg:rounded-4xl bg-base-300 shadow-xl lg:border-y dark:border-neutral-500 border-gray-400'>
      <div className='divider-header'><h1 className='title-gradient'>Projects</h1></div>
      
      <div className='flex gap-4 pt-16 pb-10'>
         <ProjectCard/>
         <ProjectCard/>
         <ProjectCard/>
      </div>
      <div className='flex justify-end items-center '>
         <Button text="See More"/>
      </div>
    </div>
  )
}

export default Projects
