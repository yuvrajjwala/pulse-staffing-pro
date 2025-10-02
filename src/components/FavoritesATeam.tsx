import { Button } from "@/components/ui/button";
import { Star, Heart, TrendingUp, Award, CheckCircle } from "lucide-react";

const aTeamWorkers = [
  { id: 1, name: "Sarah J.", role: "RN", shifts: 45, rating: 4.9, available: true },
  { id: 2, name: "Michael C.", role: "CNA", shifts: 38, rating: 4.8, available: true },
  { id: 3, name: "Emily R.", role: "LVN", shifts: 52, rating: 5.0, available: false },
  { id: 4, name: "James K.", role: "RN", shifts: 41, rating: 4.9, available: true },
];

const FavoritesATeam = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">Priority Access</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Build Your A-Team
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Favorite your top-performing workers and get priority access when they're available. 
              Build lasting relationships with professionals who know your facility.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Instant Favorites</h3>
                  <p className="text-muted-foreground">Star workers you love and they'll appear at the top of your matches</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-success-light flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Priority Notifications</h3>
                  <p className="text-muted-foreground">Get notified first when your A-Team members are available</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-urgent-light flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-urgent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Direct Hire Option</h3>
                  <p className="text-muted-foreground">Hire permanently after one shift with zero placement fees</p>
                </div>
              </div>
            </div>

            <Button size="lg">
              Start Building Your Team
            </Button>
          </div>

          {/* Right Dashboard Preview */}
          <div className="space-y-4 animate-scale-in">
            <div className="card-elevated p-6 bg-gradient-to-br from-card to-accent/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-xl">My A-Team</h3>
                <span className="badge-primary">
                  {aTeamWorkers.filter(w => w.available).length} Available
                </span>
              </div>

              <div className="space-y-3">
                {aTeamWorkers.map((worker) => (
                  <div
                    key={worker.id}
                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-primary-foreground font-bold">
                        {worker.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{worker.name}</span>
                          <Star className="w-4 h-4 text-primary fill-primary" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{worker.role}</span>
                          <span>•</span>
                          <span>{worker.shifts} shifts</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-success fill-success" />
                            <span className="text-success font-medium">{worker.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {worker.available ? (
                        <div className="flex items-center gap-1 text-sm font-medium text-success">
                          <CheckCircle className="w-4 h-4" />
                          <span className="hidden sm:inline">Available</span>
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">Scheduled</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-4" variant="outline">
                Request Availability
              </Button>
            </div>

            {/* Direct Hire Highlight */}
            <div className="card-elevated p-6 bg-gradient-to-br from-urgent/5 to-urgent/10 border-urgent/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-urgent flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-urgent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Direct Hire — No Fee</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Love a worker? Hire them permanently after just one shift with zero placement fees or hidden costs.
                  </p>
                  <Button variant="urgent" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoritesATeam;
