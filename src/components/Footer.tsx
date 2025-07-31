import { Link } from "react-router-dom";
import { Brain, Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Soluciones",
      links: [
        { name: "Inteligencia Artificial", href: "/soluciones" },
        { name: "Gestión de Datos", href: "/soluciones" },
        { name: "Data Science", href: "/soluciones" },
        { name: "Consultoría Digital", href: "/soluciones" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Nuestro Proyecto", href: "/nosotros" },
        { name: "Casos de Éxito", href: "/casos-exito" },
        { name: "Recursos", href: "/recursos" },
        { name: "Contacto", href: "/contacto" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Política de Privacidad", href: "/privacy" },
        { name: "Términos de Servicio", href: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-background-accent border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-electric rounded-lg flex items-center justify-center shadow-glow">
                <Brain className="w-6 h-6 text-electric-foreground" />
              </div>
              <span className="text-2xl font-bold text-primary">Nexus IA</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Transformamos datos en decisiones estratégicas para impulsar el crecimiento de tu empresa.
            </p>
            <div className="mt-6 space-y-3">
              <a href="mailto:contacto@nexusia.com" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>contacto@nexusia.com</span>
              </a>
              <a href="tel:+525512345678" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+52 55 1234 5678</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-primary mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexus IA. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a key={index} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;