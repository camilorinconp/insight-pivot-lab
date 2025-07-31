import { useState } from "react";
import { ArrowRight, TrendingUp, Clock, DollarSign, Users, Factory, ShoppingCart, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const CasosExito = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Todos");

  const successStories = [
    {
      company: "LogiTech Solutions",
      industry: "Logística",
      size: "Mediana Empresa",
      icon: <Truck className="w-8 h-8 text-electric" />,
      challenge: "Optimización de Rutas y Gestión de Inventario",
      description: "Una empresa de logística con 200 empleados enfrentaba ineficiencias en sus rutas de entrega y problemas de sobrestock/desabasto en sus almacenes.",
      solution: "Implementamos un sistema de IA que optimiza rutas en tiempo real considerando tráfico, clima y prioridades de entrega, junto con un modelo predictivo para gestión automática de inventario.",
      results: [
        { metric: "30%", description: "Reducción en costos operativos" },
        { metric: "40%", description: "Mejora en tiempos de entrega" },
        { metric: "25%", description: "Optimización de inventario" },
        { metric: "15%", description: "Aumento en satisfacción del cliente" }
      ],
      testimonial: "Nexus IA transformó completamente nuestra operación. Los resultados superaron nuestras expectativas.",
      testimonialAuthor: "Ing. Pedro Martínez, Director de Operaciones",
      implementation: "8 semanas",
      roi: "ROI del 340% en el primer año"
    },
    {
      company: "RetailMax",
      industry: "Retail",
      size: "Gran Empresa",
      icon: <ShoppingCart className="w-8 h-8 text-electric" />,
      challenge: "Personalización de Experiencia del Cliente",
      description: "Cadena retail con 150 tiendas necesitaba personalizar ofertas y mejorar la experiencia de compra para aumentar conversiones y fidelización.",
      solution: "Desarrollamos un motor de recomendaciones basado en IA que analiza comportamiento de compra, preferencias y patrones estacionales para personalizar ofertas en tiempo real.",
      results: [
        { metric: "45%", description: "Aumento en conversiones" },
        { metric: "60%", description: "Mejora en fidelización" },
        { metric: "35%", description: "Incremento en ticket promedio" },
        { metric: "50%", description: "Reducción en productos devueltos" }
      ],
      testimonial: "La personalización que logramos con Nexus IA nos ha posicionado como líderes en experiencia del cliente.",
      testimonialAuthor: "Lic. María Fernández, Directora de Marketing",
      implementation: "12 semanas",
      roi: "ROI del 280% en el primer año"
    },
    {
      company: "IndustrialPro",
      industry: "Manufactura",
      size: "Corporación",
      icon: <Factory className="w-8 h-8 text-electric" />,
      challenge: "Mantenimiento Predictivo de Equipos",
      description: "Planta manufacturera con equipamiento crítico sufría paradas no planificadas costosas y mantenimientos reactivos ineficientes.",
      solution: "Implementamos IoT y algoritmos de machine learning para predecir fallas con 95% de precisión, optimizando calendarios de mantenimiento y reduciendo downtime.",
      results: [
        { metric: "60%", description: "Reducción en tiempo de inactividad" },
        { metric: "45%", description: "Ahorro en costos de mantenimiento" },
        { metric: "35%", description: "Aumento en vida útil de equipos" },
        { metric: "80%", description: "Mejora en planificación de producción" }
      ],
      testimonial: "El mantenimiento predictivo cambió nuestro juego. Ahora anticipamos problemas en lugar de reaccionar a ellos.",
      testimonialAuthor: "Ing. Carlos Ruiz, Gerente de Planta",
      implementation: "16 semanas",
      roi: "ROI del 425% en el primer año"
    }
  ];

  const industries = [
    { name: "Todos", icon: null },
    { name: "Logística", icon: <Truck className="w-5 h-5" /> },
    { name: "Retail", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Manufactura", icon: <Factory className="w-5 h-5" /> },
    { name: "Fintech", icon: <DollarSign className="w-5 h-5" /> },
    { name: "Salud", icon: <Users className="w-5 h-5" /> }
  ];

  const filteredStories = selectedIndustry === "Todos"
    ? successStories
    : successStories.filter(story => story.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Casos de Éxito
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Resultados reales de empresas que transformaron sus operaciones con nuestras soluciones de IA
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-electric">45+</div>
                <div className="text-sm text-muted-foreground">Proyectos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric">$2.5M</div>
                <div className="text-sm text-muted-foreground">Ahorros Generados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric">95%</div>
                <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric">340%</div>
                <div className="text-sm text-muted-foreground">ROI Promedio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Filter */}
      <section className="py-12 bg-background-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Filtrar por Industria</h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {industries.map((industry, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    selectedIndustry === industry.name
                      ? "bg-electric text-electric-foreground border-electric shadow-md"
                      : "border-border text-muted-foreground hover:bg-muted"
                  )}
                  onClick={() => setSelectedIndustry(industry.name)}
                >
                  <span className="flex items-center gap-2">
                    {industry.icon}
                    {industry.name}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {filteredStories.length > 0 ? (
              filteredStories.map((story, index) => (
                <div key={index} className="max-w-6xl mx-auto">
                  <Card className="border-0 shadow-elegant overflow-hidden">
                    <CardHeader className="bg-gradient-subtle pb-8">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center">
                            {story.icon}
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold text-primary">{story.company}</CardTitle>
                            <div className="flex gap-2 mt-2">
                              <Badge variant="outline">{story.industry}</Badge>
                              <Badge variant="outline">{story.size}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Implementación</div>
                          <div className="font-semibold text-primary">{story.implementation}</div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Challenge & Solution */}
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                              <span className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center mr-2">
                                <span className="text-destructive text-xs">!</span>
                              </span>
                              El Desafío
                            </h3>
                            <h4 className="font-semibold mb-2">{story.challenge}</h4>
                            <p className="text-muted-foreground leading-relaxed">{story.description}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                              <span className="w-6 h-6 bg-electric/10 rounded-full flex items-center justify-center mr-2">
                                <span className="text-electric text-xs">✓</span>
                              </span>
                              La Solución Nexus IA
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">{story.solution}</p>
                          </div>
                        </div>

                        {/* Results */}
                        <div>
                          <h3 className="text-lg font-semibold text-primary mb-6 flex items-center">
                            <TrendingUp className="w-5 h-5 text-electric mr-2" />
                            Los Resultados
                          </h3>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {story.results.map((result, idx) => (
                              <div key={idx} className="text-center p-4 bg-electric/5 rounded-lg">
                                <div className="text-2xl font-bold text-electric">{result.metric}</div>
                                <div className="text-sm text-muted-foreground">{result.description}</div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="bg-primary/5 p-4 rounded-lg">
                            <div className="text-sm font-semibold text-primary mb-2">{story.roi}</div>
                            <blockquote className="text-muted-foreground italic">
                              "{story.testimonial}"
                            </blockquote>
                            <cite className="text-sm text-electric block mt-2 not-italic">
                              — {story.testimonialAuthor}
                            </cite>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground text-lg">
                No se encontraron casos de éxito para la industria seleccionada.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-electric" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tu Empresa Será la Siguiente?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a las empresas que ya están transformando sus operaciones con IA. 
              Agenda una consultoría gratuita y descubre tu potencial de crecimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="electric" size="xl" className="group">
                Agenda tu Consultoría Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-electric text-electric hover:bg-electric hover:text-electric-foreground">
                Descargar Casos de Estudio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasosExito;