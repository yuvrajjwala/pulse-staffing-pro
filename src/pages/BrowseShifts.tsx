import DashboardNav from "@/components/DashboardNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, SlidersHorizontal, MapPin, Clock, DollarSign, 
  Star, TrendingUp, Calendar, Filter 
} from "lucide-react";
import { useState } from "react";

const shifts = [
  {
    id: 1,
    facility: "Memorial Hospital",
    role: "RN - Emergency Department",
    specialty: "Emergency Care",
    location: "Los Angeles, CA",
    distance: "2.3 miles",
    date: "Today",
    time: "6:00 PM - 6:00 AM",
    duration: "12 hours",
    payRate: "$85/hr",
    totalPay: "$1,020",
    bonus: "+$100 Urgent",
    urgent: true,
    rating: 4.8,
    slots: 2,
  },
  {
    id: 2,
    facility: "Sunrise Senior Living",
    role: "CNA - Night Shift",
    specialty: "Geriatric Care",
    location: "Los Angeles, CA",
    distance: "5.1 miles",
    date: "Tomorrow",
    time: "10:00 PM - 6:00 AM",
    duration: "8 hours",
    payRate: "$45/hr",
    totalPay: "$360",
    bonus: "+$50 Urgent",
    urgent: true,
    rating: 4.6,
    slots: 1,
  },
  {
    id: 3,
    facility: "Children's Care Center",
    role: "LVN - Pediatrics",
    specialty: "Pediatric Care",
    location: "Pasadena, CA",
    distance: "8.7 miles",
    date: "Dec 25",
    time: "7:00 AM - 7:00 PM",
    duration: "12 hours",
    payRate: "$65/hr",
    totalPay: "$780",
    bonus: null,
    urgent: false,
    rating: 4.9,
    slots: 3,
  },
  {
    id: 4,
    facility: "Valley Medical Center",
    role: "RN - ICU",
    specialty: "Critical Care",
    location: "Van Nuys, CA",
    distance: "12.3 miles",
    date: "Dec 24",
    time: "7:00 PM - 7:00 AM",
    duration: "12 hours",
    payRate: "$95/hr",
    totalPay: "$1,140",
    bonus: "+$150 Holiday",
    urgent: false,
    rating: 4.7,
    slots: 1,
  },
];

const BrowseShifts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav userType="worker" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Available Shifts</h1>
          <p className="text-muted-foreground">Find your perfect shift match</p>
        </div>

        {/* Search & Filters */}
        <div className="card-elevated p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by role, specialty, or facility..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </Button>
            <Button>
              <Search className="w-5 h-5" />
              Search
            </Button>
          </div>

          {showFilters && (
            <div className="grid sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border animate-fade-in">
              <div>
                <label className="text-sm font-medium mb-2 block">Date Range</label>
                <select className="w-full h-10 px-3 rounded-lg border border-input bg-background">
                  <option>Any time</option>
                  <option>Today</option>
                  <option>This week</option>
                  <option>This month</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Specialty</label>
                <select className="w-full h-10 px-3 rounded-lg border border-input bg-background">
                  <option>All specialties</option>
                  <option>Emergency Care</option>
                  <option>Critical Care</option>
                  <option>Pediatric Care</option>
                  <option>Geriatric Care</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Distance</label>
                <select className="w-full h-10 px-3 rounded-lg border border-input bg-background">
                  <option>Any distance</option>
                  <option>Within 5 miles</option>
                  <option>Within 10 miles</option>
                  <option>Within 25 miles</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Stats */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{shifts.length}</span> available shifts
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="h-9 px-3 rounded-lg border border-input bg-background text-sm">
              <option>Best Match</option>
              <option>Highest Pay</option>
              <option>Nearest</option>
              <option>Soonest</option>
            </select>
          </div>
        </div>

        {/* Shift Cards */}
        <div className="space-y-4">
          {shifts.map((shift, index) => (
            <div
              key={shift.id}
              className="card-elevated p-6 hover:scale-[1.01] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-xl text-foreground">{shift.role}</h3>
                        {shift.urgent && (
                          <span className="badge-urgent animate-pulse-glow">Urgent</span>
                        )}
                      </div>
                      <p className="text-muted-foreground font-medium">{shift.facility}</p>
                      <p className="text-sm text-muted-foreground">{shift.specialty}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-success fill-success" />
                      <span className="font-semibold">{shift.rating}</span>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{shift.location}</p>
                        <p className="text-xs text-muted-foreground">{shift.distance}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{shift.date}</p>
                        <p className="text-xs text-muted-foreground">{shift.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{shift.duration}</p>
                        <p className="text-xs text-muted-foreground">{shift.slots} slots</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-success" />
                      <div>
                        <p className="font-bold text-success">{shift.payRate}</p>
                        <p className="text-xs text-muted-foreground">Total: {shift.totalPay}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bonus Badge */}
                  {shift.bonus && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-urgent-light border border-urgent/20">
                      <TrendingUp className="w-4 h-4 text-urgent" />
                      <span className="text-sm font-semibold text-urgent">{shift.bonus}</span>
                    </div>
                  )}
                </div>

                {/* Right CTA */}
                <div className="lg:w-48 flex flex-col gap-2">
                  <Button 
                    size="lg" 
                    className="w-full"
                    variant={shift.urgent ? "urgent" : "default"}
                  >
                    Apply Now
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full">
                    <Star className="w-4 h-4" />
                    Save
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Shifts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrowseShifts;
