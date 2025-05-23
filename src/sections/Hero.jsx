import React from 'react'
import MyInfoCard from '../assets/components/MyInfoCard'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="h-[100vh] lg:py-7 lg:px-5">
      <div className='flex justify-center items-center h-full  max-w-6xl  mx-auto '>
        <div className=' font-montserrat select-none'>
          <h1 className='font-bold text-xl uppercase'>Hello I'm </h1>
          <div className="relative inline-block">
            <h1 className=" absolute lg:top-1 lg:left-1 lg:text-9xl font-bold dark:text-nord-100 text-forest-100 opacity-80">
              DANIEL
            </h1>
            <h1 className="relative lg:text-9xl font-bold title-gradient">
              DANIEL
            </h1>
          </div>
          <div className='lg:text-4xl font-bold flex justify-center items-center'>
            <span className='text-neutral-500'>I'm&nbsp;</span>
            <div className='text-primary  '>
              <Typewriter
                options={{
                  strings: ['a Web Developer.', 'a Programmer.', 'an Artist.'],
                  autoStart: true,
                  loop: true,
                  cursor: '_',
                }}
              />
            </div>
          </div>
        </div>
        
      </div>
      
      
    </section>
    
  )
}

export default Hero
