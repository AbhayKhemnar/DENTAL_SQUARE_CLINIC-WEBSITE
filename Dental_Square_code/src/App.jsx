import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import AboutClinic from './sections/AboutClinic'
import AboutDoctor from './sections/AboutDoctor'
import Services from './sections/Services'
import HydraFacial from './sections/HydraFacial'
import WhyChooseUs from './sections/WhyChooseUs'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import Location from './sections/Location'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-700">
      <Navbar />
      <main>
        <Hero />
        <AboutClinic />
        <AboutDoctor />
        <Services />
        <HydraFacial />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
