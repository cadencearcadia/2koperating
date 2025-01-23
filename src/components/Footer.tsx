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
                <a href="tel:+9035053409" className="hover:text-gray-200 transition-colors">
                (903) 505-3409
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
                <span>507 Interstate Highway 45, Richland, TX 76681</span>
              </li>
            </ul>
          </div>

          {/* Accomplishments Column */}
          <div className="flex items-center justify-center">
            <img
              src="/19years-150px.webp"
              alt="18 Years of Excellence"
              className="w-full max-w-[150px] h-auto object-contain rounded-lg"
              loading="lazy"
            />
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