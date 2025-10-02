import DashboardNav from "@/components/DashboardNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, CreditCard, Bell, Shield, Users } from "lucide-react";

const FacilitySettings = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav userType="facility" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Facility Settings</h1>
            <p className="text-muted-foreground">Manage your facility profile and preferences</p>
          </div>

          <div className="space-y-8">
            {/* Facility Information */}
            <div className="card-elevated p-6 space-y-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Facility Information
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="facility-name">Facility Name</Label>
                  <Input id="facility-name" defaultValue="Memorial Hospital" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="facility-type">Facility Type</Label>
                  <select id="facility-type" className="w-full h-10 px-3 rounded-lg border border-input bg-background">
                    <option>Hospital</option>
                    <option>Clinic</option>
                    <option>Nursing Home</option>
                    <option>Urgent Care</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bed-count">Bed Count</Label>
                  <Input id="bed-count" type="number" defaultValue="250" />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Medical Center Blvd, Los Angeles, CA 90001" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="(555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="contact@memorial.com" />
                </div>
              </div>

              <Button>Save Changes</Button>
            </div>

            {/* Billing & Payment */}
            <div className="card-elevated p-6 space-y-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                Billing & Payment
              </h2>

              <div className="p-4 rounded-lg bg-accent space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Current Plan: Professional</p>
                    <p className="text-sm text-muted-foreground">$199/month</p>
                  </div>
                  <Button variant="outline" size="sm">Change Plan</Button>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-sm text-muted-foreground">Next billing date:</span>
                  <span className="font-semibold">Jan 1, 2025</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div>
                    <p className="font-semibold">Visa ending in 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
              </div>

              <Button variant="ghost">Add Payment Method</Button>
            </div>

            {/* Notification Preferences */}
            <div className="card-elevated p-6 space-y-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notification Preferences
              </h2>

              <div className="space-y-4">
                {[
                  { label: "New shift applications", desc: "Get notified when workers apply to your shifts" },
                  { label: "Shift confirmations", desc: "Receive confirmation when shifts are accepted" },
                  { label: "Worker check-ins", desc: "Alert when workers check in to shifts" },
                  { label: "Urgent shift alerts", desc: "Notifications for unfilled urgent shifts" },
                  { label: "Weekly summary", desc: "Get a weekly summary of your shift activity" },
                ].map((item) => (
                  <label key={item.label} className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-accent cursor-pointer transition-colors">
                    <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 rounded border-input" />
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Team Management */}
            <div className="card-elevated p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Team Management
                </h2>
                <Button>Invite Team Member</Button>
              </div>

              <div className="space-y-3">
                {[
                  { name: "John Smith", email: "john@memorial.com", role: "Admin" },
                  { name: "Jane Doe", email: "jane@memorial.com", role: "Manager" },
                ].map((member) => (
                  <div key={member.email} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div>
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="badge-primary text-xs">{member.role}</span>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="card-elevated p-6 space-y-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Security
              </h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" className="mt-2" />
                </div>
              </div>

              <Button>Update Password</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitySettings;
