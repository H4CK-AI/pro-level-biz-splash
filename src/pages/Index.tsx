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
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Jaswinder Bhatiya
                </h1>
                <p className="text-2xl md:text-3xl text-primary font-semibold">
                  Founder & Chief Consultant
                </p>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p>
                  Founder and Lead Consultant of <span className="text-primary font-semibold">Hi Sky Group</span>, a full-spectrum renewable energy advisory and project developer focused on solar power solutions across India and international markets.
                </p>
                <p>
                  With over 15 years of experience in EPC, IPP structuring, PPA negotiation, and project financing, I combine deep technical expertise with strategic commercial acumen to deliver bankable solar projects.
                </p>
                <p>
                  Hi Sky Group provides comprehensive consultancy in solar development, from module manufacturing and BOS supply to land acquisition, government liaising, and complete EPC execution. We structure investor-secure SPVs and manage P&L for optimal long-term returns.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group max-w-lg w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl border-4 border-primary/30 shadow-2xl">
                    <img 
                      src={profileImage} 
                      alt="Jaswinder Bhatiya - Founder & Chief Consultant"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  {/* Contact Card Overlay */}
                  <Card className="absolute bottom-8 right-8 left-8 p-6 bg-card/95 backdrop-blur-md border-primary/30 shadow-2xl">
                    <p className="text-sm text-muted-foreground mb-3">Contact</p>
                    <a href="tel:+919716702915" className="block text-xl font-bold text-foreground hover:text-primary transition-colors mb-2">
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
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Core Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Specialized consulting services in renewable energy and solar power development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-card/50 backdrop-blur border border-border rounded-xl hover:border-primary/50 hover:bg-card transition-all duration-300 group"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground/90 group-hover:text-foreground font-medium">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Company Highlight */}
          <Card className="p-10 bg-gradient-to-br from-card to-secondary/30 border-primary/20 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Hi Sky Group</h3>
            <p className="text-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
              A proven solar EPC contractor and developer with 200+ engineers and staff, delivering turnkey solutions across 0.2-20 MW sites with institutional-grade governance and bankable delivery. Proven track record includes major projects with Adani, Tata Solar, Rays Power, and Kochi Airport.
            </p>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-xl">
              Ready to discuss your renewable energy project?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card/80 backdrop-blur border-border hover:border-primary/50 hover:bg-card transition-all duration-300 group">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+919716702915" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                    +91 9716702915
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/80 backdrop-blur border-border hover:border-primary/50 hover:bg-card transition-all duration-300 group">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:info@hiskygroup.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors break-all">
                    info@hiskygroup.com
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-background">
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
