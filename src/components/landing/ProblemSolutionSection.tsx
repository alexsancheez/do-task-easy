import { AlertCircle, CheckCircle2, Zap, Heart, LineChart } from "lucide-react";

export const ProblemSolutionSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Problem */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-3 text-destructive">
                <AlertCircle className="h-8 w-8" />
                <h2 className="text-3xl md:text-4xl font-bold">El Problema</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center mt-1">
                    <span className="text-destructive font-bold text-sm">1</span>
                  </div>
                  <p className="text-foreground">
                    <strong>Saturación de apps:</strong> Demasiadas opciones, interfaces complejas y funciones que nunca usas.
                  </p>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center mt-1">
                    <span className="text-destructive font-bold text-sm">2</span>
                  </div>
                  <p className="text-foreground">
                    <strong>Abandono del 25%</strong> de usuarios en los primeros 90 días por complejidad.
                  </p>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center mt-1">
                    <span className="text-destructive font-bold text-sm">3</span>
                  </div>
                  <p className="text-foreground">
                    <strong>Sobrecarga mental:</strong> En lugar de ayudarte, te añaden más estrés y decisiones.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="space-y-8 animate-fade-in-up stagger-2">
              <div className="inline-flex items-center space-x-3 text-primary">
                <CheckCircle2 className="h-8 w-8" />
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">La Solución: ToTask</h2>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Claridad inmediata, flujo fluido y motivación constante.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Simple</h4>
                    <p className="text-sm text-muted-foreground">Interfaz minimalista que va al grano</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Personalizable</h4>
                    <p className="text-sm text-muted-foreground">Adapta ToTask a tu estilo de trabajo</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Orientado a hitos reales</h4>
                    <p className="text-sm text-muted-foreground">Enfócate en lo que realmente importa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
