import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, DollarSign, TrendingUp } from "lucide-react";

const AICalculator = () => {
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [challenge, setChallenge] = useState("");
  const [roi, setRoi] = useState<number | null>(null);

  const calculateROI = () => {
    // Simple placeholder logic for demonstration
    let calculatedRoi = 0;
    if (industry === "logistica") calculatedRoi += 15;
    if (industry === "retail") calculatedRoi += 20;
    if (industry === "manufactura") calculatedRoi += 25;

    if (companySize === "pequena") calculatedRoi += 5;
    if (companySize === "mediana") calculatedRoi += 10;
    if (companySize === "grande") calculatedRoi += 15;

    if (challenge === "optimizacion") calculatedRoi += 10;
    if (challenge === "personalizacion") calculatedRoi += 12;
    if (challenge === "mantenimiento") calculatedRoi += 15;

    setRoi(calculatedRoi > 0 ? calculatedRoi : 5); // Ensure a minimum ROI
  };

  return (
    <section className="py-16 md:py-24 bg-background-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Brain className="w-16 h-16 text-electric mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Calcula el ROI de tu Transformación con IA
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Descubre el potencial de ahorro y crecimiento que la Inteligencia Artificial puede traer a tu empresa.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-elegant border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-primary">Estima tu Impacto</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <Label htmlFor="industry">Tu Industria</Label>
                <Select onValueChange={setIndustry} value={industry}>
                  <SelectTrigger id="industry">
                    <SelectValue placeholder="Selecciona tu industria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="logistica">Logística</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="manufactura">Manufactura</SelectItem>
                    <SelectItem value="fintech">Fintech</SelectItem>
                    <SelectItem value="salud">Salud</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-size">Tamaño de tu Empresa</Label>
                <Select onValueChange={setCompanySize} value={companySize}>
                  <SelectTrigger id="company-size">
                    <SelectValue placeholder="Número de empleados" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pequena">1-50 empleados</SelectItem>
                    <SelectItem value="mediana">51-250 empleados</SelectItem>
                    <SelectItem value="grande">251+ empleados</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="challenge">Principal Desafío de Negocio</Label>
                <Select onValueChange={setChallenge} value={challenge}>
                  <SelectTrigger id="challenge">
                    <SelectValue placeholder="¿Qué problema buscas resolver?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="optimizacion">Optimización de Procesos</SelectItem>
                    <SelectItem value="personalizacion">Personalización de Experiencia del Cliente</SelectItem>
                    <SelectItem value="mantenimiento">Mantenimiento Predictivo</SelectItem>
                    <SelectItem value="analisis">Análisis de Datos Avanzado</SelectItem>
                    <SelectItem value="automatizacion">Automatización de Tareas</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={calculateROI}
              className="w-full group text-lg py-6"
              variant="electric"
              disabled={!industry || !companySize || !challenge}
            >
              Calcular ROI Potencial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {roi !== null && (
              <div className="mt-10 text-center bg-electric/10 p-6 rounded-lg animate-fade-in">
                <div className="flex items-center justify-center text-electric mb-4">
                  <TrendingUp className="w-10 h-10 mr-3" />
                  <span className="text-4xl font-bold">+{roi}%</span>
                </div>
                <p className="text-primary text-xl font-semibold mb-2">
                  ROI Potencial Estimado en el Primer Año
                </p>
                <p className="text-muted-foreground text-sm">
                  Esta es una estimación. Agenda una consultoría gratuita para un análisis personalizado y preciso.
                </p>
                <Button variant="outline" className="mt-6 border-electric text-electric hover:bg-electric hover:text-electric-foreground group">
                  Agenda tu Consultoría
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AICalculator;