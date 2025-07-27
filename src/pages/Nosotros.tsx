import { ArrowRight, Target, Eye, Users, Lightbulb, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team-work.jpg";

const Nosotros = () => {
  const team = [
    {
      name: "Dr. María González",
      role: "CEO & Fundadora",
      expertise: "PhD en Computer Science, 15+ años en IA",
      description: "Experta en machine learning e implementación de IA empresarial."
    },
    {
      name: "Ing. Carlos Rodríguez",
      role: "CTO & Co-fundador",
      expertise: "Arquitecto de Datos, ex-Google",
      description: "Especialista en infraestructuras de datos masivos y cloud computing."
    },
    {
      name: "Dra. Ana Martínez",
      role: "Head of Data Science",
      expertise: "PhD en Estadística, ex-McKinsey",
      description: "Líder en modelos predictivos y analítica avanzada para negocios."
    },
    {
      name: "Ing. Roberto Sánchez",
      role: "Director de Implementación",
      expertise: "15+ años en transformación digital",
      description: "Experto en gestión de cambio y adopción tecnológica empresarial."
    }
  ];

  const methodology = [
    {
      phase: "01",
      title: "Diagnóstico Integral",
      description: "Evaluamos tu infraestructura actual, procesos y objetivos para identificar oportunidades de mejora.",
      duration: "1-2 semanas"
    },
    {
      phase: "02", 
      title: "Estrategia Personalizada",
      description: "Diseñamos una hoja de ruta específica con tecnologías y metodologías adaptadas a tu industria.",
      duration: "2-3 semanas"
    },
    {
      phase: "03",
      title: "Implementación Gradual",
      description: "Ejecutamos por fases para minimizar disrupciones y garantizar adopción exitosa.",
      duration: "2-6 meses"
    },
    {
      phase: "04",
      title: "Optimización Continua", 
      description: "Monitoreamos resultados y refinamos sistemas para maximizar ROI a largo plazo.",
      duration: "Ongoing"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-electric" />,
      title: "Resultados Medibles",
      description: "Cada proyecto debe generar valor cuantificable para nuestros clientes."
    },
    {
      icon: <Shield className="w-8 h-8 text-electric" />,
      title: "Confianza Total",
      description: "Transparencia absoluta en procesos, costos y plazos de entrega."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-electric" />,
      title: "Innovación Práctica",
      description: "Tecnología de vanguardia aplicada a problemas reales de negocio."
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
              Nuestro Proyecto
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Democratizamos el poder de la inteligencia artificial para empresas de todos los tamaños, 
              convirtiendo datos complejos en decisiones estratégicas simples y accionables.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-electric mr-3" />
                  <h2 className="text-3xl font-bold text-primary">Nuestra Misión</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Empoderar a empresas de todos los tamaños para que aprovechen el verdadero potencial 
                  de sus datos, transformando información en ventajas competitivas medibles y sostenibles 
                  a través de soluciones de IA accesibles y prácticas.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-electric mr-3" />
                  <h2 className="text-3xl font-bold text-primary">Nuestra Visión</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser la consultora líder en Latinoamérica que hace que la inteligencia artificial 
                  sea tan natural y accesible para las empresas como usar una hoja de cálculo, 
                  democratizando el futuro de los negocios basados en datos.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src={teamImage} 
                alt="Equipo Nexus IA trabajando" 
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertos con trayectoria comprobada en las mejores empresas tecnológicas del mundo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 text-center">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-bold text-primary">{member.name}</CardTitle>
                  <CardDescription className="text-electric font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-muted-foreground mb-2">{member.expertise}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nuestra Metodología
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un enfoque probado que garantiza resultados exitosos en cada proyecto
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {methodology.map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 bg-electric rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-electric-foreground">{step.phase}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                    <span className="text-sm font-medium text-electric bg-electric/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-muted-foreground">
              Los principios que guían cada decisión y proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-electric/10 rounded-2xl flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-electric" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Conocernos Mejor?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agenda una consultoría gratuita y descubre cómo nuestro equipo puede 
              transformar los desafíos específicos de tu empresa en oportunidades de crecimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="electric" size="xl" className="group">
                Agenda tu Consultoría Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-electric text-electric hover:bg-electric hover:text-electric-foreground">
                Ver Nuestros Casos de Éxito
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;