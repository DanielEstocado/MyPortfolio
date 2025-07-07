import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, link, onClick, additionalClass="" }) => {

  const content = (
    <>
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <div className='flex items-center gap-3'>
        <span className="relative">{text}</span>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </>
  )

  if (link) {
    return (
      <Link to={link} className={`rounded-xs px-5 py-3 overflow-hidden group my-button ${additionalClass}`}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={`rounded-xs px-5 py-3 overflow-hidden group my-button ${additionalClass}`}>
      {content}
    </button>
  )
}

export default Button
