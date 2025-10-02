import DashboardNav from "@/components/DashboardNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Star, CheckCircle, Heart, Filter } from "lucide-react";

const WorkerDirectory = () => {
  const workers = [
    { id: 1, name: "Sarah Johnson", role: "RN", specialty: "Emergency Care", rating: 4.9, shifts: 234, location: "Los Angeles, CA", aTeam: true, available: true },
    { id: 2, name: "Michael Chen", role: "CNA", specialty: "Geriatric Care", rating: 4.8, shifts: 189, location: "Los Angeles, CA", aTeam: true, available: true },
    { id: 3, name: "Emily Rodriguez", role: "LVN", specialty: "Pediatric Care", rating: 5.0, shifts: 312, location: "San Diego, CA", aTeam: true, available: false },
    { id: 4, name: "James Williams", role: "RN", specialty: "Critical Care", rating: 4.9, shifts: 267, location: "Pasadena, CA", aTeam: false, available: true },
    { id: 5, name: "Lisa Anderson", role: "CNA", specialty: "Medical-Surgical", rating: 4.7, shifts: 156, location: "Santa Monica, CA", aTeam: false, available: true },
    { id: 6, name: "David Martinez", role: "RN", specialty: "Emergency Care", rating: 4.8, shifts: 198, location: "Long Beach, CA", aTeam: false, available: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav userType="facility" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Worker Directory</h1>
          <p className="text-muted-foreground">Browse and connect with verified healthcare professionals</p>
        </div>

        {/* Search & Filters */}
        <div className="card-elevated p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search by name, role, or specialty..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="w-5 h-5" />
              Filters
            </Button>
            <Button>Search</Button>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary text-primary-foreground">
              All Workers
            </button>
            <button className="px-3 py-1.5 rounded-full text-sm font-medium bg-accent hover:bg-accent/80">
              A-Team Only
            </button>
            <button className="px-3 py-1.5 rounded-full text-sm font-medium bg-accent hover:bg-accent/80">
              Available Now
            </button>
            <button className="px-3 py-1.5 rounded-full text-sm font-medium bg-accent hover:bg-accent/80">
              RN
            </button>
            <button className="px-3 py-1.5 rounded-full text-sm font-medium bg-accent hover:bg-accent/80">
              CNA
            </button>
            <button className="px-3 py-1.5 rounded-full text-sm font-medium bg-accent hover:bg-accent/80">
              LVN
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{workers.length}</span> workers
          </p>
          <select className="h-9 px-3 rounded-lg border border-input bg-background text-sm">
            <option>Sort by: Best Match</option>
            <option>Highest Rated</option>
            <option>Most Shifts</option>
            <option>Available Now</option>
          </select>
        </div>

        {/* Worker Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workers.map((worker, index) => (
            <div
              key={worker.id}
              className="card-elevated p-6 space-y-4 animate-scale-in hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {worker.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{worker.name}</h3>
                    <p className="text-sm text-muted-foreground">{worker.role}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Heart className={`w-5 h-5 ${worker.aTeam ? "fill-primary text-primary" : ""}`} />
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 py-3 border-y border-border">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-success fill-success" />
                  <span className="font-semibold">{worker.rating}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {worker.shifts} shifts
                </div>
                {worker.aTeam && (
                  <span className="badge-primary text-xs ml-auto">
                    <Star className="w-3 h-3 fill-current" />
                    A-Team
                  </span>
                )}
              </div>

              {/* Details */}
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Specialty:</span>
                  <span className="ml-2 font-medium">{worker.specialty}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <span className="ml-2 font-medium">{worker.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-success font-medium">
                    {worker.available ? "Available Now" : "Scheduled"}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button className="flex-1" size="sm">
                  View Profile
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Request
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Workers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkerDirectory;
