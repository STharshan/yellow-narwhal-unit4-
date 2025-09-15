import React from 'react'
import About from "../components/About"
import ContactSection from "../components/ContactSection"
import Hero from "../components/Hero"
import ImageCarousel from "../components/ImageCarousel"
import Services from "../components/Services"
import Stats from "../components/Stats"
import WhyChooseUs from "../components/WhyChooseUs"

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <ImageCarousel />
            <Services />
            <WhyChooseUs />
            <Stats />
            <ContactSection />
        </div>
    )
}

export default Home
