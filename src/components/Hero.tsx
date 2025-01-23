import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60 z-10" />
      
      <div className="absolute inset-0">
        <img
          src="/truckfrontpage.webp"
          alt="Oil tanker truck on road at sunset with oil field in background"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <div className="relative z-20 text-center px-4 py-8 md:py-0 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-10"
        >
          <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            WE GUARANTEE TO BEAT OUR COMPETITORS RATES
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 max-w-xl mx-auto"
          >
            <a
              href="tel:9035053409"
              className="w-full md:w-auto inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-md text-base md:text-xl transition-colors duration-300"
              aria-label="Call truck dispatch at (903) 505-3409"
            >
              TRUCK DISPATCH (903) 505-3409
            </a>
            <Button
              onClick={() => window.location.href = '/contact-us'}
              className="w-full md:w-auto bg-white/90 hover:bg-white text-gray-900 font-semibold px-8 md:px-8 py-3 md:py-4 text-base md:text-xl"
              aria-label="Contact Us"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;