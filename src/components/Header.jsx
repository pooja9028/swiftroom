import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMenuOpen(false); // close menu after clicking
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full fixed top-0 z-50 shadow bg-white">
      {/* ─────────── TOP BAR ─────────── */}
      <div className="w-full bg-emerald-800 text-white text-sm">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between py-2 px-4">
          {/* Left Side */}
          <div className="hidden md:flex items-center gap-6">
  {/* Email */}
  <a
    href="mailto:hello@swiftrooms.ae"
    className="flex items-center gap-2 hover:text-emerald-300 transition"
  >
    📧 hello@swiftrooms.ae
  </a>

  <span className="border-l h-4"></span>

  {/* Address (Google Maps) */}
  <a
    href="https://maps.app.goo.gl/unkAy9YnvtgkQN1g8"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-emerald-300 transition"
  >
    📍 J One Complex Etjar Complex Warehouse 11 - 12 Jebel Ali Industrial Area 1 - Dubai - United Arab Emirates
  </a>
</div>


          {/* Mobile Top Info */}
          <div className="md:hidden text-xs">📧 Hello@swiftrooms.ae</div>

          {/* Right Side Text */}
          <p className="italic text-[12px] md:text-[14px] text-right">
            Free Site Visit & 10-Year Warranty – Limited Slots This Month
          </p>
        </div>
      </div>

      {/* ─────────── MAIN NAVBAR ─────────── */}
      <div className="w-full bg-white">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between py-4 px-4">

          {/* Logo */}
          <Link to="/">
  <img
    src={logo}
    alt="Swiftrooms Logo"
    className="h-10 object-contain cursor-pointer"
  />
</Link>


          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-[16px] font-medium text-gray-800">
            <a onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-emerald-700">Home</a>
            <a onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-emerald-700">About us</a>
            <a onClick={() => scrollToSection("why-choose-us")} className="cursor-pointer hover:text-emerald-700">Why Choose Us</a>
            <a onClick={() => scrollToSection("services")} className="cursor-pointer hover:text-emerald-700">Services</a>
            <a onClick={() => scrollToSection("testimonials")} className="cursor-pointer hover:text-emerald-700">Testimonials</a>
          </nav>

          {/* Desktop Quote Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block border border-emerald-700 text-emerald-700 px-6 py-2 rounded-lg hover:bg-emerald-700 hover:text-white transition"
          >
            Get a Quote
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* ─────────── MOBILE SLIDE-IN MENU ─────────── */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform 
        ${menuOpen ? "translate-x-0" : "translate-x-full"} 
        transition-transform duration-300`}
      >
        {/* Close Button */}
        <button
          className="text-3xl p-4"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        {/* Menu Links */}
        <nav className="flex flex-col gap-6 text-lg px-6 font-medium text-gray-900 mt-4">
          <a onClick={() => scrollToSection("home")} className="cursor-pointer">Home</a>
          <a onClick={() => scrollToSection("about")} className="cursor-pointer">About us</a>
          <a onClick={() => scrollToSection("why-choose-us")} className="cursor-pointer">Why Choose Us</a>
          <a onClick={() => scrollToSection("services")} className="cursor-pointer">Services</a>
          <a onClick={() => scrollToSection("testimonials")} className="cursor-pointer">Testimonials</a>

          <button
            onClick={() => scrollToSection("contact")}
            className="mt-6 border border-emerald-700 text-emerald-700 px-6 py-2 rounded-lg 
            hover:bg-emerald-700 hover:text-white transition"
          >
            Get a Quote
          </button>
        </nav>
      </div>

      {/* Dark backdrop when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
