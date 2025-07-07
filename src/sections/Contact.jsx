import React, { useState } from 'react'
import Button from '../assets/components/Button'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleContactSubmit = async (e) => {
    e.preventDefault() 

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey =  import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const templateParams = {
      from_name: "A Portfolio Client",
      from_email: email,
      to_name: "Daniel Estocado", 
      message: message,
      title: "MyPortfolio"
    }

  setLoading(true)
  try {
    const response = await emailjs.send(serviceID, templateID, templateParams, publicKey)
    console.log("Email sent successfully: ", response)
    setEmail("")
    setMessage("")
  } catch (error) {
    console.error("Error sending email: ", error)
  } finally {
    setLoading(false)
  }
}

  return (
    <div className=' bg-base-200 shadow-xl lg:rounded-2xl lg:border dark:border-neutral-500 border-gray-400'>
      
      <div className='  items-center '>
        <div className='padding-x py-12 lg:pt-24 pb-6'>
          <div className=' my-header divider-start mb-2'>
            <h1 className='title-gradient'>Contact Me</h1>
          </div>
          <p className='text-start lg:max-w-4xl'>I'd love to hear from you! Whether it's a question, a collaboration, or just a friendly hello. Feel free to get in touch.</p>
        </div>
        <h1 className='divider-start divider hidden lg:flex'/>
        <form onSubmit={handleContactSubmit} className='lg:mt-8 mt-4 padding-x pb-12'>
          <h2 className=' uppercase font-montserrat font-bold text-2xl title-gradient mb-3'>Your Email</h2>
          <label className="input validator rounded-md w-full  ">
            <input type="email" placeholder="johndoe@gmail.com" className="input text-lg px-6 py-4" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <h2 className=' uppercase font-montserrat font-bold text-2xl title-gradient mt-8 mb-3'>Your message</h2>
          <textarea className="textarea rounded-md w-full text-lg h-44 px-6 py-4" placeholder="Enter your message..." value={message} onChange={(e)=>{setMessage(e.target.value)}} required/>
          <div className='flex justify-end items-center pt-10'>
            <button type='submit' className='rounded-xs px-5 py-3 overflow-hidden group my-button gap-2 flex items-center justify-center disabled:opacity-60' disabled={loading}>
              
              {loading ? (
                <>
                  <span>Sending</span>
                  <span className="loading loading-spinner loading-xs"></span>
                </>
              ):(
                <>
                  <span>Send</span>
                  <i className='fa-solid fa-paper-plane'></i>
                </>
              )}
            </button>
            
          </div>
        </form> 
      </div>
    </div>
  )
}

export default Contact
