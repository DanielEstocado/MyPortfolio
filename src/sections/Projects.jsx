import React from 'react'
import ProjectCard from '../assets/components/ProjectCard'
import Button from '../assets/components/Button'
import { myProjects } from '../constants'

const Projects = () => {
  return (
    <div className='  lg:pt-24 lg:pb-12 py-18 lg:rounded-4xl bg-base-300 shadow-xl lg:border dark:border-neutral-500 border-gray-400'>
      <div className='divider-header'><h1 className='title-gradient'>Projects</h1></div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-16 pb-10 padding-x'>
        {myProjects.map((project, index) => (
          <div  key={index} className='h-full transition-transform duration-300 transform hover:scale-101 hover:-translate-y-1'>
            <ProjectCard  title={project.title} description={project.description} imgUrl={project.imgUrl} status={project.status} tags={project.tags}/>
          </div>
        ))}
      </div>
      <div className='flex justify-end items-center padding-x'>
         <Button text="See More" link="/projects"/>
      </div>
    </div>
  )
}

export default Projects
