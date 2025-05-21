import React from 'react'

const Button = ({ text }) => {
  return (
    <a href="#_" class=" rounded-xs px-5 py-2.5 overflow-hidden group bg-primary relative hover:bg-gradient-to-r hover:from-primary dark:hover:to-forest-darker hover:to-nord-darker text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300">
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <div className='flex items-center gap-3'>
      <span className="relative">{text}</span>
      <i className="fa-solid fa-arrow-right"></i>
    </div>
</a>
  )
}

export default Button
