import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Navigation from "@/components/Navigation"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  address: z.string().min(5, "Please enter a valid address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  licenseNumber: z.string().min(1, "Texas Driver's License number is required"),
  dateOfBirth: z.date({
    required_error: "Please select your date of birth",
  }),
  yearsExperience: z.string().min(1, "Years of experience is required"),
  tankerEndorsement: z.enum(["yes", "no"], {
    required_error: "Please select if you have tanker endorsement",
  }),
})

export default function CDLApplication() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tankerEndorsement: "no",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Application Submitted",
      description: "We'll review your application and contact you soon.",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Side by Side Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">CDL Driver Application</h1>
              <h2 className="text-2xl font-semibold text-muted-foreground">CDL Roll off Driver – Full time, Year-round employment</h2>
              <div className="space-y-4">
                <p className="text-lg">2k Operating LLC – Richland, TX</p>
                <p className="text-xl font-semibold">$40,000 – $70,000 a year</p>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/lovable-uploads/oil-gas-image.jpg" 
                alt="Oil & Gas Operations" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="prose max-w-none">
            <p>The Roll Off Driver will be responsible for providing a high level of service to customers both safely and efficiently. These service will include the delivery, removal and emptying of various size containers. This position will be required to enter and exit the truck multiple times throughout the day to secure loads, hook and unhook hoses, and check equipment.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-4">Requirements:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Good Driving Record</li>
              <li>Tanker Endorsement</li>
              <li>Ability to drive a standard transmission</li>
              <li>Must be able to meet criteria for safety sensitive functions according to DOT and Company standards</li>
              <li>Must be able to demonstrate the ability to safely drive the truck and operate equipment</li>
              <li>Ability to read and interpret a key map or GPS to locate service addresses</li>
              <li>Ability to communicate clearly and effectively</li>
            </ul>

            <div className="bg-muted p-4 rounded-lg mt-6">
              <h3 className="text-xl font-semibold">Service Areas</h3>
              <p>We need drivers in these counties: Navarro, Freestone, Henderson, Anderson, and neighboring counties</p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Apply Here</h2>
            <p className="mb-6">
              Email your resumes to{" "}
              <a href="mailto:info@2koperating.com" className="text-primary hover:underline">
                info@2koperating.com
              </a>
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name <span className="text-destructive">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address <span className="text-destructive">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="1234 Main St, City, TX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone <span className="text-destructive">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 555-5555" {...field} />
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
                        <Input placeholder="john@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="licenseNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Texas Driver's License # <span className="text-destructive">*</span></FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of Birth <span className="text-destructive">*</span></FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "MM/dd/yyyy")
                              ) : (
                                <span>MM/DD/YYYY</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="yearsExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Experience <span className="text-destructive">*</span></FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tankerEndorsement"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Tanker Endorsement <span className="text-destructive">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Yes
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              No
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">Submit Application</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
