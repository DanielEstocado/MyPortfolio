import React from 'react'
import Button from '../assets/components/Button'
import { me } from '../assets/images'

const About = () => {
  return (
    <section>
      <div className='bg-base-300 shadow-xl lg:pt-24 lg:pb-20 py-18 lg:my-15 lg:border dark:border-neutral-500 border-gray-400  lg:rounded-2xl'>
         <div className=' divider-header pb-6'><h1 className='title-gradient'>About Me</h1></div>
         <section className='py-6 padding-x lg:flex justify-center lg:flex-row-reverse items-center gap-6'>
            <div className='relative'>
               <div className="inline-grid *:[grid-area:1/1] absolute top-2 left-[calc(50%+55px)] -translate-x-1/2 lg:left-auto lg:right-2">
                  <div className="status text-forest-primary bg-forest-primary w-5 h-5 animate-ping"></div>
                  <div className="status text-forest-primary bg-forest-primary w-5 h-5"></div>
               </div> 
               <img src={me} alt="" className=' mx-auto mb-2 lg:mx-0  lg:m-0 rounded-full min-w-40 min-h-40 w-40 h-40 ' />
               <h3 className='font-bastliga lg:absolute lg:bottom-[-40px] lg:right-[-20px] text-2xl font-bold text-center mb-6 lg:rotate-[-40deg]'>DanielEstocado</h3>
            </div>
            <p className='text-center lg:max-w-4xl'>I am a self-motivated and detail-oriented individual, known for my approachable nature and strong problem-solving skills. I have experience in various web development tools, frameworks, and programming languages, with expertise in both front-end and back-end technologies. I bring strong communication, teamwork, and adaptability in dynamic work environments. Passionate about continuous learning and innovation.</p>
         </section>
         <div className='flex justify-center items-center mt-4'>
            <Button text="More about me" link="/about"/>
         </div>
      </div>  
      
    </section>
  )
}

export default About
