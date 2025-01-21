import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/20f857c4-e96b-4057-a851-3666e100409e.png" 
              alt="2K Operating LLC Logo" 
              className="h-12 w-auto"
              loading="lazy"
              decoding="async"
            />
            <p className="text-sm text-gray-200">
              Your trusted partner in transportation and logistics solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-200 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#cdl-application" className="hover:text-gray-200 transition-colors">
                  CDL Driver Application
                </a>
              </li>
              <li>
                <a href="#new-customer" className="hover:text-gray-200 transition-colors">
                  New Customer Form
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="hover:text-gray-200 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@2koperating.com" className="hover:text-gray-200 transition-colors">
                  info@2koperating.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Dallas, TX</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <Button 
              className="w-full bg-white text-primary hover:bg-gray-100"
              onClick={() => window.location.href = '#contact'}
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