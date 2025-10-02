import DashboardNav from "@/components/DashboardNav";
import { TrendingUp, DollarSign, Users, Clock, Calendar, Star } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav userType="facility" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Analytics & Reports</h1>
          <p className="text-muted-foreground">Track your facility's staffing performance</p>
        </div>

        {/* KPI Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total Spend</span>
              <DollarSign className="w-5 h-5 text-urgent" />
            </div>
            <div className="text-3xl font-bold">$48.2K</div>
            <div className="flex items-center gap-1 text-sm text-success">
              <TrendingUp className="w-4 h-4" />
              <span>-8% vs last month</span>
            </div>
          </div>

          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Shifts Filled</span>
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">247</div>
            <div className="text-sm text-muted-foreground">This month</div>
          </div>

          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Fill Rate</span>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-bold">98%</div>
            <div className="flex items-center gap-1 text-sm text-success">
              <TrendingUp className="w-4 h-4" />
              <span>+5% vs last month</span>
            </div>
          </div>

          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Avg Worker Rating</span>
              <Star className="w-5 h-5 text-success fill-success" />
            </div>
            <div className="text-3xl font-bold">4.8</div>
            <div className="text-sm text-muted-foreground">From 247 shifts</div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="card-elevated p-6">
            <h2 className="text-xl font-bold mb-6">Shift Volume Trend</h2>
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
              <p className="text-muted-foreground">Line chart placeholder showing shift trends over time</p>
            </div>
          </div>

          <div className="card-elevated p-6">
            <h2 className="text-xl font-bold mb-6">Spending Breakdown</h2>
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
              <p className="text-muted-foreground">Pie chart placeholder showing cost distribution</p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="card-elevated p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">Performance Metrics</h2>
          <div className="space-y-6">
            {[
              { label: "Average Time to Fill", value: "2.3 hours", change: "-15%", positive: true },
              { label: "Worker Retention Rate", value: "87%", change: "+3%", positive: true },
              { label: "Shift Cancellation Rate", value: "2.1%", change: "-1.2%", positive: true },
              { label: "Cost per Shift", value: "$195", change: "-8%", positive: true },
            ].map((metric) => (
              <div key={metric.label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div className="flex-1">
                  <p className="font-medium mb-1">{metric.label}</p>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-primary to-success" />
                  </div>
                </div>
                <div className="text-right ml-6">
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className={`text-sm ${metric.positive ? 'text-success' : 'text-destructive'}`}>
                    {metric.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Workers */}
        <div className="card-elevated p-6">
          <h2 className="text-xl font-bold mb-6">Top Performing Workers</h2>
          <div className="space-y-3">
            {[
              { name: "Sarah Johnson", shifts: 45, rating: 4.9, onTime: "100%" },
              { name: "Michael Chen", shifts: 38, rating: 4.8, onTime: "98%" },
              { name: "Emily Rodriguez", shifts: 52, rating: 5.0, onTime: "100%" },
              { name: "James Williams", shifts: 41, rating: 4.9, onTime: "100%" },
            ].map((worker) => (
              <div key={worker.name} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-primary-foreground font-bold">
                    {worker.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{worker.name}</p>
                    <p className="text-sm text-muted-foreground">{worker.shifts} shifts this month</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-success">
                      <Star className="w-4 h-4 fill-success" />
                      <span className="font-bold">{worker.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-success">{worker.onTime}</p>
                    <p className="text-xs text-muted-foreground">On-Time</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
