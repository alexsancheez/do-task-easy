import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroVisual from "@/assets/hero-visual.png";
import totaskLogo from "@/assets/totask-logo.png";

export const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="animate-fade-in-up">
            <img 
              src={totaskLogo} 
              alt="ToTask Logo" 
              className="h-16 md:h-20 w-auto mb-8"
            />
          </div>

          {/* Hero Visual */}
          <div className="animate-fade-in-up stagger-1 mb-8">
            <img 
              src={heroVisual} 
              alt="ToTask Visual" 
              className="w-full max-w-2xl mx-auto"
            />
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-in-up stagger-2 text-5xl md:text-7xl font-bold tracking-tight">
            La nueva forma de gestionar{" "}
            <span className="text-gradient">tus tareas</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up stagger-3 text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Organiza, prioriza y completa tus objetivos sin distracciones
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up stagger-4 pt-4">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all duration-300 text-lg px-8 py-6"
              onClick={scrollToDemo}
            >
              Probar Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
