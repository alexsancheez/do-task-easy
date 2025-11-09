import { CheckSquare, Palette, Download, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import featuresVisual from "@/assets/features-visual.png";

const features = [
  {
    icon: CheckSquare,
    title: "Gestión intuitiva",
    description: "Añade, marca y elimina tareas con un simple clic. Sin complicaciones."
  },
  {
    icon: Palette,
    title: "Personalización total",
    description: "Personaliza fondos, fuentes y colores para crear tu espacio perfecto."
  },
  {
    icon: Download,
    title: "Importar / Exportar",
    description: "Exporta e importa tus listas en formato JSON. Tus datos, tu control."
  },
  {
    icon: RefreshCw,
    title: "Sincronización",
    description: "Accede a tus tareas desde cualquier dispositivo, siempre actualizadas."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Todo lo que necesitas, <span className="text-gradient">nada que sobra</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Funcionalidades diseñadas para maximizar tu productividad sin añadir complejidad
            </p>
          </div>

          {/* Visual */}
          <div className="animate-fade-in-up stagger-1">
            <img 
              src={featuresVisual} 
              alt="ToTask Features" 
              className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
            />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="animate-fade-in-up border-0 shadow-md hover:shadow-xl transition-all duration-300 group bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:scale-110 transition-transform">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
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
