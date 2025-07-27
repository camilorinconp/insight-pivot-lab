import { ArrowRight, Calendar, BookOpen, Video, Download, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Recursos = () => {
  const upcomingEvents = [
    {
      title: "Webinar: IA para PYMEs - Desmitificando la Inteligencia Artificial",
      description: "Descubre cómo las pequeñas y medianas empresas pueden implementar IA sin grandes inversiones.",
      date: "15 de Febrero, 2024",
      time: "10:00 AM - 11:30 AM",
      type: "Webinar Gratuito",
      spots: "45 cupos disponibles",
      level: "Principiante"
    },
    {
      title: "Taller: Preparando tu Empresa para la Cultura del Dato",
      description: "Workshop práctico sobre cómo crear una organización data-driven desde cero.",
      date: "22 de Febrero, 2024", 
      time: "2:00 PM - 5:00 PM",
      type: "Taller Presencial",
      spots: "20 cupos disponibles",
      level: "Intermedio"
    },
    {
      title: "Masterclass: El Futuro de la Analítica Predictiva",
      description: "Sesión avanzada sobre las últimas tendencias en machine learning y predicciones empresariales.",
      date: "8 de Marzo, 2024",
      time: "9:00 AM - 12:00 PM", 
      type: "Masterclass",
      spots: "15 cupos disponibles",
      level: "Avanzado"
    }
  ];

  const blogPosts = [
    {
      title: "5 Mitos sobre la IA en las PYMEs que Debes Conocer",
      summary: "Desmontamos los conceptos erróneos más comunes que impiden a las empresas pequeñas aprovechar la inteligencia artificial.",
      readTime: "8 min",
      category: "IA Empresarial",
      author: "Dr. María González",
      date: "10 de Enero, 2024",
      featured: true
    },
    {
      title: "Cómo Preparar tu Empresa para la Cultura del Dato",
      summary: "Una guía paso a paso para transformar tu organización en una empresa verdaderamente data-driven.",
      readTime: "12 min",
      category: "Transformación Digital",
      author: "Ing. Carlos Rodríguez",
      date: "5 de Enero, 2024",
      featured: true
    },
    {
      title: "El Futuro de la Analítica Predictiva en 2024",
      summary: "Tendencias y tecnologías emergentes que están redefiniendo cómo las empresas toman decisiones estratégicas.",
      readTime: "10 min",
      category: "Data Science",
      author: "Dra. Ana Martínez",
      date: "28 de Diciembre, 2023",
      featured: false
    },
    {
      title: "ROI Real: Casos de Implementación de IA Exitosos",
      summary: "Análisis detallado de proyectos reales y cómo midieron el retorno de inversión en inteligencia artificial.",
      readTime: "15 min",
      category: "Casos de Éxito",
      author: "Ing. Roberto Sánchez",
      date: "20 de Diciembre, 2023",
      featured: false
    },
    {
      title: "Errores Comunes al Implementar Proyectos de Data Science",
      summary: "Lecciones aprendidas de proyectos fallidos y cómo evitar los errores más costosos en data science.",
      readTime: "9 min",
      category: "Mejores Prácticas",
      author: "Dr. María González",
      date: "15 de Diciembre, 2023",
      featured: false
    },
    {
      title: "Democratizando la IA: Herramientas No-Code para Empresas",
      summary: "Plataformas y tools que permiten implementar soluciones de IA sin necesidad de conocimientos técnicos avanzados.",
      readTime: "11 min",
      category: "Herramientas",
      author: "Ing. Carlos Rodríguez",
      date: "8 de Diciembre, 2023",
      featured: false
    }
  ];

  const resources = [
    {
      title: "Guía Completa: Implementación de IA en Empresas",
      description: "Manual paso a paso con frameworks, checklists y plantillas para proyectos de IA exitosos.",
      type: "PDF Guía",
      pages: "45 páginas",
      downloads: "2,340"
    },
    {
      title: "Template: ROI Calculator para Proyectos de Data Science",
      description: "Hoja de cálculo pre-configurada para evaluar el retorno de inversión en proyectos de datos.",
      type: "Excel Template",
      pages: "5 hojas",
      downloads: "1,890"
    },
    {
      title: "Checklist: Auditoría de Madurez Digital",
      description: "Evaluación completa para determinar el nivel de preparación digital de tu empresa.",
      type: "PDF Checklist",
      pages: "12 páginas",
      downloads: "3,120"
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
              Eventos y Recursos
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Mantente actualizado con las últimas tendencias en IA y Data Science. 
              Accede a recursos exclusivos y únete a nuestros eventos educativos.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Próximos Eventos
            </h2>
            <p className="text-xl text-muted-foreground">
              Webinars, talleres y masterclasses para impulsar tu conocimiento
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-electric text-electric">
                      {event.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {event.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-electric" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-electric" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-electric" />
                      {event.spots}
                    </div>
                  </div>
                  <Button variant="electric" className="w-full">
                    Registrarse Gratis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-background-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Blog & Artículos
            </h2>
            <p className="text-xl text-muted-foreground">
              Insights, tendencias y conocimiento práctico del mundo de la IA
            </p>
          </div>

          {/* Featured Posts */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center">
              <Star className="w-6 h-6 text-electric mr-2" />
              Artículos Destacados
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-electric text-electric">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {post.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>Por {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      Leer Artículo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Regular Posts */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Más Artículos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {post.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Ver Todos los Artículos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Recursos Gratuitos
            </h2>
            <p className="text-xl text-muted-foreground">
              Herramientas y guías descargables para acelerar tu transformación digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-electric/10 rounded-2xl flex items-center justify-center">
                    <Download className="w-8 h-8 text-electric" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {resource.pages}
                    </span>
                    <span>
                      {resource.downloads} descargas
                    </span>
                  </div>
                  <Button variant="electric" className="w-full">
                    Descargar Gratis
                    <Download className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-electric" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mantente Actualizado
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Suscríbete a nuestro newsletter y recibe contenido exclusivo, invitaciones 
              a eventos y las últimas tendencias en IA directamente en tu inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Tu email corporativo" 
                className="flex-1 px-4 py-3 rounded-lg border border-electric/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-electric"
              />
              <Button variant="electric" size="lg">
                Suscribirme
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/60 mt-4">
              Sin spam. Cancela en cualquier momento.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recursos;