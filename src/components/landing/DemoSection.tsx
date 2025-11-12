import { Card } from "@/components/ui/card";

export const DemoSection = () => {
  return (
    <section
      id="demo"
      className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Descubre cómo ToTask te ayuda a{" "}
              <span className="text-gradient">pensar menos y hacer más</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mira nuestra demo y comprueba lo fácil que es empezar a ser más
              productivo
            </p>
          </div>

          {/* Video Container */}
          <Card className="animate-fade-in-up stagger-1 overflow-hidden border-0 shadow-2xl">
            <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex justify-center items-center">
              <video
                controls
                poster="/placeholder.svg" // opcional: imagen de portada
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              >
                <source src="/1.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center animate-fade-in-up stagger-2">
            <p className="text-lg text-muted-foreground mb-6">
              ToTask es tu asistente inteligente para gestionar tareas con
              claridad.
              <br />
              No más caos ni sobrecarga: una herramienta ligera que se adapta a
              ti.
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
