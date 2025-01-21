import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Energy Solutions Inc",
    content: "The most reliable partner we've worked with in the energy sector.",
    image: "/placeholder.svg"
  },
  {
    name: "Sarah Johnson",
    role: "Operations Director, Global Gas",
    content: "Outstanding service and technical expertise in oil and gas solutions.",
    image: "/placeholder.svg"
  },
  {
    name: "Michael Brown",
    role: "Project Manager, PetroTech",
    content: "Their innovative approach has transformed our operations.",
    image: "/placeholder.svg"
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">What Our Clients Say</h2>
          <p className="text-gray-600">
            Trusted by leading companies in the energy sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;