import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Star, Leaf } from "lucide-react";

const services = [
  {
    title: "Areas of Service",
    description: "Our company offers specialized products and services designed specifically for the oil and gas industry in Navarro, Freestone, Henderson, Anderson, and nearby counties, ensuring targeted solutions for businesses in the region.",
    icon: Target,
  },
  {
    title: "Reliable",
    description: "As a trusted service provider committed to excellence, we consistently deliver superior products and services. With our extensive expertise and dedicated teams, we are equipped to successfully manage projects of any scale or complexity.",
    icon: Star,
  },
  {
    title: "Environmental Friendly",
    description: "Safeguarding the environment and public health is paramount in our waste disposal practices. To uphold these standards, we meticulously adhere to the rigorous regulations set forth by the Texas Railroad Commission (TRRC) and the Environmental Protection Agency (EPA).",
    icon: Leaf,
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-[#f3ce49]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;