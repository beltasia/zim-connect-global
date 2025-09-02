import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Ship, 
  Plane, 
  Truck, 
  FileText, 
  Package, 
  Users,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: "Import Services",
      description: "Comprehensive importing solutions including sourcing, procurement, customs clearance, and delivery to your doorstep.",
      features: [
        "Global sourcing & procurement",
        "Customs clearance & documentation",
        "Quality inspection & verification",
        "Door-to-door delivery"
      ]
    },
    {
      icon: Plane,
      title: "Export Services",
      description: "Expand your reach globally with our export facilitation services, showcasing Zimbabwe's finest products worldwide.",
      features: [
        "Market research & analysis",
        "Export documentation",
        "International marketing support",
        "Trade compliance guidance"
      ]
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "End-to-end logistics solutions ensuring your cargo moves efficiently from origin to destination.",
      features: [
        "Freight forwarding",
        "Warehousing solutions",
        "Inventory management",
        "Last-mile delivery"
      ]
    },
    {
      icon: FileText,
      title: "Trade Consultancy",
      description: "Expert guidance on trade regulations, compliance, and business development for cross-border commerce.",
      features: [
        "Trade compliance advisory",
        "Market entry strategies",
        "Business development support",
        "Regulatory guidance"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive trade solutions designed to streamline your import and export operations
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Choose ZimTrade?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We combine local expertise with international reach to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Expert Team</h4>
                <p className="text-muted-foreground text-sm">
                  Experienced professionals with deep knowledge of international trade
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">End-to-End Solutions</h4>
                <p className="text-muted-foreground text-sm">
                  Complete trade services from initial planning to final delivery
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ship className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Global Network</h4>
                <p className="text-muted-foreground text-sm">
                  Extensive partnerships across Africa, Asia, Europe, and beyond
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;