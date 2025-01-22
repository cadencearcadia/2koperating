import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="/" aria-label="Go to homepage">
              <img 
                src="/lovable-uploads/a34254fd-3889-4e70-bf49-33b03dc5c00d.png" 
                alt="2K Operating LLC Logo" 
                className="h-12 w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="text-sm text-gray-200">
              Your trusted partner in transportation and logistics solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-200 transition-colors" aria-label="Navigate to homepage">
                  Home
                </a>
              </li>
              <li>
                <a href="#cdl-application" className="hover:text-gray-200 transition-colors" aria-label="Navigate to CDL Driver Application">
                  CDL Driver Application
                </a>
              </li>
              <li>
                <a href="#new-customer" className="hover:text-gray-200 transition-colors" aria-label="Navigate to New Customer Form">
                  New Customer Form
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <a href="tel:+1234567890" className="hover:text-gray-200 transition-colors" aria-label="Call us at (123) 456-7890">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a href="mailto:info@2koperating.com" className="hover:text-gray-200 transition-colors" aria-label="Email us at info@2koperating.com">
                  info@2koperating.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Dallas, TX</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Visit our Facebook page">
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Visit our Instagram page">
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Visit our LinkedIn page">
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
            <Button 
              className="w-full bg-white text-primary hover:bg-gray-100"
              onClick={() => window.location.href = '#contact'}
              aria-label="Contact Us"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-[#0B0F1A] border-t border-white/10">
        <div className="py-3 text-center text-sm text-gray-300">
          <p className="font-light tracking-wide">
            © {currentYear} 2K Operating LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;