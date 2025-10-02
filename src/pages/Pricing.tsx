import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Star,
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Post up to 5 shifts/month",
        "Access to verified workers",
        "Basic compliance tracking",
        "Email support",
        "5% platform fee",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Professional",
      icon: Zap,
      price: "$199",
      period: "/month",
      description: "For growing healthcare facilities",
      features: [
        "Unlimited shift postings",
        "Priority worker matching",
        "Advanced analytics dashboard",
        "A-Team favorites management",
        "Direct hire options",
        "24/7 phone support",
        "3% platform fee",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      description: "For large healthcare organizations",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated account manager",
        "Multi-location management",
        "Custom compliance workflows",
        "API access",
        "1% platform fee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your facility. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`card-elevated p-8 space-y-6 animate-scale-in ${
                  plan.popular ? "border-2 border-primary relative" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3 pt-6 border-t border-border">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Is there a free trial?",
                a: "Yes! Professional plans include a 14-day free trial. No credit card required."
              },
              {
                q: "What's included in the platform fee?",
                a: "Platform fees cover payment processing, insurance, compliance verification, and 24/7 support."
              },
              {
                q: "Can I change plans anytime?",
                a: "Absolutely. Upgrade or downgrade your plan at any time with prorated billing."
              },
              {
                q: "Do you offer custom enterprise solutions?",
                a: "Yes, we work with large healthcare organizations to create custom solutions. Contact our sales team."
              },
            ].map((faq, index) => (
              <div key={index} className="card-elevated p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
