import DashboardNav from "@/components/DashboardNav";
import { Button } from "@/components/ui/button";
import { 
  Users, TrendingUp, Clock, DollarSign, Star, 
  AlertCircle, CheckCircle, Calendar, Plus 
} from "lucide-react";
import { Link } from "react-router-dom";

const FacilityDashboard = () => {
  const activeShifts = [
    { id: 1, role: "RN - Emergency", worker: "Sarah Johnson", status: "In Progress", time: "4h remaining" },
    { id: 2, role: "CNA - Night Shift", worker: "Michael Chen", status: "Scheduled", time: "Starts in 2h" },
  ];

  const pendingShifts = [
    { id: 1, role: "LVN - Pediatrics", slots: 2, timeLeft: "2h 30m", applications: 5 },
    { id: 2, role: "RN - ICU", slots: 1, timeLeft: "5h 15m", applications: 3 },
  ];

  const topWorkers = [
    { id: 1, name: "Sarah J.", shifts: 45, rating: 4.9 },
    { id: 2, name: "Michael C.", shifts: 38, rating: 4.8 },
    { id: 3, name: "Emily R.", shifts: 52, rating: 5.0 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav userType="facility" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Memorial Hospital Dashboard</h1>
            <p className="text-muted-foreground">Manage your shifts and workers</p>
          </div>
          <Link to="/facility/post-shift">
            <Button size="lg">
              <Plus className="w-5 h-5" />
              Post New Shift
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Active Shifts</span>
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">12</div>
            <div className="text-sm text-muted-foreground">8 scheduled today</div>
          </div>

          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Fill Rate</span>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-bold text-foreground">98%</div>
            <div className="flex items-center gap-1 text-sm text-success">
              <TrendingUp className="w-4 h-4" />
              <span>+5% this month</span>
            </div>
          </div>

          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">A-Team Workers</span>
              <Star className="w-5 h-5 text-primary fill-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">24</div>
            <div className="text-sm text-muted-foreground">12 available now</div>
          </div>

          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">This Month Spend</span>
              <DollarSign className="w-5 h-5 text-urgent" />
            </div>
            <div className="text-3xl font-bold text-foreground">$48.2K</div>
            <div className="text-sm text-muted-foreground">-8% vs last month</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Shifts */}
            <div className="card-elevated p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Active Shifts</h2>
                <Link to="/facility/manage-shifts">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>
              <div className="space-y-4">
                {activeShifts.map((shift) => (
                  <div key={shift.id} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{shift.role}</h3>
                        <p className="text-sm text-muted-foreground">{shift.worker}</p>
                      </div>
                      <span className={`badge-${shift.status === 'In Progress' ? 'success' : 'primary'}`}>
                        {shift.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{shift.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Shifts */}
            <div className="card-elevated p-6">
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-5 h-5 text-urgent" />
                <h2 className="text-xl font-bold">Pending Shifts</h2>
              </div>
              <div className="space-y-4">
                {pendingShifts.map((shift) => (
                  <div key={shift.id} className="p-4 rounded-lg bg-urgent-light border border-urgent/20">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{shift.role}</h3>
                        <p className="text-sm text-muted-foreground">{shift.slots} slots needed</p>
                      </div>
                      <span className="badge-urgent">
                        <Clock className="w-3 h-3" />
                        {shift.timeLeft}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {shift.applications} applications received
                      </span>
                      <Button size="sm">Review</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-elevated p-6">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link to="/facility/post-shift" className="w-full">
                  <Button className="w-full justify-start" size="lg">
                    <Plus className="w-5 h-5" />
                    Post New Shift
                  </Button>
                </Link>
                <Link to="/facility/workers" className="w-full">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Users className="w-5 h-5" />
                    Browse Workers
                  </Button>
                </Link>
                <Link to="/facility/analytics" className="w-full">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <TrendingUp className="w-5 h-5" />
                    View Analytics
                  </Button>
                </Link>
                <Link to="/facility/manage-shifts" className="w-full">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Calendar className="w-5 h-5" />
                    Manage Shifts
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* A-Team Workers */}
            <div className="card-elevated p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <h2 className="text-xl font-bold">Top A-Team Workers</h2>
              </div>
              <div className="space-y-3">
                {topWorkers.map((worker) => (
                  <div key={worker.id} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-primary-foreground font-bold">
                        {worker.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{worker.name}</p>
                        <p className="text-xs text-muted-foreground">{worker.shifts} shifts</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-success fill-success" />
                      <span className="text-sm font-semibold">{worker.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                Manage A-Team
              </Button>
            </div>

            {/* Compliance Status */}
            <div className="card-elevated p-6">
              <h2 className="text-xl font-bold mb-4">Compliance Status</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Workers</span>
                  <span className="flex items-center gap-1 text-success">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-semibold">100%</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Verified Credentials</span>
                  <span className="flex items-center gap-1 text-success">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-semibold">100%</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Background Checks</span>
                  <span className="flex items-center gap-1 text-success">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-semibold">100%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDashboard;
