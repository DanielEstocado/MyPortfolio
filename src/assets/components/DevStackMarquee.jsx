import React from 'react'
import { MarqueeFE, MarqueePL, MarqueeTP } from '../../constants/marqueeData'

const DevStackMarquee = () => {
  return (
    <section className='flex flex-col gap-5'>
      <div className='border  w-full'>
         <ul className='flex gap-3 min-w-max'>
            {MarqueePL.map((stack) => (
               <li key={stack.label} className='flex items-center gap-2 bg-base-100 py-3 px-5 rounded-md w-48 flex-shrink-0'>
                  <img src={stack.imgURL} alt={stack.label}  className='h-8 w-8'/>
                  {stack.label}
               </li>
            ))}
         </ul>
      </div>
      <div>
         <ul className='flex gap-3'>
            {MarqueeFE.map((stack) => (
               <li key={stack.label} className='flex items-center gap-2 bg-base-100 py-3 px-5 rounded-md '>
                  <img src={stack.imgURL} alt={stack.label}  className='h-8 w-8'/>
                  {stack.label}
               </li>
            ))}
         </ul>
      </div>
      <div>
         <ul className='flex gap-3'>
            {MarqueeTP.map((stack) => (
               <li key={stack.label} className='flex items-center gap-2 bg-base-100 py-3 px-5 rounded-md '>
                  <img src={stack.imgURL} alt={stack.label}  className='h-8 w-8'/>
                  {stack.label}
               </li>
            ))}
         </ul>
      </div>
    </section>
  )
}

export default DevStackMarquee
