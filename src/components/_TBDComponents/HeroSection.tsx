import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 55, 0.8), rgba(34, 40, 55, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful digital experiences with modern technologies. 
            Passionate about clean code and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="hover-glow transition-spring bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover-scale transition-spring border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg font-medium"
            >
              Contact Me
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              className="text-muted-foreground hover:text-primary transition-smooth hover-scale p-3 rounded-full hover:bg-primary/10"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-muted-foreground hover:text-primary transition-smooth hover-scale p-3 rounded-full hover:bg-primary/10"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-muted-foreground hover:text-primary transition-smooth hover-scale p-3 rounded-full hover:bg-primary/10"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;