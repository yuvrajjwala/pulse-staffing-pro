import DashboardNav from "@/components/DashboardNav";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ManageShifts = () => {
  const shifts = [
    { id: 1, role: "RN - Emergency", worker: "Sarah Johnson", date: "Dec 23, 2024", time: "6:00 PM - 6:00 AM", status: "active", filled: true },
    { id: 2, role: "RN - ICU", worker: "Michael Chen", date: "Dec 24, 2024", time: "7:00 PM - 7:00 AM", status: "scheduled", filled: true },
    { id: 3, role: "LVN - Pediatrics", worker: "Pending", date: "Dec 25, 2024", time: "7:00 AM - 7:00 PM", status: "pending", filled: false, applications: 5 },
    { id: 4, role: "CNA - Day Shift", worker: "Emily Rodriguez", date: "Dec 26, 2024", time: "8:00 AM - 4:00 PM", status: "scheduled", filled: true },
    { id: 5, role: "RN - Emergency", worker: "Pending", date: "Dec 27, 2024", time: "6:00 PM - 6:00 AM", status: "pending", filled: false, applications: 3 },
    { id: 6, role: "RN - Med-Surg", worker: "James Williams", date: "Dec 20, 2024", time: "7:00 AM - 7:00 PM", status: "completed", filled: true },
  ];

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; className: string; icon: any }> = {
      active: { label: "In Progress", className: "badge-success", icon: CheckCircle },
      scheduled: { label: "Scheduled", className: "badge-primary", icon: Calendar },
      pending: { label: "Pending", className: "badge-urgent", icon: AlertCircle },
      completed: { label: "Completed", className: "badge-verified", icon: CheckCircle },
      cancelled: { label: "Cancelled", className: "bg-destructive/10 text-destructive", icon: XCircle },
    };

    const statusInfo = statusMap[status] || statusMap.pending;
    const Icon = statusInfo.icon;

    return (
      <span className={`${statusInfo.className} inline-flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {statusInfo.label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav userType="facility" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Manage Shifts</h1>
            <p className="text-muted-foreground">View and manage all your posted shifts</p>
          </div>
          <Link to="/facility/post-shift">
            <Button size="lg">Post New Shift</Button>
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto">
          {["All Shifts", "Active", "Scheduled", "Pending", "Completed"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                tab === "All Shifts"
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent hover:bg-accent/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Shifts Table */}
        <div className="card-elevated overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-sm font-semibold">Role</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold">Worker</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold">Date</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold">Time</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold">Status</th>
                  <th className="text-right py-4 px-6 text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {shifts.map((shift) => (
                  <tr key={shift.id} className="border-b border-border hover:bg-accent/30 transition-colors">
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-semibold">{shift.role}</p>
                        {!shift.filled && shift.applications && (
                          <p className="text-xs text-muted-foreground">{shift.applications} applications</p>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={shift.filled ? "font-medium" : "text-muted-foreground"}>
                        {shift.worker}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm">{shift.date}</td>
                    <td className="py-4 px-6 text-sm text-muted-foreground">{shift.time}</td>
                    <td className="py-4 px-6">{getStatusBadge(shift.status)}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        {shift.status === "pending" && (
                          <Button size="sm">Review</Button>
                        )}
                        {shift.status === "scheduled" && (
                          <Button variant="ghost" size="sm" className="text-destructive">
                            Cancel
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid sm:grid-cols-4 gap-6 mt-8">
          <div className="card-elevated p-6 text-center space-y-2">
            <Users className="w-8 h-8 text-primary mx-auto" />
            <div className="text-3xl font-bold text-foreground">12</div>
            <p className="text-sm text-muted-foreground">Total Active Shifts</p>
          </div>
          <div className="card-elevated p-6 text-center space-y-2">
            <CheckCircle className="w-8 h-8 text-success mx-auto" />
            <div className="text-3xl font-bold text-success">10</div>
            <p className="text-sm text-muted-foreground">Shifts Filled</p>
          </div>
          <div className="card-elevated p-6 text-center space-y-2">
            <AlertCircle className="w-8 h-8 text-urgent mx-auto" />
            <div className="text-3xl font-bold text-urgent">2</div>
            <p className="text-sm text-muted-foreground">Pending Approval</p>
          </div>
          <div className="card-elevated p-6 text-center space-y-2">
            <Clock className="w-8 h-8 text-muted-foreground mx-auto" />
            <div className="text-3xl font-bold text-foreground">98%</div>
            <p className="text-sm text-muted-foreground">Fill Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageShifts;
