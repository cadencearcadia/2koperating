import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReCaptchaComponent from "../common/ReCaptcha";
import { checkRateLimit } from "@/utils/rateLimiting";
import { useState } from "react";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  billingAddress: z.string().min(5, "Please enter a valid billing address"),
  email: z.string().email("Please enter a valid email address"),
  deliveryAddress: z.string().min(5, "Please enter a valid delivery address"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  purchasingContact: z.string().min(2, "Contact name must be at least 2 characters"),
  purchasingPhone: z.string().min(10, "Please enter a valid phone number"),
  invoiceMethod: z.string().min(1, "Please select an invoice method"),
  nonTaxable: z.string().min(1, "Please select yes or no"),
  resaleCertificate: z.string().optional(),
  businessRef1: z.string().min(2, "Business reference is required"),
  businessRef1Phone: z.string().min(10, "Please enter a valid phone number"),
  businessRef2: z.string().min(2, "Business reference is required"),
  businessRef2Phone: z.string().min(10, "Please enter a valid phone number"),
  businessRef3: z.string().optional(),
  businessRef3Phone: z.string().optional(),
  bankName: z.string().min(2, "Bank name is required"),
  bankAddress: z.string().min(5, "Bank address is required"),
  bankPhone: z.string().min(10, "Please enter a valid phone number"),
  bankOfficer: z.string().min(2, "Bank officer name is required"),
});

const NewCustomerForm = () => {
  const { toast } = useToast();
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!captchaToken) {
      toast({
        title: "Error",
        description: "Please complete the CAPTCHA verification",
        variant: "destructive",
      });
      return;
    }

    if (!checkRateLimit('new-customer')) {
      toast({
        title: "Rate Limit Exceeded",
        description: "Please wait before submitting another application",
        variant: "destructive",
      });
      return;
    }

    console.log(values);
    toast({
      title: "Form Submitted",
      description: "We'll review your information and contact you soon.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of Business <span className="text-destructive">*</span></FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="billingAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Billing Address <span className="text-destructive">*</span></FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email <span className="text-destructive">*</span></FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deliveryAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Address <span className="text-destructive">*</span></FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="purchasingContact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Purchasing Contact <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="purchasingPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Purchasing Phone # <span className="text-destructive">*</span></FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="invoiceMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Method of Receiving Invoices <span className="text-destructive">*</span></FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="mail">Mail</SelectItem>
                  <SelectItem value="fax">Fax</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nonTaxable"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Non-Taxable? <span className="text-destructive">*</span></FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select yes or no" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="resaleCertificate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resale Certificate (Only if applicable)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Business References</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="businessRef1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Reference #1 <span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessRef1Phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number <span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="businessRef2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Reference #2 <span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessRef2Phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number <span className="text-destructive">*</span></FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="businessRef3"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Reference #3</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessRef3Phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Bank Information</h3>
          
          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Name <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bankAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Address <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bankPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Phone Number <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bankOfficer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Officer <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <ReCaptchaComponent onChange={setCaptchaToken} />

        <Button type="submit" className="w-full">Submit Application</Button>
      </form>
    </Form>
  );
};

export default NewCustomerForm;
