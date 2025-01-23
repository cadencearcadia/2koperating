import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 py-8"
        >
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get in touch with our team. We're here to help and answer any questions you might have.
          </p>
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;