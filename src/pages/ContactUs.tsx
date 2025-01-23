import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Banner Section */}
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')`
          }}
        >
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-8"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Our team is here to help with your water disposal needs across East Texas
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;