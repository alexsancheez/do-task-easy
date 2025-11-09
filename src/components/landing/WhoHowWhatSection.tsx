import { Users, Sparkles, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: Users,
    title: "Who",
    subtitle: "¿Para quién es ToTask?",
    description: "Dirigido a profesionales, equipos y estudiantes que quieren una gestión simple, clara y sin estrés."
  },
  {
    icon: Sparkles,
    title: "How",
    subtitle: "¿Cómo funciona?",
    description: "ToTask combina IA + automatización contextual para sugerir prioridades, reducir distracciones y sincronizar tareas en tiempo real."
  },
  {
    icon: Target,
    title: "What",
    subtitle: "¿Qué ofrece?",
    description: "Listas, turnos, personalización visual y exportación JSON. Interfaz ligera, adaptable y sin sobrecarga de funciones."
  }
];

export const WhoHowWhatSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <Card 
              key={item.title}
              className="animate-fade-in-up border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gradient">{item.title}</h3>
                  <h4 className="text-lg font-semibold text-foreground">{item.subtitle}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
