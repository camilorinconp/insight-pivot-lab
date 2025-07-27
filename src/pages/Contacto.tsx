import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacto = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-electric" />,
      title: "Email",
      details: "contacto@nexusia.com",
      description: "Respuesta en menos de 24 horas"
    },
    {
      icon: <Phone className="w-6 h-6 text-electric" />,
      title: "Teléfono",
      details: "+52 55 1234 5678",
      description: "Lunes a Viernes, 9:00 AM - 6:00 PM"
    },
    {
      icon: <MapPin className="w-6 h-6 text-electric" />,
      title: "Oficina",
      details: "Ciudad de México, México",
      description: "Reuniones presenciales disponibles"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-electric" />,
      title: "WhatsApp Business",
      details: "+52 55 8765 4321",
      description: "Chat directo para consultas rápidas"
    }
  ];

  const faqItems = [
    {
      question: "¿Cuánto tiempo toma implementar una solución de IA?",
      answer: "Depende de la complejidad del proyecto. Proyectos simples pueden tomar 4-8 semanas, mientras que transformaciones completas pueden requerir 3-6 meses."
    },
    {
      question: "¿Trabajamos con empresas pequeñas?",
      answer: "Absolutamente. Tenemos soluciones escalables para empresas de todos los tamaños, desde startups hasta corporaciones multinacionales."
    },
    {
      question: "¿Qué incluye la consultoría gratuita?",
      answer: "Evaluación de tu situación actual, identificación de oportunidades, recomendaciones específicas y un roadmap preliminar de implementación."
    },
    {
      question: "¿Ofrecen soporte post-implementación?",
      answer: "Sí, incluimos entrenamiento del equipo, documentación completa y soporte técnico continuo por 12 meses."
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
              Hablemos de tu Proyecto
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Agenda una consultoría gratuita y descubre cómo podemos transformar 
              los desafíos específicos de tu empresa en oportunidades de crecimiento.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-electric">24h</div>
                <div className="text-sm text-muted-foreground">Tiempo de respuesta</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-electric">100%</div>
                <div className="text-sm text-muted-foreground">Consultoría gratuita</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-electric">45+</div>
                <div className="text-sm text-muted-foreground">Empresas transformadas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Múltiples Formas de Contactarnos
            </h2>
            <p className="text-xl text-muted-foreground">
              Elige la opción que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 mx-auto mb-4 bg-electric/10 rounded-xl flex items-center justify-center">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                  <CardDescription className="font-semibold text-primary">
                    {info.details}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button variant="electric" size="lg" className="group">
              <Calendar className="mr-2 w-5 h-5" />
              Agenda Consultoría Gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="mr-2 w-5 h-5" />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Cuéntanos sobre tu Proyecto
              </h2>
              <p className="text-xl text-muted-foreground">
                Completa el formulario y te contactaremos en menos de 24 horas
              </p>
            </div>

            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo *</Label>
                      <Input id="name" placeholder="Tu nombre completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Corporativo *</Label>
                      <Input id="email" type="email" placeholder="tu.email@empresa.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa *</Label>
                      <Input id="company" placeholder="Nombre de tu empresa" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Cargo *</Label>
                      <Input id="position" placeholder="Tu posición en la empresa" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" placeholder="+52 55 1234 5678" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industria</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu industria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="logistica">Logística</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufactura">Manufactura</SelectItem>
                          <SelectItem value="fintech">Fintech</SelectItem>
                          <SelectItem value="salud">Salud</SelectItem>
                          <SelectItem value="educacion">Educación</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-size">Tamaño de Empresa</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Número de empleados" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 empleados</SelectItem>
                          <SelectItem value="11-50">11-50 empleados</SelectItem>
                          <SelectItem value="51-200">51-200 empleados</SelectItem>
                          <SelectItem value="201-500">201-500 empleados</SelectItem>
                          <SelectItem value="500+">500+ empleados</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">¿Qué solución te interesa más?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu área de interés" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ia">Inteligencia Artificial Aplicada</SelectItem>
                        <SelectItem value="datos">Gestión y Estrategia de Datos</SelectItem>
                        <SelectItem value="analytics">Data Science y Analítica Avanzada</SelectItem>
                        <SelectItem value="integral">Solución Integral</SelectItem>
                        <SelectItem value="consultoria">Solo Consultoría</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenge">Describe tu Desafío Principal *</Label>
                    <Textarea 
                      id="challenge" 
                      placeholder="Cuéntanos qué problema específico necesitas resolver o qué objetivo quieres alcanzar con IA/datos..." 
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Presupuesto Estimado (Opcional)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Rango de inversión aproximado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10k-25k">$10,000 - $25,000 USD</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000 USD</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000 USD</SelectItem>
                        <SelectItem value="100k+">$100,000+ USD</SelectItem>
                        <SelectItem value="discutir">Prefiero discutirlo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">¿Cuándo te gustaría comenzar?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Timeline preferido" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inmediato">Inmediatamente</SelectItem>
                        <SelectItem value="1-3-meses">En 1-3 meses</SelectItem>
                        <SelectItem value="3-6-meses">En 3-6 meses</SelectItem>
                        <SelectItem value="evaluando">Solo estoy evaluando</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" variant="electric" size="lg" className="w-full group">
                      Enviar Solicitud de Consultoría
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    Al enviar este formulario, aceptas que nos contactemos contigo para 
                    programar tu consultoría gratuita. No compartimos tu información.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-muted-foreground">
                Respuestas a las dudas más comunes sobre nuestros servicios
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <Card key={index} className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">¿No encuentras la respuesta que buscas?</p>
              <Button variant="outline" size="lg">
                <MessageSquare className="mr-2 w-5 h-5" />
                Contacta a Nuestro Equipo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground">
            <Clock className="w-16 h-16 mx-auto mb-6 text-electric" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para el Siguiente Paso?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              No esperes más. Cada día que pasa sin aprovechar tus datos es una oportunidad perdida. 
              Agenda tu consultoría gratuita hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="electric" size="xl" className="group">
                <Calendar className="mr-2 w-5 h-5" />
                Agenda Ahora - 100% Gratis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-electric text-electric hover:bg-electric hover:text-electric-foreground">
                <Phone className="mr-2 w-5 h-5" />
                Llamar Directamente
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;