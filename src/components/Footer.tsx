import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links Column */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-200 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/cdl-application" className="hover:text-gray-200 transition-colors">
                  CDL Driver Application
                </a>
              </li>
              <li>
                <a href="/new-customer" className="hover:text-gray-200 transition-colors">
                  New Customer Form
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Contact Us</h2>
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

          {/* Accomplishments Column */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Our Achievements</h2>
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Company Achievements"
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  Trusted by Industry Leaders
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm">
            © {currentYear} 2K Operating LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;