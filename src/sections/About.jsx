import React from 'react'

import EducationTimeline from '../assets/components/EducationTimeline'
import WorkTimeline from '../assets/components/WorkTimeline'
import DevStackMarquee from '../assets/components/DevStackMarquee'



const About = () => {
  return (
    <section>
      
      <div className='padding  lg:rounded-t-4xl bg-base-200 shadow-xl'>
         <h1 className='divider-start divider'>ABOUT ME</h1>

         {/* Introduction */}
         <section className='my-10'>
            <h1 >Who am I?</h1>
            <p className=''>I am a self-motivated and detail-oriented individual, known for my approachable nature and strong problem-solving skills. I have experience in various web development tools, frameworks, and programming languages, with expertise in both front-end and back-end technologies. I bring strong communication, teamwork, and adaptability in dynamic work environments. Passionate about continuous learning and innovation.</p>
         </section>
        
         {/* Dev Stack */}
         <section className='my-10'>
            <h1 className='divider-start divider'>Dev Stack</h1>
            <DevStackMarquee/>
         </section>

         {/* Timelines */}
         <section className='lg:flex gap-10'>
            <div className='flex-1 min-w-0'>
               <EducationTimeline />
            </div>
            <div className='flex-1 min-w-0'>
               <WorkTimeline />
            </div>
         </section>
      </div>
    </section>
  )
}

export default About
