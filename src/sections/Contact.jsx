import React, { useState } from 'react'
import Button from '../assets/components/Button'

const Contact = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleContactSubmit(e) {
    e.preventDefault()
    console.log("pressed")
  }
  return (
    <div className=' bg-base-200 shadow-xl lg:rounded-2xl'>
      
      <div className='  items-center '>
        <div className='px-16 pt-24 pb-6'>
          <div className=' my-header divider-start mb-2'>
            <h1 className='title-gradient'>Contact Me</h1>
          </div>
          <p className='text-start lg:max-w-4xl'>I'd love to hear from you! Whether it's a question, a collaboration, or just a friendly hello. Feel free to get in touch.</p>
        </div>
        <h1 className='divider-start divider hidden lg:flex'/>
        <form onSubmit={handleContactSubmit} className='mt-8 px-16 pb-12'>
          <h2 className=' uppercase font-montserrat font-bold text-2xl title-gradient mb-3'>Your Email</h2>
          <label className="input validator rounded-md w-full  ">
            <input type="email" placeholder="johndoe@gmail.com" className="input text-lg px-6 py-4" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <h2 className=' uppercase font-montserrat font-bold text-2xl title-gradient mt-8 mb-3'>Your message</h2>
          <textarea className="textarea rounded-md w-full text-lg h-44 px-6 py-4" placeholder="Enter your message..." value={message} onChange={(e)=>{setMessage(e.target.value)}} required/>
          <div className='flex justify-end items-center pt-10'>
            <button type='submit' className='rounded-xs px-5 py-3 overflow-hidden group my-button'>Send</button>
          </div>
        </form> 
      </div>
    </div>
  )
}

export default Contact
