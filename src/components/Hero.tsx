import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60 z-10" />
      
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Oil rig at sunset"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            "WE GUARANTEE TO BEAT OUR COMPETITORS RATES"
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            2K Operating has been serving the East Texas area for over 18 years, with bonded and insured drivers who have gone through extensive background checks and have a minimum of 5 years' experience. We offer competitive pricing, same day pick-up times in most cases, and low water disposal rates due to our company owned water injection wells. Our drivers are available 24/7 and can gauge and color cut tanks upon request at no extra charge.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="tel:9035053409"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-md text-lg md:text-xl transition-colors duration-300"
            >
              TRUCK DISPATCH (903) 505-3409
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12"
          >
            <img
              src="/lovable-uploads/e3b4d007-ed86-4ec2-ab8a-4b25e09b871b.png"
              alt="18 Years Anniversary Badge"
              className="h-24 mx-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;