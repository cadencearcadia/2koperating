import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/30 z-10" />
      
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Oil rig at sunset"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powering Tomorrow's Energy Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Leading the way in sustainable energy production and innovative oil & gas solutions
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;