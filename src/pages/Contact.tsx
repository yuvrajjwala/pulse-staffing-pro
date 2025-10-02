import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-elevated p-8 space-y-6 animate-scale-in">
              <h2 className="text-2xl font-bold">Send Us a Message</h2>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name*</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name*</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject*</Label>
                  <select id="subject" className="w-full h-10 px-3 rounded-lg border border-input bg-background">
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message*</Label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background resize-none"
                  />
                </div>

                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div className="card-elevated p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">support@healthstaffpro.com</p>
                      <p className="text-muted-foreground">sales@healthstaffpro.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-success-light flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">Support: (555) 123-4567</p>
                      <p className="text-muted-foreground">Sales: (555) 765-4321</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-urgent-light flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-urgent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        123 Healthcare Plaza<br />
                        Los Angeles, CA 90017
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Live Chat</h3>
                      <p className="text-muted-foreground mb-2">Available Mon-Fri, 8am-8pm PST</p>
                      <Button size="sm">Start Chat</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-8 bg-gradient-to-br from-primary/5 to-success/5">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 8:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="font-semibold">10:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-8">
                <h3 className="text-xl font-bold mb-4">Enterprise Sales</h3>
                <p className="text-muted-foreground mb-4">
                  Need a custom solution for your healthcare organization? Our enterprise team is ready to help.
                </p>
                <Button variant="outline" className="w-full">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
