import React from 'react'

import EducationTimeline from '../assets/components/EducationTimeline'
import WorkTimeline from '../assets/components/WorkTimeline'
import DevStackMarquee from '../assets/components/DevStackMarquee'



const About = () => {
  return (
    <section>
      
      <div className=' py-18 lg:rounded-4xl bg-base-200 shadow-xl'>
         <h1 className='divider-start divider'/>

         {/* Dev Stack */}
         <section className='my-10  flex flex-col'>
            <h2 className='padding-x uppercase font-montserrat font-bold text-2xl text-primary'>Dev Stack</h2>
            <div className='md:p-16'>
               <DevStackMarquee/>
            </div>
         </section>

         <h1 className='divider-start divider'/>

         {/* Timelines */}
         <section className='lg:flex gap-10 padding-x'>
            <div className='flex-1 min-w-0'>
               <h2 className='uppercase font-montserrat font-bold text-2xl my-6 text-primary'>Education</h2>
               <EducationTimeline />
            </div>
            <div className="divider lg:divider-horizontal lg:hidden my-6"></div>
            <div className='flex-1 min-w-0'>
               <h2 className='uppercase font-montserrat font-bold text-2xl my-6 text-primary lg:text-end'>Work</h2>
               <WorkTimeline />
            </div>
         </section>
      </div>
    </section>
  )
}

export default About
