import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import RoomGallery from './components/RoomGallery';
import Dining from './components/Dining';
import Experiences from './components/Experiences';
import Travel from './components/Travel';
import Spa from './components/Spa';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <RoomGallery />
        <Dining />
        <Experiences />
        <Travel />
        <Spa />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
