import Navigation from "@/components/Navigation";
import ApplicationHeader from "@/components/cdl/ApplicationHeader";
import JobDescription from "@/components/cdl/JobDescription";
import ApplicationForm from "@/components/cdl/ApplicationForm";
import Footer from "@/components/Footer";

export default function CDLApplication() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <ApplicationHeader />
          <JobDescription />
          <ApplicationForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}