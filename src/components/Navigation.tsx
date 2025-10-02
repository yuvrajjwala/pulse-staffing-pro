import { Button } from "@/components/ui/button";
import { Menu, Building2, User } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">HealthStaff Pro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#workers" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              For Workers
            </a>
            <a href="#facilities" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              For Facilities
            </a>
            <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border animate-fade-in">
            <a href="#features" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg transition-colors">
              Features
            </a>
            <a href="#workers" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg transition-colors">
              For Workers
            </a>
            <a href="#facilities" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg transition-colors">
              For Facilities
            </a>
            <a href="#pricing" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg transition-colors">
              Pricing
            </a>
            <div className="flex flex-col gap-2 px-4 pt-2">
              <Button variant="ghost" size="sm" className="w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
