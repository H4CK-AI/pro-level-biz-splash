import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Award, Target, Users, Briefcase } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Target, value: "50+", label: "Projects Delivered" },
    { icon: Users, value: "100%", label: "Client Satisfaction" }
  ];

  const expertise = [
    "EPC & IPP Structuring",
    "PPA Negotiation",
    "Project Financing",
    "Solar Module Manufacturing",
    "BOS Supply Chain",
    "Land Acquisition & Connectivity",
    "Project Development & Execution",
    "Government Liaising",
    "Open Access & Tendering",
    "P&L Monitoring & Budget Control"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
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
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
            {/* Text Content */}
            <div className="space-y-8 text-left">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in">
                  Jaswinder Bhatiya
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-medium animate-fade-in">
                  Founder & Chief Consultant
                </p>
              </div>
              
              <div className="space-y-4 text-lg text-muted-foreground animate-fade-in">
                <p>
                  Jaswinder Bhatiya is the Founder and Lead Consultant of <span className="text-primary font-semibold">Hi Sky Group</span>, a full-spectrum renewable energy advisory and project developer focused on solar power solutions across India and international markets.
                </p>
                <p>
                  With over 15 years of experience in EPC, IPP structuring, PPA negotiation, and project financing, Jaswinder combines deep technical know-how with pragmatic commercial strategy to deliver bankable projects.
                </p>
                <p>
                  Hi Sky Group provides consultancy in solar module manufacturing lines, BOS supply, land acquisition & connectivity, project development, execution (EPC & PMC), government liaisoning, open access and tendering services. We structure investor-secure SPVs, maximize carbon credit value and manage P&L for long-term asset returns.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <Card 
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-center"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
                <div className="relative overflow-hidden rounded-2xl border-4 border-primary shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img 
                    src={profileImage} 
                    alt="Jaswinder Bhatiya - Founder & Chief Consultant"
                    className="w-full max-w-lg h-auto object-cover"
                  />
                </div>
                {/* Contact Card Overlay */}
                <Card className="absolute bottom-8 right-8 p-6 bg-card/95 backdrop-blur border-primary/30 shadow-xl">
                  <p className="text-sm text-muted-foreground mb-2">Contact</p>
                  <a href="tel:+919716702915" className="block text-lg font-semibold text-foreground hover:text-primary transition-colors mb-2">
                    +91 9716702915
                  </a>
                  <a href="mailto:info@hiskygroup.com" className="block text-sm text-primary hover:text-primary/80 transition-colors">
                    info@hiskygroup.com
                  </a>
                </Card>
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

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2 relative">
                CORE EXPERTISE
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized consulting services in renewable energy and solar power development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {expertise.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                  <p className="text-card-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                    {item}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Company Highlight */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/30 text-center">
            <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-3">Hi Sky Group</h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A proven solar EPC contractor and developer with 200+ engineers and staff, delivering turnkey solutions across 0.2-20 MW sites with institutional-grade governance and bankable delivery. Proven track record includes major projects with Adani, Tata Solar, Rays Power, and Kochi Airport.
            </p>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to discuss your renewable energy project?
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
                  <a href="tel:+919716702915" className="text-lg font-semibold text-card-foreground hover:text-primary transition-colors">
                    +91 9716702915
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
                  <a href="mailto:info@hiskygroup.com" className="text-lg font-semibold text-card-foreground hover:text-primary transition-colors break-all">
                    info@hiskygroup.com
                  </a>
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
            © 2025 Jaswinder Bhatiya | Hi Sky Group. Renewable Energy Consultant.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
