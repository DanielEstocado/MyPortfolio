import React from 'react'
import { devStack } from '../../constants'

const DevStackMarquee = () => {
  return (
    <div>
      
      <ul className='flex flex-wrap gap-3'>
         {devStack.map((stack) => (
            <li key={stack.label} className='flex items-center gap-2 bg-base-100 py-3 px-5 rounded-md '>
               <img src={stack.imgURL} alt={stack.label}  className='h-8 w-8'/>
               {stack.label}
            </li>
         ))}
      </ul>
    </div>
  )
}

export default DevStackMarquee
