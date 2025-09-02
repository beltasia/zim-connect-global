import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-trade.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Zimbabwe trade and shipping operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <Globe className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Zimbabwe's Premier Trade Partner</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Connecting Zimbabwe to
            <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Global Markets
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for import, export, and logistics solutions. 
            Bridging Zimbabwe with international opportunities through 
            professional trade services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroSecondary" 
              size="lg"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-accent mr-2" />
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-white/80">Successful Shipments</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="w-6 h-6 text-accent mr-2" />
                <span className="text-3xl font-bold text-white">25+</span>
              </div>
              <p className="text-white/80">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-accent mr-2" />
                <span className="text-3xl font-bold text-white">10+</span>
              </div>
              <p className="text-white/80">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;