import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewCustomerForm from "@/components/customer/NewCustomerForm";
import CustomerHeader from "@/components/customer/CustomerHeader";

export default function NewCustomer() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <CustomerHeader />
          <div className="bg-white shadow-sm rounded-lg p-6">
            <NewCustomerForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}