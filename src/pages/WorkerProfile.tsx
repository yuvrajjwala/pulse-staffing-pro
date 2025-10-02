import DashboardNav from "@/components/DashboardNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Star, Award, MapPin, Phone, Mail, Calendar, Edit } from "lucide-react";

const WorkerProfile = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNav userType="worker" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">My Profile</h1>
              <p className="text-muted-foreground">Manage your professional information</p>
            </div>
            <Button>
              <Edit className="w-5 h-5" />
              Edit Profile
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="card-elevated p-6 text-center space-y-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center mx-auto text-4xl font-bold text-primary-foreground">
                  SJ
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Sarah Johnson</h2>
                  <p className="text-muted-foreground">Registered Nurse</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 text-success fill-success" />
                  <span className="text-2xl font-bold">4.9</span>
                  <span className="text-muted-foreground">(234 reviews)</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Clipboard Score</span>
                    <span className="font-bold text-primary">98/100</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-gradient-to-r from-primary to-success" />
                  </div>
                  <p className="text-xs text-success mt-2">Top 5% of workers</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="card-elevated p-6 space-y-4">
                <h3 className="font-bold text-lg">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Shifts</span>
                    <span className="font-semibold">234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Response Rate</span>
                    <span className="font-semibold text-success">98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">On-Time Rate</span>
                    <span className="font-semibold text-success">100%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Member Since</span>
                    <span className="font-semibold">Jan 2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Information */}
              <div className="card-elevated p-6 space-y-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal Information
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" value="Sarah" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" value="Johnson" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="email" value="sarah.johnson@email.com" className="pl-10" disabled />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="phone" value="(555) 123-4567" className="pl-10" disabled />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="location" value="Los Angeles, CA" className="pl-10" disabled />
                  </div>
                </div>
              </div>

              {/* Professional Details */}
              <div className="card-elevated p-6 space-y-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Professional Details
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="license">License Number</Label>
                    <Input id="license" value="RN-CA-123456" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="license-exp">License Expiration</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="license-exp" value="12/31/2025" className="pl-10" disabled />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Specialties</Label>
                  <div className="flex flex-wrap gap-2">
                    {["Emergency Care", "Critical Care", "Trauma", "ACLS"].map((spec) => (
                      <span key={spec} className="badge-primary">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <textarea
                    id="bio"
                    rows={4}
                    value="Experienced RN with 8+ years in emergency care. Passionate about providing excellent patient care and working collaboratively with healthcare teams."
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background resize-none"
                    disabled
                  />
                </div>
              </div>

              {/* Certifications */}
              <div className="card-elevated p-6 space-y-6">
                <h2 className="text-xl font-bold">Certifications</h2>
                <div className="space-y-3">
                  {[
                    { name: "BLS Certification", exp: "Valid until 06/2025", status: "active" },
                    { name: "ACLS Certification", exp: "Valid until 08/2025", status: "active" },
                    { name: "PALS Certification", exp: "Valid until 12/2024", status: "active" },
                    { name: "TNCC Certification", exp: "Valid until 03/2025", status: "active" },
                  ].map((cert) => (
                    <div key={cert.name} className="flex items-center justify-between p-4 rounded-lg border border-border">
                      <div>
                        <p className="font-semibold">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">{cert.exp}</p>
                      </div>
                      <span className="badge-success">Active</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;
