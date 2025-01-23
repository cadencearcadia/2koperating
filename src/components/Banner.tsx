import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-primary text-primary-foreground py-2 px-4 mt-16 sm:mt-20"
    >
      <Alert variant="default" className="border-none bg-transparent max-w-7xl mx-auto">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription className="ml-2 text-sm sm:text-base">
          <span className="font-semibold">Important Notice:</span> We provide 24/7 water disposal services across East Texas. Contact us for immediate assistance.
        </AlertDescription>
      </Alert>
    </motion.div>
  );
};

export default Banner;