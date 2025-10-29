import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    "ROW",
    "BESS",
    "Marketing",
    "BOS supply",
    "IPP Business",
    "Open Access",
    "P&L monitoring",
    "Tendering services",
    "PPA and Contracts",
    "Engineering design",
    "Consultancy for EPC",
    "Project development",
    "Supplier development",
    "Business Development",
    "Solar Park development",
    "International networking",
    "Project execution and PMC",
    "Costing and Budget control",
    "Land acquisition and connectivity",
    "Government Liasioning and compliance clearance",
    "Team building and Overall business management",
    "Renewable energy Solar power expert consultant and business advisor"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
                <div className="relative overflow-hidden rounded-2xl border-4 border-primary shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img 
                    src={profileImage} 
                    alt="J S Bhatia - Chief Operating Officer"
                    className="w-full max-w-md h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary rounded-full border border-primary/30 animate-fade-in">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Solar Maven</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in leading-tight">
                J S Bhatia
              </h1>
              
              <p className="text-xl md:text-2xl text-primary/90 font-medium animate-fade-in">
                Chief Operating Officer
              </p>
              
              <p className="text-lg text-muted-foreground max-w-xl animate-fade-in">
                Empowering Solar Business through innovative solutions and strategic leadership in renewable energy sector
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
                  Get in Touch
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2 relative">
                OUR SERVICES
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solar energy solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                  <p className="text-card-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                    {service}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's discuss how we can empower your solar business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card border-primary/20 hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+919560508489" className="text-lg font-semibold text-card-foreground hover:text-primary transition-colors">
                    +91 9560508489
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-primary/20 hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:coo.solarmaven@gmail.com" className="text-lg font-semibold text-card-foreground hover:text-primary transition-colors break-all">
                    coo.solarmaven@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-primary/20 hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Website</p>
                  <a href="https://www.solarmaven.in" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-card-foreground hover:text-primary transition-colors">
                    www.solarmaven.in
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-primary/20 hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-lg font-semibold text-card-foreground">
                    Noida - UP, NCR Delhi India
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20 bg-secondary/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Solar Maven. Empowering Solar Business.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
