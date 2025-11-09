import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const comparisons = [
  {
    name: "Trello",
    description: "Simple pero sin IA",
    pros: ["Interfaz visual", "Fácil de usar"],
    cons: ["Sin automatización", "Sin IA contextual", "Limitado para proyectos complejos"]
  },
  {
    name: "Notion",
    description: "Flexible pero recargado",
    pros: ["Muy personalizable", "Todo en uno"],
    cons: ["Curva de aprendizaje alta", "Puede ser abrumador", "Demasiadas opciones"]
  },
  {
    name: "Asana",
    description: "Potente pero complejo",
    pros: ["Funciones avanzadas", "Gestión de equipos"],
    cons: ["Interface compleja", "Requiere formación", "Sobrecarga de funciones"]
  },
  {
    name: "ToTask",
    description: "El equilibrio perfecto",
    pros: [
      "Simplicidad + IA",
      "Sin curva de aprendizaje",
      "Bienestar digital",
      "Personalizable",
      "Enfoque en lo esencial"
    ],
    cons: [],
    highlight: true
  }
];

export const ComparisonSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              ¿Por qué elegir <span className="text-gradient">ToTask</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compara y descubre por qué ToTask es la mejor opción para gestionar tus tareas
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comparisons.map((app, index) => (
              <Card 
                key={app.name}
                className={`animate-fade-in-up transition-all duration-300 ${
                  app.highlight 
                    ? "gradient-border shadow-xl scale-105 border-2 border-primary/20" 
                    : "border shadow-md hover:shadow-lg"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  {app.highlight && (
                    <div className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-full mb-2">
                      Recomendado
                    </div>
                  )}
                  
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${app.highlight ? "text-gradient" : ""}`}>
                      {app.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{app.description}</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    {app.pros.map((pro) => (
                      <div key={pro} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{pro}</span>
                      </div>
                    ))}
                    {app.cons.map((con) => (
                      <div key={con} className="flex items-start space-x-2">
                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{con}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
