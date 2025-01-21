import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Get in touch with our team of experts
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2"
              required
            />
          </div>
          <Input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2"
            required
          />
          <Textarea
            placeholder="Message"
            className="w-full px-4 py-2 h-32"
            required
          />
          <Button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;