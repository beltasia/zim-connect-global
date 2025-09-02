import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Building lasting partnerships through honest communication and reliable service delivery."
    },
    {
      icon: Target,
      title: "Efficiency & Precision",
      description: "Streamlined processes ensuring your goods move swiftly and safely across borders."
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Deep understanding of Zimbabwe's trade landscape and international markets."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Committed to excellence in every aspect of our trade facilitation services."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About ZimTrade
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are Zimbabwe's leading import and export facilitator, specializing in 
              connecting local businesses with global opportunities. Our mission is to 
              bridge Zimbabwe with international markets through professional, efficient, 
              and reliable trade services.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Your Strategic Trade Partner
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over a decade of experience in international trade, we understand 
                  the unique challenges and opportunities that Zimbabwean businesses face 
                  in the global marketplace.
                </p>
                <p>
                  Our comprehensive suite of services covers everything from sourcing and 
                  procurement to customs clearance and logistics, ensuring your trade 
                  operations run smoothly and efficiently.
                </p>
                <p>
                  We pride ourselves on being more than just a service provider – we're 
                  your strategic partner in navigating the complexities of international 
                  trade and unlocking new growth opportunities.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Successful Shipments</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                    <div className="text-sm text-muted-foreground">Global Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;