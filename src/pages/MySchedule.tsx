import DashboardNav from "@/components/DashboardNav";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, DollarSign, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const shifts = [
  { id: 1, date: "2024-12-23", facility: "Memorial Hospital", role: "RN - Emergency", time: "6:00 PM - 6:00 AM", pay: "$1,020", status: "confirmed" },
  { id: 2, date: "2024-12-24", facility: "Valley Medical", role: "RN - ICU", time: "7:00 PM - 7:00 AM", pay: "$1,140", status: "confirmed" },
  { id: 3, date: "2024-12-25", facility: "Children's Care", role: "RN - Pediatrics", time: "7:00 AM - 7:00 PM", pay: "$780", status: "pending" },
  { id: 4, date: "2024-12-27", facility: "Sunrise Senior Living", role: "CNA - Day", time: "8:00 AM - 4:00 PM", pay: "$320", status: "confirmed" },
  { id: 5, date: "2024-12-28", facility: "Memorial Hospital", role: "RN - Emergency", time: "6:00 PM - 6:00 AM", pay: "$1,020", status: "confirmed" },
];

const MySchedule = () => {
  const [currentMonth] = useState("December 2024");

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav userType="worker" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Schedule</h1>
            <p className="text-muted-foreground">View and manage your upcoming shifts</p>
          </div>
          <Button>
            <Calendar className="w-5 h-5" />
            Export Schedule
          </Button>
        </div>

        {/* Calendar Header */}
        <div className="card-elevated p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{currentMonth}</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-sm font-semibold text-muted-foreground py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 2;
              const hasShift = shifts.some(s => new Date(s.date).getDate() === day);
              const isToday = day === 23;
              
              return (
                <div
                  key={i}
                  className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-colors ${
                    day < 1 || day > 31
                      ? "text-muted-foreground/30"
                      : hasShift
                      ? "bg-primary text-primary-foreground font-semibold cursor-pointer hover:bg-primary-hover"
                      : isToday
                      ? "bg-accent border border-primary"
                      : "hover:bg-accent cursor-pointer"
                  }`}
                >
                  {day > 0 && day <= 31 ? day : ""}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-primary" />
              <span className="text-muted-foreground">Has Shift</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-primary bg-accent" />
              <span className="text-muted-foreground">Today</span>
            </div>
          </div>
        </div>

        {/* Upcoming Shifts List */}
        <div className="card-elevated p-6">
          <h2 className="text-2xl font-bold mb-6">Upcoming Shifts</h2>
          <div className="space-y-4">
            {shifts.map((shift) => (
              <div key={shift.id} className="p-5 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{shift.role}</h3>
                        <p className="text-sm text-muted-foreground">{shift.facility}</p>
                      </div>
                      <span className={`badge-${shift.status === 'confirmed' ? 'success' : 'primary'}`}>
                        {shift.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{new Date(shift.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{shift.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-success" />
                        <span className="font-semibold text-success">{shift.pay}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {shift.status === 'pending' && (
                      <Button variant="destructive" size="sm">
                        Cancel
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          <div className="card-elevated p-6 text-center space-y-2">
            <div className="text-3xl font-bold text-primary">5</div>
            <p className="text-sm text-muted-foreground">Shifts This Month</p>
          </div>
          <div className="card-elevated p-6 text-center space-y-2">
            <div className="text-3xl font-bold text-success">$4,280</div>
            <p className="text-sm text-muted-foreground">Total Earnings</p>
          </div>
          <div className="card-elevated p-6 text-center space-y-2">
            <div className="text-3xl font-bold text-urgent">52</div>
            <p className="text-sm text-muted-foreground">Total Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySchedule;
