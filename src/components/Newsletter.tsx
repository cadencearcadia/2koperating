import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
  };

  return (
    <section ref={ref} className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Industry Insights
          </h2>
          <p className="mb-8">
            Subscribe to our newsletter for the latest news and updates in the
            energy sector.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-sm bg-white/10 text-white placeholder:text-white/70 border-white/20"
              required
            />
            <Button className="bg-white text-primary hover:bg-white/90">
              Subscribe Now
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;