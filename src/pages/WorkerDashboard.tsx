import DashboardNav from "@/components/DashboardNav";
import { Button } from "@/components/ui/button";
import { 
  Calendar, DollarSign, TrendingUp, Clock, Star, 
  Award, AlertCircle, CheckCircle, MapPin 
} from "lucide-react";

const WorkerDashboard = () => {
  const upcomingShifts = [
    {
      id: 1,
      facility: "Memorial Hospital",
      role: "RN - Emergency",
      date: "Today",
      time: "6:00 PM - 6:00 AM",
      pay: "$85/hr",
      location: "Los Angeles, CA"
    },
    {
      id: 2,
      facility: "Sunrise Senior Living",
      role: "CNA - Night Shift",
      date: "Tomorrow",
      time: "10:00 PM - 6:00 AM",
      pay: "$45/hr",
      location: "San Diego, CA"
    },
  ];

  const urgentShifts = [
    {
      id: 1,
      facility: "Children's Care Center",
      role: "LVN - Pediatrics",
      bonus: "+$75",
      timeLeft: "2h 30m",
    },
    {
      id: 2,
      facility: "Valley Medical",
      role: "RN - ICU",
      bonus: "+$100",
      timeLeft: "4h 15m",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav userType="worker" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground">Here's your activity summary</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">This Week</span>
              <DollarSign className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-bold text-foreground">$2,840</div>
            <div className="flex items-center gap-1 text-sm text-success">
              <TrendingUp className="w-4 h-4" />
              <span>+12% from last week</span>
            </div>
          </div>

          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Shifts This Month</span>
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">18</div>
            <div className="text-sm text-muted-foreground">4 more scheduled</div>
          </div>

          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Average Rating</span>
              <Star className="w-5 h-5 text-success fill-success" />
            </div>
            <div className="text-3xl font-bold text-foreground">4.9</div>
            <div className="text-sm text-muted-foreground">From 234 shifts</div>
          </div>

          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Clipboard Score</span>
              <Award className="w-5 h-5 text-urgent" />
            </div>
            <div className="text-3xl font-bold text-foreground">98</div>
            <div className="text-sm text-success">Top 5% of workers</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upcoming Shifts */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-elevated p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Upcoming Shifts</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {upcomingShifts.map((shift) => (
                  <div key={shift.id} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{shift.role}</h3>
                        <p className="text-sm text-muted-foreground">{shift.facility}</p>
                      </div>
                      <span className="badge-primary">{shift.date}</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{shift.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-success" />
                        <span className="font-semibold text-success">{shift.pay}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{shift.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-elevated p-6">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <Button className="w-full justify-start" size="lg">
                  <Calendar className="w-5 h-5" />
                  Browse Available Shifts
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Clock className="w-5 h-5" />
                  View My Schedule
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <DollarSign className="w-5 h-5" />
                  Check Earnings
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Award className="w-5 h-5" />
                  Update Credentials
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Urgent Shifts */}
            <div className="card-elevated p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-urgent animate-pulse-glow" />
                <h2 className="text-xl font-bold">Urgent Shifts</h2>
              </div>
              <div className="space-y-3">
                {urgentShifts.map((shift) => (
                  <div key={shift.id} className="p-4 rounded-lg bg-urgent-light border border-urgent/20">
                    <h3 className="font-semibold mb-1">{shift.role}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{shift.facility}</p>
                    <div className="flex items-center justify-between">
                      <span className="badge-urgent">
                        <Clock className="w-3 h-3" />
                        {shift.timeLeft}
                      </span>
                      <span className="text-sm font-bold text-urgent">{shift.bonus}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="urgent" className="w-full mt-4">
                View All Urgent Shifts
              </Button>
            </div>

            {/* Credentials Status */}
            <div className="card-elevated p-6">
              <h2 className="text-xl font-bold mb-4">Credentials Status</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">RN License</span>
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">BLS Certification</span>
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Background Check</span>
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">TB Test</span>
                  <span className="badge-urgent text-xs">Expires in 30 days</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                Manage Credentials
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
