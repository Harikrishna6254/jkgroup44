import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <Logo variant="light" />
            </Link>
            <p className="text-gray-300 mb-6">
              Your Growth Partner in Digital & Career Success. Providing trusted digital and government-related services.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/jksolutions0/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={26} />
              </a>
              <a href="https://www.linkedin.com/company/113344908/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={26} />
              </a>
              <a href="mailto:consal@jksolutionsgroup.com" className="hover:text-primary transition-colors" aria-label="Email">
                <Mail size={26} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog & Tips</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Our Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Resume Building</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Government Services</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Financial Guidance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="text-primary mt-1 shrink-0" size={18} />
                <span className="text-gray-300">consal@jksolutionsgroup.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-primary mt-1 shrink-0" size={18} />
                <span className="text-gray-300">+91 93462 71654</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span className="text-gray-300">Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} JK Solutions. All rights reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
