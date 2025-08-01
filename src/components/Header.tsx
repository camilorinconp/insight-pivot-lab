import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Soluciones", href: "/soluciones" },
    { name: "Nuestro Proyecto", href: "/nosotros" },
    { name: "Casos de Éxito", href: "/casos-exito" },
    { name: "Recursos", href: "/recursos" },
    { name: "Contacto", href: "/contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        hasScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-electric rounded-lg flex items-center justify-center shadow-glow">
              <Brain className="w-6 h-6 text-electric-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">Nexus IA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  isActive(item.href) ? "text-primary" : "text-muted-foreground",
                  "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-electric after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
                  isActive(item.href) && "after:scale-x-100"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="electric" size="sm" className="group">
              Consultoría Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-xl z-40 transition-all duration-300",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <nav className="h-full flex flex-col justify-center px-6">
            <div className="space-y-8 text-center">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block text-2xl font-medium py-4 transition-all duration-300 rounded-xl",
                    "transform transition-transform duration-300",
                    isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                    isActive(item.href)
                      ? "text-electric bg-electric/10 shadow-lg"
                      : "text-muted-foreground hover:text-electric hover:bg-electric/5"
                  )}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' 
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className={cn(
                "pt-8 transform transition-all duration-300",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: isMenuOpen ? `${navigation.length * 100}ms` : '0ms' }}>
                <Button 
                  variant="electric" 
                  size="lg" 
                  className="w-full h-14 text-lg font-semibold rounded-xl shadow-glow"
                >
                  Consultoría Gratuita
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;