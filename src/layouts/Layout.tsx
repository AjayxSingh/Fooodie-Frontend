import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero';
import Footer from '../components/Footer';

type props = {
    children:React.ReactNode;
    showHero?:boolean;
}
function Layout({ children , showHero = false} : props) {
  return (
    <div className='flex min-h-screen flex-col '>
        <Header/>
        {showHero && <Hero/>}
        <div className='container flex flex-1 py-10 mx-auto '>{children}</div>
        <Footer/>
    </div>
  )
}

export default Layout