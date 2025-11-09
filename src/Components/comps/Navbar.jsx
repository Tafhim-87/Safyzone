"use client";
import Logo from "@/assets/svgs/Logo";
import React, { useState } from "react";
import Link from "next/link";
import GmailIcn from "@/assets/svgs/Gmail-Icn";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGmailClick = () => {
    // Direct Gmail compose link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=tafhimhasan87@gmail.com&su=Project%20Inquiry&body=Hello%20Tafhim,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards,`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    // Fallback for regular mailto
    window.location.href = "mailto:tafhimhasan87@gmail.com?subject=Project%20Inquiry&body=Hello%20Tafhim,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards,";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-16 md:h-20 lg:h-[112px] flex items-center justify-center font-Bricolage bg-white sticky top-0 z-50 shadow-sm">
      <div className="container px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-20">
          <div className="flex items-center gap-[34px]">
            <Link href="/about" className="text-lg font-medium hover:text-[#7755FF] transition-colors duration-300">
              About Us
            </Link>
            <Link href="/services" className="text-lg font-medium hover:text-[#7755FF] transition-colors duration-300">
              Our Services
            </Link>
            <Link href="/project" className="text-lg font-medium hover:text-[#7755FF] transition-colors duration-300">
              Our Project
            </Link>
            <Link href="/caseStudy" className="text-lg font-medium hover:text-[#7755FF] transition-colors duration-300">
              Team Case Study
            </Link>
          </div>
        </div>

        {/* Desktop Gmail Button */}
        <button
          onClick={handleGmailClick}
          onAuxClick={handleEmailClick} // Right click fallback
          className="hidden lg:flex items-center justify-center gap-3 bg-[#F5F5F5] rounded-full py-3 px-6 active:scale-95 hover:bg-[#E5E5E5] transition-all duration-300 hover:shadow-md group"
          title="Open Gmail to send email"
        >
          <GmailIcn className="group-hover:scale-110 transition-transform duration-300" /> 
          <h4 className="text-center text-lg font-medium">tafhimhasan87@gmail.com</h4>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Mobile Gmail Button */}
        <button
          onClick={handleGmailClick}
          className="lg:hidden flex items-center justify-center gap-2 bg-[#F5F5F5] rounded-full py-2 px-4 active:scale-95 hover:bg-[#E5E5E5] transition-all duration-300"
          title="Open Gmail"
        >
          <GmailIcn className="w-4 h-4" /> 
          <h4 className="text-center text-sm font-medium">Gmail</h4>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed top-16 left-0 w-full h-0 bg-white overflow-hidden transition-all duration-300 ease-in-out z-40 ${isMenuOpen ? 'h-screen' : ''}`}>
        <div className="container px-4 sm:px-6 py-8">
          <div className="flex flex-col items-center space-y-8">
            <Link 
              href="/about" 
              className="text-2xl font-medium hover:text-[#7755FF] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="text-2xl font-medium hover:text-[#7755FF] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link 
              href="/project" 
              className="text-2xl font-medium hover:text-[#7755FF] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Project
            </Link>
            <Link 
              href="/caseStudy" 
              className="text-2xl font-medium hover:text-[#7755FF] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Team Case Study
            </Link>
            
            {/* Mobile Gmail in Menu */}
            <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
              <button
                onClick={() => {
                  handleGmailClick();
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-center gap-3 bg-[#F5F5F5] rounded-full py-4 px-8 active:scale-95 hover:bg-[#E5E5E5] transition-all duration-300 w-full"
              >
                <GmailIcn /> 
                <h4 className="text-center text-lg font-medium">Open Gmail</h4>
              </button>
              
              <button
                onClick={() => {
                  handleEmailClick();
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-center gap-3 bg-[#7755FF] text-white rounded-full py-4 px-8 active:scale-95 hover:bg-[#6a4ae0] transition-all duration-300 w-full"
              >
                <h4 className="text-center text-lg font-medium">Other Email Client</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;