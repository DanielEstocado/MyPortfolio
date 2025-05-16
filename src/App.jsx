import React from 'react'
import Hero from './sections/Hero'
import NavigationBar from './assets/components/NavigationBar'
import Footer from './sections/Footer'
import About from './sections/About'

const App = () => {
  return (
    <main className='relative mx-auto overflow-x-hidden'>
      <NavigationBar/>
      <div className="absolute inset-0 -z-10 bg-cross"></div>
      <section className=' '  id="home">
        <Hero/>
      </section>
      <section className='max-w-6xl mx-auto ' id='about' >
        <About/>
      </section>
      {/* <section className='padding border max-w-5xl mx-auto border-slate bg-black'> */}
        {/* Projects */}
      {/* </section> */}
      {/* <section className='padding-x sm:py-32 py-16 border max-w-5xl mx-auto border-slate bg-black'> */}
        {/* Contacts */}
      {/* </section> */}
      <section className=' max-w-6xl mx-auto '>
        <Footer/>
      </section>
    </main>
  )
}

export default App