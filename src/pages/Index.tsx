import { ArrowRight, Brain, Database, TrendingUp, CheckCircle, Users, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AICalculator from "@/components/AICalculator";
import heroImage from "@/assets/hero-bg.jpg";
import servicesImage from "@/assets/services-icons.jpg";
import teamImage from "@/assets/team-work.jpg";

const Index = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-electric" />,
      title: "Inteligencia Artificial Aplicada",
      description: "Automatizamos procesos, optimizamos decisiones y personalizamos experiencias del cliente con IA de vanguardia."
    },
    {
      icon: <Database className="w-12 h-12 text-electric" />,
      title: "Gestión y Estrategia de Datos",
      description: "Transformamos datos dispersos en información estratégica centralizada y accesible para toda tu organización."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-electric" />,
      title: "Data Science y Analítica Avanzada",
      description: "Predicciones precisas, insights accionables y métricas que impulsan el crecimiento sostenible de tu negocio."
    }
  ];

  const benefits = [
    { icon: Target, title: "Innovación a tu medida", description: "Soluciones personalizadas que se adaptan a tu industria y objetivos específicos." },
    { icon: CheckCircle, title: "Resultados medibles", description: "ROI comprobable y métricas claras que demuestran el impacto en tu negocio." },
    { icon: Users, title: "Tu socio estratégico", description: "Acompañamiento integral desde la estrategia hasta la implementación y escalamiento." }
  ];

  const successCases = [
    {
      industry: "Logística",
      challenge: "Optimización de rutas y gestión de inventario",
      result: "30% reducción en costos operativos",
      metric: "- 30% costos"
    },
    {
      industry: "Retail",
      challenge: "Personalización de experiencia del cliente",
      result: "45% aumento en conversiones",
      metric: "+ 45% ventas"
    },
    {
      industry: "Manufactura",
      challenge: "Mantenimiento predictivo de equipos",
      result: "60% reducción en tiempo de inactividad",
      metric: "- 60% downtime"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              De los Datos a las Decisiones
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-up">
              La Transformación Digital Impulsada por IA que tu Empresa Necesita
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto animate-fade-up">
              Ayudamos a empresas como la tuya a desbloquear su máximo potencial a través de la ciencia de datos y la inteligencia artificial, sin importar su tamaño.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
              <Button variant="electric" size="xl" className="group">
                Solicita una Consultoría Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-electric text-electric hover:bg-electric hover:text-electric-foreground">
                Conoce Nuestras Soluciones
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-background-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-muted-foreground mb-4">Confían en Nosotros</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="font-semibold text-muted-foreground">TechCorp</span>
              </div>
              <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="font-semibold text-muted-foreground">DataFlow</span>
              </div>
              <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="font-semibold text-muted-foreground">InnovateNow</span>
              </div>
              <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="font-semibold text-muted-foreground">FutureLogic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nuestros 3 Pilares de Transformación
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones integrales que convierten la complejidad tecnológica en ventaja competitiva
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-electric/10 rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Descubre Nuestras Soluciones
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* AI ROI Calculator Section */}
      <AICalculator />

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¿Por qué elegir Nexus IA?
            </h2>
            <p className="text-xl text-muted-foreground">
              Más que tecnología, ofrecemos transformación real
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-electric/10 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-electric" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Cases Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Resultados que Hablan por Sí Solos
            </h2>
            <p className="text-xl text-muted-foreground">
              Casos reales de transformación con impacto medible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successCases.map((case_, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-electric bg-electric/10 px-3 py-1 rounded-full">
                      {case_.industry}
                    </span>
                    <span className="text-2xl font-bold text-primary">{case_.metric}</span>
                  </div>
                  <CardTitle className="text-lg">{case_.challenge}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{case_.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Ver Todos los Casos de Éxito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-electric" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Transformar tu Empresa?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Comienza tu transformación digital hoy. Agenda una consultoría gratuita y descubre el potencial oculto en tus datos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="electric" size="xl" className="group">
                Agenda tu Consultoría Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-electric text-electric hover:bg-electric hover:text-electric-foreground">
                Llamar Ahora: +52 55 1234 5678
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
