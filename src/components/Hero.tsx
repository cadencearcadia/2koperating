import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden mt-[-4rem] pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60 z-10" />
      
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Oil rig at sunset"
          className="w-full h-full object-cover"
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
            "WE GUARANTEE TO BEAT OUR COMPETITORS RATES"
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="tel:9035053409"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-md text-base md:text-xl transition-colors duration-300"
            >
              TRUCK DISPATCH (903) 505-3409
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;