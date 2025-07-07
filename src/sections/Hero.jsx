import React from 'react'
import MyInfoCard from '../components/MyInfoCard'
import Typewriter from 'typewriter-effect';
import { socials } from '../constants';

const Hero = () => {
  return (
    <section className="lg:h-[100vh] h-[calc(100vh-64px)] lg:py-7 lg:px-5">
      <div className='flex justify-center items-center h-full  max-w-6xl  mx-auto'>
        <div className=' font-montserrat select-none w-full justify-center items-center'>
          {/* header */}
          <div className='flex justify-center items-center mb-3 lg:mb-auto'>
            <div>
              <h1 className='font-bold text-xl uppercase'>Hello I'm </h1>
              <div className="relative inline-block">
                <h1 className=" absolute lg:top-1 lg:left-1 top-0.5 left-0.5 lg:text-9xl text-5xl font-bold dark:text-nord-100 text-forest-100 opacity-80">
                  DANIEL
                </h1>
                <h1 className="relative lg:text-9xl text-5xl font-bold title-gradient">
                  DANIEL
                </h1>
              </div>
            </div>
          </div>
          
          {/* Typewriter */}
          <div className='lg:text-4xl text-xl font-bold flex justify-center items-center'>
            <span className='text-neutral-500'>I'm&nbsp;</span>
            <div className='text-primary  '>
              <Typewriter
                options={{
                  strings: ['a Web Developer.', 'a Programmer.', 'an Artist.'],
                  autoStart: true,
                  loop: true,
                  cursor: '_',
                  delay: 60
                }} 
              />
            </div>
          </div>

          {/* Social Links */}
          <div className='flex justify-center items-center lg:mt-8 mt-10'>
            <div className="grid grid-cols-3 lg:flex gap-4 text-2xl justify-items-center lg:justify-center lg:w-full w-40">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="items-center flex justify-center rounded-full h-10 w-10 my-button"
                aria-label={social.label}
                title={social.label}
              >
                <i className={`${social.icon} text-base`}></i>
              </a>
            ))}
            </div>
          </div>
        </div>
        
      </div>
      
      
    </section>
    
  )
}

export default Hero
