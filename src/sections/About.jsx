import React from 'react'
import Button from '../assets/components/Button'

const About = () => {
  return (
    <section>
      <div className='bg-base-300 shadow-xl lg:pt-24 lg:pb-20 py-18 lg:my-15 lg:border-y dark:border-neutral-500 border-gray-400'>
         <h1 className=' divider-header pb-10'>About Me</h1>
         <section className='py-6 padding-x flex flex-col '>
            <p className='text-center lg:max-w-4xl lg:mx-auto'>I am a self-motivated and detail-oriented individual, known for my approachable nature and strong problem-solving skills. I have experience in various web development tools, frameworks, and programming languages, with expertise in both front-end and back-end technologies. I bring strong communication, teamwork, and adaptability in dynamic work environments. Passionate about continuous learning and innovation.</p>
         </section>
         <div className='flex justify-center items-center mt-4'>
            <Button text="My Resume"/>
         </div>
      </div>  
      
    </section>
  )
}

export default About
