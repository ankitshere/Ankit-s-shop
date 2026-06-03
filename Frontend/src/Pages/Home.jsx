import React from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import FeaturedProducts from '../Components/FeaturedProducts'
import Categories from '../Components/Categories'
import WhyChooseUs from '../Components/WhyChooseUs'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <Categories/>
      <WhyChooseUs/>  
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home