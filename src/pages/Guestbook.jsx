import React from 'react'
import NavigationBar from '../assets/components/NavigationBar'


const Guestbook = () => {
  return (
    <main className='relative mx-auto overflow-x-hidden'>
      <NavigationBar/>
      <div className="absolute inset-0 -z-10 bg-cross "/>

    </main>
  )
}

export default Guestbook
