import { Link } from "react-router-dom";
import { Brain, Mail, Phone, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-electric rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-electric-foreground" />
              </div>
              <span className="text-xl font-bold">Nexus IA</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transformamos datos en decisiones estratégicas para impulsar el crecimiento de tu empresa.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><Link to="/soluciones" className="text-primary-foreground/80 hover:text-electric transition-colors">Inteligencia Artificial</Link></li>
              <li><Link to="/soluciones" className="text-primary-foreground/80 hover:text-electric transition-colors">Gestión de Datos</Link></li>
              <li><Link to="/soluciones" className="text-primary-foreground/80 hover:text-electric transition-colors">Data Science</Link></li>
              <li><Link to="/soluciones" className="text-primary-foreground/80 hover:text-electric transition-colors">Consultoría Digital</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><Link to="/nosotros" className="text-primary-foreground/80 hover:text-electric transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/casos-exito" className="text-primary-foreground/80 hover:text-electric transition-colors">Casos de Éxito</Link></li>
              <li><Link to="/recursos" className="text-primary-foreground/80 hover:text-electric transition-colors">Blog & Recursos</Link></li>
              <li><Link to="/contacto" className="text-primary-foreground/80 hover:text-electric transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-electric" />
                <span className="text-primary-foreground/80 text-sm">contacto@nexusia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-electric" />
                <span className="text-primary-foreground/80 text-sm">+52 55 1234 5678</span>
              </div>
              <div className="flex space-x-3 pt-2">
                <a href="#" className="text-primary-foreground/80 hover:text-electric transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-electric transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Nexus IA. Todos los derechos reservados. Transformando el futuro con inteligencia artificial.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;