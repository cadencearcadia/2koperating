import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="relative w-full h-[400px] mb-12 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-primary">About Our Company</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              2K Operating has been serving the East Texas area for over 18 years, with bonded and insured drivers who have gone through extensive background checks and have a minimum of 5 years' experience. We offer competitive pricing, same day pick-up times in most cases, and low water disposal rates due to our company owned water injection wells. Our drivers are available 24/7 and can gauge and color cut tanks upon request at no extra charge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="inline-block p-3 bg-[#f3ce49]/10 rounded-full mb-4">
                <Building2 className="w-6 h-6 text-[#f3ce49]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">18+ Years</h3>
              <p className="text-gray-600">Serving East Texas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="inline-block p-3 bg-[#f3ce49]/10 rounded-full mb-4">
                <Users className="w-6 h-6 text-[#f3ce49]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Drivers</h3>
              <p className="text-gray-600">5+ Years Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="inline-block p-3 bg-[#f3ce49]/10 rounded-full mb-4">
                <Clock className="w-6 h-6 text-[#f3ce49]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Always Available</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="inline-block p-3 bg-[#f3ce49]/10 rounded-full mb-4">
                <Shield className="w-6 h-6 text-[#f3ce49]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">Bonded & Protected</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
