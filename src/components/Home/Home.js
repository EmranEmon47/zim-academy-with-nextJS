import React from 'react'
import NavBar from '../Shared/NavBar/NavBar'
import Hero from './Hero/Hero'
import Footer from '../Shared/Footer/Footer'
import EvenSection from './EventSection/EvenSection'
import Book from './Book/Book'
import Blog from './Blog/Blog'
import FAQSection from './FAQ/FaqSection'
import CTA from './CTA/CTA'


export default function Home() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <EvenSection/>
        <CTA/>
        <Book/>
        <Blog/>
       <FAQSection/>
        <Footer/>
    </div>
  )
}
