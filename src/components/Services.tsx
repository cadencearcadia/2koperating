import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Areas of Service",
    description: "Our company offers specialized products and services designed specifically for the oil and gas industry in Navarro, Freestone, Henderson, Anderson, and nearby counties, ensuring targeted solutions for businesses in the region.",
    icon: "🎯",
  },
  {
    title: "Reliable",
    description: "As a trusted service provider committed to excellence, we consistently deliver superior products and services. With our extensive expertise and dedicated teams, we are equipped to successfully manage projects of any scale or complexity.",
    icon: "⭐",
  },
  {
    title: "Environmental Friendly",
    description: "Safeguarding the environment and public health is paramount in our waste disposal practices. To uphold these standards, we meticulously adhere to the rigorous regulations set forth by the Texas Railroad Commission (TRRC) and the Environmental Protection Agency (EPA).",
    icon: "🌿",
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive solutions for the energy sector
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass-card p-6 rounded-lg"
          >
            <div className="text-2xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;