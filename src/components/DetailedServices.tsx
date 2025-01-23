import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Truck, Droplet, Container, Gauge, Activity, Settings, Cylinder } from "lucide-react";

const services = [
  {
    title: "Hauling Services",
    description: "KCL, Fresh and Salt Water transportation services",
    icon: Truck,
  },
  {
    title: "Fluid Transfers",
    description: "Professional fluid transfer operations",
    icon: Droplet,
  },
  {
    title: "Salt Water Disposal",
    description: "Environmental-friendly salt water disposal solutions",
    icon: Container,
  },
  {
    title: "Rig and Storage Tank Clean Outs",
    description: "Comprehensive cleaning services for rigs and storage tanks",
    icon: Cylinder,
  },
  {
    title: "Color Cut and Gauging Tanks",
    description: "Precise tank gauging and monitoring services",
    icon: Gauge,
  },
  {
    title: "Wellbore Fluid Levels",
    description: "Accurate wellbore fluid level measurements",
    icon: Activity,
  },
  {
    title: "Well Operations",
    description: "Complete well operation management services",
    icon: Settings,
  },
  {
    title: "Contract Pumping",
    description: "Reliable contract pumping solutions",
    icon: Activity,
  },
];

const DetailedServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">Our Services</h2>
            <p className="text-lg text-gray-600">
              2K Operating provides a comprehensive range of integrated services for the collection, 
              transportation, separation, and disposal of saltwater flowback and brine created during 
              the exploration and production of oil and gas.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-[#f3ce49]/10 rounded-full">
                    <Icon className="w-8 h-8 text-[#f3ce49]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;