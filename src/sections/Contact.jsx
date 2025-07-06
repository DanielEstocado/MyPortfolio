import React from 'react'
import Button from '../assets/components/Button'

const Contact = () => {
  function handleContactSubmit(e) {
    e.preventDefault()
    console.log("pressed")
  }
  return (
    <div className=' bg-base-200 shadow-xl lg:rounded-2xl'>
      
      <div className='  items-center '>
        <div className='px-16 pt-24 pb-8'>
          <div className=' divider-header divider-start pb-6'>
            <h1 className='title-gradient mb-6'>Contact Me</h1>
          </div>
          <p className='text-start lg:max-w-4xl'>I'd love to hear from you! Whether it's a question, a collaboration, or just a friendly hello. Feel free to get in touch.</p>
        </div>
        <h1 className='divider-start divider hidden lg:flex'/>
        <form action="" className='mt-8 px-16 pb-12'>
          <h2 className=' uppercase font-montserrat font-bold text-2xl title-gradient mb-3'>Your Email</h2>
          <input type="text" placeholder="johndoe@gmail.com" className="input rounded-md w-full mb-8 text-lg px-6 py-4" />
          <h2 className=' uppercase font-montserrat font-bold text-2xl title-gradient mb-3'>Your message</h2>
          <textarea className="textarea rounded-md w-full text-lg h-44 px-6 py-4" placeholder="Enter your message..."></textarea>
          <div className='flex justify-end items-center pt-10'>
            <Button text="Send" onClick={handleContactSubmit}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
