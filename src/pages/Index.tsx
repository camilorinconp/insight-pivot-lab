import { ArrowRight, Brain, Database, TrendingUp, CheckCircle, Users, Target, Lightbulb, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { NeuralNetwork } from "@/components/ui/loading-ai";
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-purple-900/60"></div>
        </div>
        
        {/* Floating Particles */}
        <FloatingParticles className="opacity-30" particleCount={30} speed={0.5} />
        
        {/* Neural Network Background */}
        <NeuralNetwork className="absolute inset-0 opacity-20" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-primary-foreground">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center bg-electric/20 backdrop-blur-sm rounded-full px-6 py-2 border border-electric/30">
                <Sparkles className="w-4 h-4 text-electric mr-2" />
                <span className="text-sm font-medium text-electric">Transformación Digital con IA</span>
              </div>
            </div>
            
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-up bg-gradient-to-r from-white via-electric to-cyan-300 bg-clip-text text-transparent leading-tight">
              De los Datos a las Decisiones
            </h1>
            
            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl mb-4 opacity-90 animate-fade-up font-light tracking-wide px-4">
              La Revolución de la <span className="text-electric font-semibold">Inteligencia Artificial</span> que tu Empresa Necesita
            </p>
            
            <p className="text-base xs:text-lg md:text-xl mb-10 opacity-80 max-w-4xl mx-auto animate-fade-up leading-relaxed px-4">
              Transformamos datos complejos en insights accionables mediante IA de vanguardia. 
              Descubre cómo empresas líderes están revolucionando sus industrias con nuestra tecnología.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-4 xs:gap-6 justify-center animate-fade-up px-4">
              <GradientButton variant="ai" size="xl" glowEffect className="group w-full xs:w-auto">
                <Zap className="w-5 h-5 mr-2" />
                Consultoría Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </GradientButton>
              
              <GradientButton variant="ghost" size="xl" className="group w-full xs:w-auto">
                <Brain className="w-5 h-5 mr-2" />
                Ver Demo en Vivo
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </GradientButton>
            </div>
            
            {/* Stats Preview - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-4 xs:gap-8 mt-12 max-w-2xl mx-auto px-4">
              <div className="text-center">
                <div className="text-2xl xs:text-3xl md:text-4xl font-bold text-electric mb-2">95%</div>
                <div className="text-xs xs:text-sm text-muted-foreground">Precisión en Predicciones</div>
              </div>
              <div className="text-center">
                <div className="text-2xl xs:text-3xl md:text-4xl font-bold text-electric mb-2">50%</div>
                <div className="text-xs xs:text-sm text-muted-foreground">Reducción de Costos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl xs:text-3xl md:text-4xl font-bold text-electric mb-2">3x</div>
                <div className="text-xs xs:text-sm text-muted-foreground">ROI Promedio</div>
              </div>
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
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-accent/50 to-background"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-electric/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Brain className="w-4 h-4 text-electric mr-2" />
              <span className="text-sm font-medium text-electric">Nuestros Pilares</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-primary via-electric to-primary bg-clip-text text-transparent">
              3 Pilares de Transformación
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Soluciones integrales de IA que convierten la complejidad tecnológica en ventaja competitiva sostenible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group relative border-0 bg-card/50 backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Neural Network Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" className="text-electric" strokeWidth="1"/>
                    <circle cx="20" cy="20" r="3" fill="currentColor" className="text-electric"/>
                    <circle cx="80" cy="20" r="3" fill="currentColor" className="text-electric"/>
                    <circle cx="80" cy="80" r="3" fill="currentColor" className="text-electric"/>
                    <circle cx="20" cy="80" r="3" fill="currentColor" className="text-electric"/>
                  </svg>
                </div>
                
                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-electric/20 to-electric/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-electric transform group-hover:rotate-12 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary mb-3 group-hover:text-electric transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <CardDescription className="text-center text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                  
                  {/* Hover CTA */}
                  <div className="mt-6 text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Button variant="ghost" size="sm" className="text-electric border-electric/50 hover:bg-electric hover:text-white">
                      Conocer Más
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-electric to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <GradientButton variant="neural" size="lg" className="group">
              <Database className="w-5 h-5 mr-2" />
              Descubre Todas las Soluciones
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </GradientButton>
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
