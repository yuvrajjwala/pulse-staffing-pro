import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Clock, Star, Shield, Award } from "lucide-react";

const HowItWorks = () => {
  const facilitySteps = [
    { number: 1, title: "Create Your Account", desc: "Sign up in under 2 minutes and verify your facility information" },
    { number: 2, title: "Post Your First Shift", desc: "Describe your staffing needs, set pay rates, and publish instantly" },
    { number: 3, title: "Review Applications", desc: "View worker profiles, ratings, and certifications to find the perfect match" },
    { number: 4, title: "Confirm & Manage", desc: "Approve workers, track shifts in real-time, and build your A-Team" },
  ];

  const workerSteps = [
    { number: 1, title: "Sign Up & Get Verified", desc: "Create your profile and upload credentials for quick verification" },
    { number: 2, title: "Browse Available Shifts", desc: "Find shifts that match your skills, schedule, and location" },
    { number: 3, title: "Apply or Accept", desc: "Apply to open shifts or accept direct offers from facilities" },
    { number: 4, title: "Work & Get Paid", desc: "Complete your shift, receive ratings, and get paid fast" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold">
              How HealthStaff Pro Works
            </h1>
            <p className="text-xl text-muted-foreground">
              Simple, fast, and reliable healthcare staffing for facilities and professionals
            </p>
          </div>
        </div>
      </section>

      {/* For Facilities */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20 mb-4">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">For Healthcare Facilities</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Fill Shifts in 4 Simple Steps</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From posting to confirmation in minutes, not days
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {facilitySteps.map((step, index) => (
              <div
                key={step.number}
                className="card-elevated p-6 text-center space-y-4 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto text-2xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg">Get Started as a Facility</Button>
          </div>
        </div>
      </section>

      {/* For Workers */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success-light border border-success/20 mb-4">
              <Award className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">For Healthcare Workers</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Find Your Next Shift in 4 Steps</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse, apply, work, and earn—all from your phone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {workerSteps.map((step, index) => (
              <div
                key={step.number}
                className="card-elevated p-6 text-center space-y-4 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-success flex items-center justify-center mx-auto text-2xl font-bold text-success-foreground">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="success">Get Started as a Worker</Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose HealthStaff Pro?</h2>
            <p className="text-xl text-muted-foreground">
              Built for healthcare, trusted by thousands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "100% Verified", desc: "Every worker is background-checked and credential-verified" },
              { icon: Clock, title: "Fill in Minutes", desc: "Average shift fill time under 2 minutes with AI matching" },
              { icon: Star, title: "Top Quality", desc: "Access to top-rated professionals with proven track records" },
              { icon: CheckCircle, title: "Full Compliance", desc: "Automated compliance tracking for licenses and certifications" },
              { icon: Award, title: "Direct Hire", desc: "Hire permanently after one shift with zero placement fees" },
              { icon: Users, title: "Build Your Team", desc: "Favorite workers and get priority access to top performers" },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="card-elevated p-6 space-y-4 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elevated p-12 text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of facilities and workers using HealthStaff Pro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">For Facilities</Button>
              <Button size="lg" variant="outline">For Workers</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
