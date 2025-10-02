import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Care First",
      description: "We're passionate about improving healthcare staffing to ensure better patient care."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building lasting relationships between facilities and healthcare professionals."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards of verification and compliance."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Leveraging technology to solve complex healthcare staffing challenges."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold">
              Transforming Healthcare Staffing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              HealthStaff Pro connects verified healthcare professionals with facilities instantly, 
              ensuring quality care through innovative technology and human-centered design.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're on a mission to revolutionize healthcare staffing by creating a seamless 
                connection between facilities and qualified professionals. Our platform eliminates 
                inefficiencies, reduces costs, and ensures every shift is filled with the right person.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by healthcare professionals who experienced the pain of traditional staffing 
                firsthand, we built HealthStaff Pro to be the solution we wished existed.
              </p>
              <Button size="lg">Join Our Mission</Button>
            </div>
            <div className="card-elevated p-12 bg-gradient-to-br from-primary/10 to-success/10 text-center space-y-8">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">50,000+</div>
                <p className="text-muted-foreground">Verified Healthcare Workers</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-success">10,000+</div>
                <p className="text-muted-foreground">Partner Facilities</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-urgent">2M+</div>
                <p className="text-muted-foreground">Shifts Filled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="card-elevated p-6 space-y-4 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Healthcare professionals and tech innovators working together
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Sarah Chen", role: "CEO & Co-Founder", bg: "from-primary to-primary-hover" },
              { name: "Michael Rodriguez", role: "CTO & Co-Founder", bg: "from-success to-success" },
              { name: "Emily Johnson", role: "Head of Operations", bg: "from-urgent to-urgent-hover" },
              { name: "James Williams", role: "Head of Compliance", bg: "from-secondary to-secondary-hover" },
            ].map((member, index) => (
              <div
                key={member.name}
                className="card-elevated p-6 text-center space-y-4 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.bg} flex items-center justify-center mx-auto text-2xl font-bold text-white`}>
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elevated p-12 text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold">Join Us Today</h2>
            <p className="text-xl text-muted-foreground">
              Whether you're a healthcare facility or professional, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">For Facilities</Button>
              <Button size="lg" variant="outline">For Workers</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
