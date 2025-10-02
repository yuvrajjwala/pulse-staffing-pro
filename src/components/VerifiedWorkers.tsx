import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Award, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const workerProfiles = [
  {
    id: 1,
    name: "Sarah Johnson, RN",
    role: "Registered Nurse",
    specialty: "Emergency Care",
    rating: 4.9,
    shifts: 234,
    location: "Los Angeles, CA",
    verified: true,
    certifications: ["BLS", "ACLS", "PALS"],
    availability: "Available Now",
    score: 98,
  },
  {
    id: 2,
    name: "Michael Chen, CNA",
    role: "Certified Nursing Assistant",
    specialty: "Geriatric Care",
    rating: 4.8,
    shifts: 189,
    location: "San Francisco, CA",
    verified: true,
    certifications: ["CNA", "CPR", "First Aid"],
    availability: "Available Today",
    score: 96,
  },
  {
    id: 3,
    name: "Emily Rodriguez, LVN",
    role: "Licensed Vocational Nurse",
    specialty: "Pediatric Care",
    rating: 5.0,
    shifts: 312,
    location: "San Diego, CA",
    verified: true,
    certifications: ["LVN", "PALS", "NRP"],
    availability: "Available Now",
    score: 99,
  },
];

const VerifiedWorkers = () => {
  return (
    <section id="workers" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success-light border border-success/20">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">100% Verified Professionals</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Pre-Vetted Healthcare Workers
          </h2>
          <p className="text-xl text-muted-foreground">
            Every professional is background-checked, licensed, and compliance-ready. 
            Access top-rated workers with verified credentials.
          </p>
        </div>

        {/* Worker Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workerProfiles.map((worker, index) => (
            <div
              key={worker.id}
              className="card-elevated p-6 space-y-4 animate-scale-in hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {worker.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{worker.name}</h3>
                    <p className="text-sm text-muted-foreground">{worker.role}</p>
                  </div>
                </div>
                {worker.verified && (
                  <div className="badge-verified">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 py-3 border-y border-border">
                <div className="flex items-center gap-1 text-success">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold">{worker.rating}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {worker.shifts} shifts completed
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="font-medium">Specialty:</span>
                  <span className="text-muted-foreground">{worker.specialty}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{worker.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-success" />
                  <span className="text-success font-medium">{worker.availability}</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2">
                {worker.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="badge-primary"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              {/* Score */}
              <div className="pt-3 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Clipboard Score</span>
                  <span className="text-sm font-bold text-primary">{worker.score}/100</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-success transition-all duration-500"
                    style={{ width: `${worker.score}%` }}
                  />
                </div>
              </div>

              {/* CTA */}
              <Button className="w-full" size="sm">
                View Full Profile
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button size="lg">
            Browse All Workers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VerifiedWorkers;
