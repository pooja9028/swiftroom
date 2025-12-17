import { useState } from 'react'
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import InstallSection from "./components/InstallSection";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
      <Header />
      <Hero />
      <StatsSection />
      <InstallSection />
      <WhyChooseUs />
      <AboutSection /> 
      <TestimonialsSection />   
       <ContactSection />
       <Footer />
    </>
);

}

export default App
