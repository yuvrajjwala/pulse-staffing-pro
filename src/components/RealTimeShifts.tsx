import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, DollarSign, MapPin, AlertCircle } from "lucide-react";

const urgentShifts = [
  {
    id: 1,
    facility: "Memorial Hospital",
    role: "RN - Emergency Department",
    location: "Los Angeles, CA",
    time: "6:00 PM - 6:00 AM",
    date: "Today",
    payRate: "$85/hr",
    bonus: "+$100 Urgent Bonus",
    timeLeft: "2h 15m",
    slots: 2,
  },
  {
    id: 2,
    facility: "Sunrise Senior Living",
    role: "CNA - Night Shift",
    location: "San Diego, CA",
    time: "10:00 PM - 6:00 AM",
    date: "Tomorrow",
    payRate: "$45/hr",
    bonus: "+$50 Urgent Bonus",
    timeLeft: "5h 30m",
    slots: 1,
  },
  {
    id: 3,
    facility: "Children's Care Center",
    role: "LVN - Pediatrics",
    location: "San Francisco, CA",
    time: "7:00 AM - 7:00 PM",
    date: "Today",
    payRate: "$65/hr",
    bonus: "+$75 Urgent Bonus",
    timeLeft: "45m",
    slots: 3,
  },
];

const RealTimeShifts = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-urgent-light border border-urgent/20">
            <AlertCircle className="w-4 h-4 text-urgent animate-pulse-glow" />
            <span className="text-sm font-medium text-urgent">Live Feed - Updates Every 30s</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Fill Urgent Shifts in Minutes
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time shift notifications with AI-powered matching. 
            Boost pay for urgent needs and watch them fill instantly.
          </p>
        </div>

        {/* Shift Cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {urgentShifts.map((shift, index) => (
            <div
              key={shift.id}
              className="card-elevated p-6 hover:scale-[1.01] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Left Content */}
                <div className="flex-1 space-y-4">
                  {/* Header with Urgency Badge */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-1">{shift.role}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{shift.facility}</p>
                    </div>
                    <div className="badge-urgent flex items-center gap-1 animate-pulse-glow">
                      <Clock className="w-3 h-3" />
                      {shift.timeLeft} left
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{shift.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">
                        {shift.date} • {shift.time}
                      </span>
                    </div>
                  </div>

                  {/* Pay & Bonus */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-success" />
                      <span className="text-2xl font-bold text-success">{shift.payRate}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-urgent-light border border-urgent/20">
                      <span className="text-sm font-semibold text-urgent flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {shift.bonus}
                      </span>
                    </div>
                  </div>

                  {/* Slots */}
                  <div className="text-sm">
                    <span className="text-muted-foreground">Slots available: </span>
                    <span className="font-semibold text-foreground">{shift.slots}</span>
                  </div>
                </div>

                {/* Right CTA */}
                <div className="lg:w-48 flex flex-col gap-2">
                  <Button variant="urgent" size="lg" className="w-full">
                    Claim Shift
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="card-elevated p-6 text-center space-y-2">
            <div className="text-3xl font-bold text-primary">1,247</div>
            <p className="text-sm text-muted-foreground">Active Shifts Today</p>
          </div>
          <div className="card-elevated p-6 text-center space-y-2">
            <div className="text-3xl font-bold text-success">98%</div>
            <p className="text-sm text-muted-foreground">Fill Rate in 2 Hours</p>
          </div>
          <div className="card-elevated p-6 text-center space-y-2">
            <div className="text-3xl font-bold text-urgent">127</div>
            <p className="text-sm text-muted-foreground">Urgent Shifts Now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeShifts;
