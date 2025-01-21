import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-4">
              With decades of experience in the energy sector, we've established ourselves as a leading provider of innovative oil and gas solutions. Our commitment to sustainability and technological advancement drives us forward.
            </p>
            <p className="text-gray-600">
              We believe in responsible resource management and investing in the future of energy production. Our team of experts works tirelessly to deliver excellence in every project.
            </p>
          </div>
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              src="/about-image.jpg"
              alt="Oil and gas facility"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;