import { Button } from "@/components/ui/button";
import { Building2, Menu, X, Bell, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface DashboardNavProps {
  userType: "worker" | "facility";
}

const DashboardNav = ({ userType }: DashboardNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const workerLinks = [
    { path: "/worker/dashboard", label: "Dashboard" },
    { path: "/worker/shifts", label: "Browse Shifts" },
    { path: "/worker/schedule", label: "My Schedule" },
    { path: "/worker/earnings", label: "Earnings" },
    { path: "/worker/profile", label: "Profile" },
    { path: "/worker/credentials", label: "Credentials" },
  ];

  const facilityLinks = [
    { path: "/facility/dashboard", label: "Dashboard" },
    { path: "/facility/post-shift", label: "Post Shift" },
    { path: "/facility/manage-shifts", label: "Manage Shifts" },
    { path: "/facility/workers", label: "Workers" },
    { path: "/facility/analytics", label: "Analytics" },
    { path: "/facility/settings", label: "Settings" },
  ];

  const links = userType === "worker" ? workerLinks : facilityLinks;

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">HealthStaff Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-urgent rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNav;
