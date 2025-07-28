import About from "./components/About"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ImageCarousel from "./components/ImageCarousel"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Stats from "./components/Stats"
import WhyChooseUs from "./components/WhyChooseUs"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ImageCarousel />
      <Services />
      <WhyChooseUs />
      <Stats />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
