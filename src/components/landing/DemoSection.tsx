import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

export const DemoSection = () => {
  return (
    <section id="demo" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Descubre cómo ToTask te ayuda a{" "}
              <span className="text-gradient">pensar menos y hacer más</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mira nuestra demo y comprueba lo fácil que es empezar a ser más productivo
            </p>
          </div>

          {/* Video Container */}
          <Card className="animate-fade-in-up stagger-1 overflow-hidden border-0 shadow-2xl">
            <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-secondary/5">
              {/* Placeholder for video - replace with actual video URL */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white hover:scale-110 transition-transform cursor-pointer shadow-lg">
                    <Play className="h-10 w-10 ml-1" fill="currentColor" />
                  </div>
                  <p className="text-muted-foreground">
                    Video demo próximamente
                  </p>
                </div>
              </div>
              
              {/* Replace the above div with this when you have a video URL:
              <iframe
                className="w-full h-full"
                src="YOUR_YOUTUBE_VIDEO_URL"
                title="ToTask Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              */}
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center animate-fade-in-up stagger-2">
            <p className="text-lg text-muted-foreground mb-6">
              ToTask es tu asistente inteligente para gestionar tareas con claridad.<br />
              No más caos ni sobrecarga: una herramienta ligera que se adapta a ti.
            </p>
            <p className="text-xl font-semibold text-gradient">
              Diseñada para pensar contigo, no por ti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
