import DashboardNav from "@/components/DashboardNav";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Download, Calendar, ArrowUpRight } from "lucide-react";

const Earnings = () => {
  const earnings = [
    { id: 1, date: "Dec 20, 2024", facility: "Memorial Hospital", role: "RN - Emergency", hours: 12, rate: "$85/hr", total: "$1,020", status: "paid" },
    { id: 2, date: "Dec 18, 2024", facility: "Valley Medical", role: "RN - ICU", hours: 12, rate: "$95/hr", total: "$1,140", status: "paid" },
    { id: 3, date: "Dec 15, 2024", facility: "Children's Care", role: "RN - Pediatrics", hours: 10, rate: "$65/hr", total: "$650", status: "paid" },
    { id: 4, date: "Dec 13, 2024", facility: "Sunrise Senior Living", role: "CNA - Night", hours: 8, rate: "$45/hr", total: "$360", status: "processing" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav userType="worker" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Earnings</h1>
            <p className="text-muted-foreground">Track your income and payouts</p>
          </div>
          <Button>
            <Download className="w-5 h-5" />
            Download Report
          </Button>
        </div>

        {/* Stats Cards */}
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
              <span className="text-sm text-muted-foreground">This Month</span>
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">$11,240</div>
            <div className="text-sm text-muted-foreground">18 shifts completed</div>
          </div>

          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Pending</span>
              <ArrowUpRight className="w-5 h-5 text-urgent" />
            </div>
            <div className="text-3xl font-bold text-foreground">$360</div>
            <div className="text-sm text-muted-foreground">Processing payment</div>
          </div>

          <div className="card-elevated p-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Year to Date</span>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-bold text-foreground">$127.3K</div>
            <div className="text-sm text-success">+18% vs last year</div>
          </div>
        </div>

        {/* Earnings Chart Placeholder */}
        <div className="card-elevated p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">Earnings Over Time</h2>
          <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
            <p className="text-muted-foreground">Chart visualization placeholder</p>
          </div>
        </div>

        {/* Earnings History */}
        <div className="card-elevated p-6">
          <h2 className="text-xl font-bold mb-6">Earnings History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Facility</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Role</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Hours</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Rate</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Total</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {earnings.map((earning) => (
                  <tr key={earning.id} className="border-b border-border hover:bg-accent/50 transition-colors">
                    <td className="py-4 px-4 text-sm">{earning.date}</td>
                    <td className="py-4 px-4 text-sm font-medium">{earning.facility}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{earning.role}</td>
                    <td className="py-4 px-4 text-sm text-right">{earning.hours}</td>
                    <td className="py-4 px-4 text-sm text-right">{earning.rate}</td>
                    <td className="py-4 px-4 text-sm text-right font-semibold text-success">{earning.total}</td>
                    <td className="py-4 px-4 text-right">
                      <span className={`badge-${earning.status === 'paid' ? 'success' : 'primary'} text-xs`}>
                        {earning.status === 'paid' ? 'Paid' : 'Processing'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
