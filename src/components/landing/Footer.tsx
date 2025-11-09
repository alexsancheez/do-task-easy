import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import totaskLogo from "@/assets/totask-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={totaskLogo} 
              alt="ToTask Logo" 
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              La nueva forma de gestionar tus tareas con claridad y sin estrés.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <div className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
              <a href="mailto:hola@totask.app" className="text-sm">
                hola@totask.app
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ToTask. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
