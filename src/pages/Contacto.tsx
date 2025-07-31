import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, Calendar, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre es requerido." }),
  email: z.string().email({ message: "Email inválido." }),
  company: z.string().min(2, { message: "La empresa es requerida." }),
  position: z.string().min(2, { message: "El cargo es requerido." }),
  phone: z.string().optional(),
  industry: z.string().optional(),
  companySize: z.string().optional(),
  interest: z.string().optional(),
  challenge: z.string().min(10, { message: "Describe tu desafío en al menos 10 caracteres." }),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Contacto = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      position: "",
      phone: "",
      industry: "",
      companySize: "",
      interest: "",
      challenge: "",
      budget: "",
      timeline: "",
    },
  });

  const { register, handleSubmit, formState: { errors } } = form;

  const handleNext = () => {
    setCurrentStep(1);
  };

  const handlePrev = () => {
    setCurrentStep(0);
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Aquí implementarías la lógica de envío
  };

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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {currentStep === 0 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre Completo *</Label>
                          <Input id="name" {...register("name")} placeholder="Tu nombre completo" />
                          {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Corporativo *</Label>
                          <Input id="email" type="email" {...register("email")} placeholder="tu.email@empresa.com" />
                          {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Empresa *</Label>
                          <Input id="company" {...register("company")} placeholder="Nombre de tu empresa" />
                          {errors.company && <p className="text-destructive text-sm">{errors.company.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="position">Cargo *</Label>
                          <Input id="position" {...register("position")} placeholder="Tu posición en la empresa" />
                          {errors.position && <p className="text-destructive text-sm">{errors.position.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono</Label>
                          <Input id="phone" {...register("phone")} placeholder="+52 55 1234 5678" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industria</Label>
                          <Select onValueChange={(value) => form.setValue("industry", value)} value={form.watch("industry")}>
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
                          <Select onValueChange={(value) => form.setValue("companySize", value)} value={form.watch("companySize")}>
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
                      <div className="pt-4 flex justify-end">
                        <Button type="button" onClick={handleNext} variant="electric" className="group">
                          Siguiente
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="interest">¿Qué solución te interesa más?</Label>
                        <Select onValueChange={(value) => form.setValue("interest", value)} value={form.watch("interest")}>
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
                          {...register("challenge")} 
                          placeholder="Cuéntanos qué problema específico necesitas resolver o qué objetivo quieres alcanzar con IA/datos..." 
                          rows={4}
                        />
                        {errors.challenge && <p className="text-destructive text-sm">{errors.challenge.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Presupuesto Estimado (Opcional)</Label>
                        <Select onValueChange={(value) => form.setValue("budget", value)} value={form.watch("budget")}>
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
                        <Select onValueChange={(value) => form.setValue("timeline", value)} value={form.watch("timeline")}>
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

                      <div className="pt-4 flex justify-between">
                        <Button type="button" onClick={handlePrev} variant="outline" className="group">
                          <ChevronLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                          Anterior
                        </Button>
                        <Button type="submit" variant="electric" className="group">
                          Enviar Solicitud de Consultoría
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  )}
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