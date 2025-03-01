import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import DetailedServices from "@/components/DetailedServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-gray-600" />
      </motion.div>

      <div ref={ref} className="space-y-0">
        <Services />
        <About />
        <Newsletter />
        <DetailedServices />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
