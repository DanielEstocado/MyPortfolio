import React from 'react'
import NavigationBar from '../assets/components/NavigationBar'

const AllContacts = () => {
  return (
    <main className='relative mx-auto overflow-x-hidden'>
      <div className="absolute inset-0 -z-10 bg-cross "/>
      <NavigationBar/>
      <section className='h-screen w-full'>
        <div className='flex-col flex justify-center items-center h-full'>
          <span className='my-header title-gradient'>CONTACT PAGE</span>
          <span className='text-neutral-500'>Oops! This page is currently under construction.</span>
          <span className='text-neutral-500'>The developer has some exciting ideas in the works.</span>
          <span className='text-neutral-500'>Stay tuned!</span>
        </div>
      </section>
    </main>
  )
}

export default AllContacts
