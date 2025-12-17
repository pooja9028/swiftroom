import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import InstallSection from "./components/InstallSection";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ThankYou from "./components/ThankYou";

function HomePage() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}
