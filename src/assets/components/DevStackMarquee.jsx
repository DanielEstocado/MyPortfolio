import React from 'react'
import { MarqueeFE, MarqueePL, MarqueeTP } from '../../constants/marqueeData'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const DevStackMarquee = () => {
  return (
    <section className='flex flex-col gap-5'>
      <section className='container mx-auto'>
         <div className='relative flex overflow-hidden w-full'>
            <motion.div
               initial={{ x: 0 }}
               animate={{ x: `-${100 / 2}%` }}
               transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
               className='flex gap-3 min-w-max'
            >
               {/* Duplicating the array for seamless looping */}
               {[...MarqueePL, ...MarqueePL].map((stack, index) => (
               <li 
                  key={`${stack.label}-${index}`} 
                  className='flex items-center gap-2 bg-base-100 py-3 px-5 rounded-md w-48 flex-shrink-0'
               >
                  <img src={stack.imgURL} alt={stack.label} className='h-8 w-8 ' />
                  {stack.label}
               </li>
               ))}
            </motion.div>
         </div>
      </section>
      <section className='container mx-auto'>
         <div className='relative flex overflow-hidden w-full'>
            <motion.div
               initial={{ x: `-${100 / 2}%` }}
               animate={{ x: 0 }}
               transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
               className='flex gap-3 min-w-max'
            >
               {/* Duplicating the array for seamless looping */}
               {[...MarqueeFE, ...MarqueeFE].map((stack, index) => (
               <li 
                  key={`${stack.label}-${index}`} 
                  className='flex items-center gap-2 bg-base-100 py-3 px-5 rounded-md w-48 flex-shrink-0'
               >
                  <img src={stack.imgURL} alt={stack.label} className='h-8 w-8' />
                  {stack.label}
               </li>
               ))}
            </motion.div>
         </div>
      </section>
      <section className='container mx-auto'>
         <div className='relative flex overflow-hidden w-full'>
            <motion.div
               initial={{ x: 0 }}
               animate={{ x: `-${100 / 2}%` }}
               transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
               className='flex gap-3 min-w-max'
            >
               {/* Duplicating the array for seamless looping */}
               {[...MarqueeTP, ...MarqueeTP].map((stack, index) => (
               <li 
                  key={`${stack.label}-${index}`} 
                  className='flex items-center gap-2 bg-base-100 py-3 px-5 rounded-md w-48 flex-shrink-0'
               >
                  <img src={stack.imgURL} alt={stack.label} className='h-8 w-8' />
                  {stack.label}
               </li>
               ))}
            </motion.div>
         </div>
      </section>
    </section>
  )
}

export default DevStackMarquee
