import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Healthcare professionals" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by 10,000+ Facilities</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Connect with
              <span className="block text-primary mt-2">Verified Healthcare</span>
              <span className="block mt-2">Professionals</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Fill shifts instantly with pre-vetted, licensed healthcare workers. 
              Real-time matching, compliance tracking, and seamless scheduling—all in one platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl font-bold">50k+</span>
                </div>
                <p className="text-sm text-muted-foreground">Verified Workers</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-success">
                  <Clock className="w-5 h-5" />
                  <span className="text-2xl font-bold">&lt;2min</span>
                </div>
                <p className="text-sm text-muted-foreground">Average Fill Time</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-urgent">
                  <Shield className="w-5 h-5" />
                  <span className="text-2xl font-bold">100%</span>
                </div>
                <p className="text-sm text-muted-foreground">Compliance Rate</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Highlights */}
          <div className="hidden lg:block space-y-4 animate-scale-in">
            <div className="card-elevated p-6 space-y-3 backdrop-blur-sm bg-card/80">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-success-light flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">100% Verified Professionals</h3>
                  <p className="text-sm text-muted-foreground">Background checks, license verification, and credential tracking built-in</p>
                </div>
              </div>
            </div>

            <div className="card-elevated p-6 space-y-3 backdrop-blur-sm bg-card/80">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-urgent-light flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-urgent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Real-Time Shift Filling</h3>
                  <p className="text-sm text-muted-foreground">Urgent shifts filled within minutes with automated matching</p>
                </div>
              </div>
            </div>

            <div className="card-elevated p-6 space-y-3 backdrop-blur-sm bg-card/80">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Build Your A-Team</h3>
                  <p className="text-sm text-muted-foreground">Favorite workers and get priority access to top performers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
