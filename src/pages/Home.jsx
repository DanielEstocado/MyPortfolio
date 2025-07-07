import React from 'react'
import Hero from '../sections/Hero'
import NavigationBar from '../components/NavigationBar'
import Footer from '../sections/Footer'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import MyInfo from '../sections/MyInfo'

const Home = () => {
   return (
      <main className='relative mx-auto overflow-x-hidden'>
         <NavigationBar/>
         <div className="absolute inset-0 -z-10 bg-cross"></div>
         <section  id="home">
            <Hero/>
         </section>
         <section className='max-w-5xl mx-auto' id='about'>
            <About/>
         </section>
         <section className='max-w-5xl mx-auto ' >
            <MyInfo/>
         </section>
         <section className='max-w-5xl mx-auto lg:my-15' id='projects'>
            <Projects/>
         </section>
         <section className='max-w-5xl mx-auto lg:my-15' id='contact'>
            <Contact/>
         </section>
         {/* <section className=' max-w-5xl mx-auto '>
            <Footer/>
         </section> */}
      </main>
  )
}

export default Home
