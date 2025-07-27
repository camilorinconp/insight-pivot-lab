import { ArrowRight, Brain, Database, TrendingUp, CheckCircle, Zap, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Soluciones = () => {
  const services = [
    {
      icon: <Brain className="w-16 h-16 text-electric" />,
      title: "Inteligencia Artificial Aplicada",
      description: "Transformamos procesos complejos en soluciones inteligentes y automatizadas",
      problems: [
        "Procesos manuales lentos y propensos a errores",
        "Dificultad para personalizar experiencias del cliente",
        "Toma de decisiones basada en intuición, no en datos"
      ],
      benefits: [
        "Automatización de procesos con 95% de precisión",
        "Personalización en tiempo real para cada cliente",
        "Predicciones que optimizan recursos y reducen costos"
      ],
      process: [
        "Diagnóstico de procesos actuales",
        "Diseño de solución IA personalizada",
        "Implementación gradual y entrenamiento",
        "Monitoreo y optimización continua"
      ]
    },
    {
      icon: <Database className="w-16 h-16 text-electric" />,
      title: "Gestión y Estrategia de Datos",
      description: "Convertimos datos dispersos en información estratégica centralizada y accesible",
      problems: [
        "Datos dispersos en múltiples sistemas",
        "Información no confiable o desactualizada",
        "Dificultad para acceder a insights clave"
      ],
      benefits: [
        "Centralización completa de todas las fuentes de datos",
        "Dashboards en tiempo real para decisiones rápidas",
        "Calidad de datos garantizada al 99.9%"
      ],
      process: [
        "Auditoría completa de fuentes de datos",
        "Arquitectura de datos escalable",
        "Implementación de pipelines automatizados",
        "Capacitación del equipo en el nuevo sistema"
      ]
    },
    {
      icon: <TrendingUp className="w-16 h-16 text-electric" />,
      title: "Data Science y Analítica Avanzada",
      description: "Predicciones precisas y insights accionables para impulsar el crecimiento",
      problems: [
        "Decisiones reactivas en lugar de proactivas",
        "Dificultad para identificar oportunidades de crecimiento",
        "Falta de métricas predictivas confiables"
      ],
      benefits: [
        "Predicciones con 90%+ de precisión",
        "Identificación automática de oportunidades",
        "ROI medible en cada decisión estratégica"
      ],
      process: [
        "Análisis de objetivos y KPIs",
        "Desarrollo de modelos predictivos",
        "Validación y refinamiento continuo",
        "Integración con sistemas existentes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Soluciones que Transforman tu Negocio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Descubre cómo nuestros 3 pilares tecnológicos convierten desafíos complejos 
              en ventajas competitivas medibles
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-electric">95%</div>
                <div className="text-sm text-muted-foreground">Precisión IA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-electric">30%</div>
                <div className="text-sm text-muted-foreground">Reducción Costos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-electric">60 días</div>
                <div className="text-sm text-muted-foreground">Implementación</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section key={index} className={`py-20 ${index % 2 === 1 ? 'bg-background-accent' : ''}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-electric/10 rounded-3xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {service.title}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Problems */}
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Target className="w-5 h-5 text-destructive mr-2" />
                      Problemas que Resolvemos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.problems.map((problem, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <CheckCircle className="w-5 h-5 text-electric mr-2" />
                      Beneficios Clave
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-electric mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-foreground font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Process */}
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Zap className="w-5 h-5 text-primary mr-2" />
                      Nuestro Proceso
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.process.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground">
            <BarChart3 className="w-16 h-16 mx-auto mb-6 text-electric" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Cuál es el Siguiente Paso?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agenda una consultoría gratuita y descubre exactamente qué solución 
              se adapta mejor a los desafíos específicos de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="electric" size="xl" className="group">
                Agenda tu Consultoría Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-electric text-electric hover:bg-electric hover:text-electric-foreground">
                Ver Casos de Éxito
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Soluciones;