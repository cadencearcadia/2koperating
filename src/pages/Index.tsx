import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-gray-600" />
      </motion.div>

      <div ref={ref} className="container mx-auto px-4 py-16 space-y-32">
        <Services />
        <Stats />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Index;