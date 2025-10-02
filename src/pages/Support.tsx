import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, MessageCircle, Video, FileText, HelpCircle } from "lucide-react";

const Support = () => {
  const faqs = [
    {
      q: "How do I get verified as a healthcare worker?",
      a: "Upload your professional license, certifications, and complete a background check. Verification typically takes 24-48 hours."
    },
    {
      q: "What is the platform fee?",
      a: "Platform fees vary by plan: 5% for Starter, 3% for Professional, and 1% for Enterprise. This covers payment processing, insurance, and 24/7 support."
    },
    {
      q: "How quickly can I fill an urgent shift?",
      a: "Most urgent shifts with bonuses are filled within 2 hours. Our AI matching instantly notifies qualified workers in your area."
    },
    {
      q: "Can I hire a worker permanently?",
      a: "Yes! Our direct hire option lets you hire any worker permanently after just one shift with zero placement fees."
    },
    {
      q: "What if a worker cancels?",
      a: "We'll immediately notify you and help you find a replacement. Workers with high cancellation rates are removed from the platform."
    },
    {
      q: "How do workers get paid?",
      a: "Workers are paid via direct deposit within 2-3 business days after completing a shift."
    },
  ];

  const resources = [
    { icon: BookOpen, title: "Documentation", desc: "Comprehensive guides and tutorials", link: "#" },
    { icon: Video, title: "Video Tutorials", desc: "Step-by-step video walkthroughs", link: "#" },
    { icon: FileText, title: "Knowledge Base", desc: "Search our help articles", link: "#" },
    { icon: MessageCircle, title: "Community Forum", desc: "Connect with other users", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6 animate-fade-in">
          <h1 className="text-5xl font-bold">How Can We Help?</h1>
          <p className="text-xl text-muted-foreground">
            Find answers, get support, and learn how to use HealthStaff Pro
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for help articles, guides, FAQs..."
              className="pl-12 h-14 text-lg"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a
                key={resource.title}
                href={resource.link}
                className="card-elevated p-6 space-y-4 text-center hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.desc}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-elevated p-6 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support CTA */}
        <div className="card-elevated p-12 text-center space-y-6 max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-success/5">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto">
            <MessageCircle className="w-10 h-10 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Our support team is available 24/7 to assist you
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <MessageCircle className="w-5 h-5" />
              Start Live Chat
            </Button>
            <Button size="lg" variant="outline">
              <FileText className="w-5 h-5" />
              Submit a Ticket
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
