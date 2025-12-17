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
import { Routes, Route } from "react-router-dom";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Routes>

      {/* Home Page */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <Hero />
            <StatsSection />
            <InstallSection />
            <WhyChooseUs />
            <AboutSection />
            <TestimonialSection />
            <ContactSection />
            <Footer />
          </>
        }
      />

      {/* Thank You Page */}
      <Route path="/thank-you" element={<ThankYou />} />

    </Routes>
  );
}

export default App;
