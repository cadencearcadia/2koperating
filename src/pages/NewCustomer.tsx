import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewCustomerForm from "@/components/customer/NewCustomerForm";

export default function NewCustomer() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">New Customer Form</h1>
          <p className="mb-8 text-gray-600">
            Please use the form below for new customers interested in our services. The information below will be encrypted and secure upon submission.
          </p>
          
          <div className="bg-white shadow-sm rounded-lg p-6">
            <NewCustomerForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}