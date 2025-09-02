import { Card, CardContent } from "@/components/ui/card";
import { 
  Wheat, 
  Wrench, 
  Gem, 
  Shirt,
  Laptop,
  Flower2,
  Package2,
  Truck
} from "lucide-react";

const Industries = () => {
  const importCategories = [
    {
      icon: Wrench,
      title: "Machinery & Equipment",
      description: "Industrial machinery, construction equipment, and manufacturing tools"
    },
    {
      icon: Laptop,
      title: "Electronics & Technology",
      description: "IT equipment, consumer electronics, and telecommunications gear"
    },
    {
      icon: Package2,
      title: "Raw Materials",
      description: "Industrial chemicals, steel, plastics, and manufacturing inputs"
    },
    {
      icon: Truck,
      title: "Automotive",
      description: "Vehicles, spare parts, and automotive accessories"
    }
  ];

  const exportCategories = [
    {
      icon: Wheat,
      title: "Agricultural Products",
      description: "Tobacco, maize, cotton, soybeans, and other agricultural exports"
    },
    {
      icon: Gem,
      title: "Minerals & Mining",
      description: "Gold, platinum, diamonds, lithium, and other precious minerals"
    },
    {
      icon: Shirt,
      title: "Textiles & Crafts",
      description: "Traditional crafts, textiles, leather goods, and handmade products"
    },
    {
      icon: Flower2,
      title: "Horticulture",
      description: "Cut flowers, fresh produce, and specialty agricultural products"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From Zimbabwe's rich agricultural heritage to cutting-edge technology imports, 
              we facilitate trade across diverse industries
            </p>
          </div>

          {/* Export Categories */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Zimbabwe Exports
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {exportCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Import Categories */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Import Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {importCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                      {category.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Zimbabwe Advantage */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Zimbabwe?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Strategic Location</div>
                <p className="text-muted-foreground">
                  Gateway to Southern African markets with excellent regional connectivity
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">Rich Resources</div>
                <p className="text-muted-foreground">
                  Abundant mineral wealth and fertile agricultural land for diverse exports
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Growing Economy</div>
                <p className="text-muted-foreground">
                  Emerging market opportunities with increasing international trade
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;