"use client";
import React from "react";
import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Replace with your actual WhatsApp number (with country code, without +)
  const whatsappNumber = "+8801779527744"; // Example: 8801712345678 for Bangladesh
  const whatsappMessage = "Hello! I'm interested in your services and would like to discuss a project.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Our Projects", href: "/projects" },
    { name: "Team Case Study", href: "/case-studies" },
  ];

  const services = [
    { name: "UI/UX Design", href: "/services#ui-ux" },
    { name: "Web Development", href: "/services#web-dev" },
    { name: "2D Animation", href: "/services#animation" },
    { name: "Web Design", href: "/services#web-design" },
    { name: "Consultation", href: "/services#consultation" }
  ];

  const socialLinks = [
    { 
      name: "Facebook", 
      href: "#", 
      icon: <Facebook size={20} />,
      color: "hover:text-[#1877F2]"
    },
    { 
      name: "Twitter", 
      href: "#", 
      icon: <Twitter size={20} />,
      color: "hover:text-[#1DA1F2]"
    },
    { 
      name: "Instagram", 
      href: "#", 
      icon: <Instagram size={20} />,
      color: "hover:text-[#E4405F]"
    },
    { 
      name: "LinkedIn", 
      href: "#", 
      icon: <Linkedin size={20} />,
      color: "hover:text-[#0A66C2]"
    }
  ];

  return (
    <footer className="bg-[#16141D] text-white font-figtree">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold font-Bricolage mb-4 sm:mb-6">
              Your<span className="text-[#1DBF73]">.</span>Studio
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              We create stunning digital experiences through expert UI/UX design, 
              web development, and innovative solutions that drive your business forward.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-base sm:text-lg font-bold font-Bricolage mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[#1DBF73] transition-colors duration-300 flex items-center group text-sm sm:text-base"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="text-base sm:text-lg font-bold font-Bricolage mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-[#7755FF] transition-colors duration-300 flex items-center group text-sm sm:text-base"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-bold font-Bricolage mb-4 sm:mb-6">Get In Touch</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-[#1DBF73] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email us at</p>
                  <a 
                    href="mailto:tafhimhasan87@gmail.com" 
                    className="text-white hover:text-[#1DBF73] transition-colors text-sm sm:text-base"
                  >
                    tafhimhasan87@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-[#1DBF73] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Call us</p>
                  <a 
                    href="tel:+8801779527744" 
                    className="text-white hover:text-[#1DBF73] transition-colors text-sm sm:text-base"
                  >
                    +880 1234 567890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#1DBF73] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Visit us</p>
                  <p className="text-white text-sm sm:text-base">Gendaria, Dhaka</p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-6 sm:mt-8">
              <h5 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3">STAY UPDATED</h5>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 bg-gray-800 text-white rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#1DBF73] text-sm"
                />
                <button className="bg-[#1DBF73] hover:bg-[#39C683] px-4 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none font-semibold transition-colors text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} YourStudio. All rights reserved.
            </div>
            
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating CTA */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <div className="flex items-center space-x-2">
            <MessageCircle size={20} className="group-hover:animate-pulse" />
            <span className="font-semibold text-xs sm:text-sm hidden sm:block">Let's Talk</span>
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;