import DashboardNav from "@/components/DashboardNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, DollarSign, Users, MapPin, FileText } from "lucide-react";

const PostShift = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav userType="facility" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Post a New Shift</h1>
            <p className="text-muted-foreground">Fill your shifts quickly with verified healthcare professionals</p>
          </div>

          <div className="card-elevated p-8 space-y-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Basic Information
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="role">Role/Position*</Label>
                  <select id="role" className="w-full h-10 px-3 rounded-lg border border-input bg-background">
                    <option>Select a role</option>
                    <option>Registered Nurse (RN)</option>
                    <option>Licensed Vocational Nurse (LVN)</option>
                    <option>Certified Nursing Assistant (CNA)</option>
                    <option>Medical Assistant (MA)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialty">Specialty*</Label>
                  <select id="specialty" className="w-full h-10 px-3 rounded-lg border border-input bg-background">
                    <option>Select specialty</option>
                    <option>Emergency Care</option>
                    <option>Critical Care / ICU</option>
                    <option>Pediatrics</option>
                    <option>Geriatrics</option>
                    <option>Medical-Surgical</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Shift Description</Label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Describe the shift responsibilities and requirements..."
                  className="w-full px-3 py-2 rounded-lg border border-input bg-background resize-none"
                />
              </div>
            </div>

            {/* Date & Time */}
            <div className="space-y-6 pt-6 border-t border-border">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Date & Time
              </h2>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Shift Date*</Label>
                  <Input id="date" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="start-time">Start Time*</Label>
                  <Input id="start-time" type="time" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="end-time">End Time*</Label>
                  <Input id="end-time" type="time" />
                </div>
              </div>
            </div>

            {/* Compensation */}
            <div className="space-y-6 pt-6 border-t border-border">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Compensation
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="pay-rate">Hourly Rate*</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input id="pay-rate" type="number" placeholder="65.00" className="pl-7" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bonus">Urgent Bonus (Optional)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input id="bonus" type="number" placeholder="0.00" className="pl-7" />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-success-light border border-success/20">
                <p className="text-sm text-success">
                  <strong>Tip:</strong> Shifts with bonuses are filled 3x faster on average
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="space-y-6 pt-6 border-t border-border">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Requirements
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="workers-needed">Number of Workers Needed*</Label>
                  <Input id="workers-needed" type="number" placeholder="1" min="1" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="min-rating">Minimum Rating</Label>
                  <select id="min-rating" className="w-full h-10 px-3 rounded-lg border border-input bg-background">
                    <option>No minimum</option>
                    <option>4.0+</option>
                    <option>4.5+</option>
                    <option>4.8+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Required Certifications</Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {["BLS Certification", "ACLS Certification", "PALS Certification", "CPR Certified"].map((cert) => (
                    <label key={cert} className="flex items-center gap-2 p-3 rounded-lg border border-input hover:bg-accent cursor-pointer transition-colors">
                      <input type="checkbox" className="w-4 h-4 rounded border-input" />
                      <span className="text-sm">{cert}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-6 pt-6 border-t border-border">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location
              </h2>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Facility Address*</Label>
                  <Input id="address" placeholder="123 Medical Center Blvd" />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City*</Label>
                    <Input id="city" placeholder="Los Angeles" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State*</Label>
                    <Input id="state" placeholder="CA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code*</Label>
                    <Input id="zip" placeholder="90001" />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-6">
              <Button size="lg" className="flex-1">
                Post Shift
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Save as Draft
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostShift;
