"use client";

import { AlertTriangle, Phone, Globe, Users, Heart, Shield, Clock, Ban } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const warningSignals = [
  "Gastas más dinero del que puedes permitirte perder",
  "Juegas para recuperar pérdidas anteriores",
  "Descuidas responsabilidades personales o profesionales",
  "Mientes sobre cuánto tiempo o dinero gastas jugando",
  "El juego afecta tus relaciones personales o familiares",
  "Sientes ansiedad o irritabilidad cuando no puedes jugar",
];

const helpResources = [
  {
    icon: Phone,
    name: "Línea Nacional de Ayuda",
    contact: "01 8000 112 123",
    description: "Disponible 24/7, llamada gratuita",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Globe,
    name: "Coljuegos",
    contact: "www.coljuegos.gov.co",
    description: "Autoridad reguladora oficial",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Users,
    name: "Jugadores Anónimos Colombia",
    contact: "Grupos de apoyo presenciales",
    description: "Reuniones y asesoría grupal",
    color: "from-amber-500 to-orange-500",
  },
];

const tools = [
  { name: "Límites de Depósito", icon: Shield },
  { name: "Autoexclusión", icon: Ban },
  { name: "Límites de Tiempo", icon: Clock },
  { name: "Test de Autoevaluación", icon: Heart },
];

export function ResponsibleGaming() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            Juega con Responsabilidad
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Compromiso con el Juego Responsable
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            El juego debe ser una forma de entretenimiento, no una fuente de ingresos. Conoce las herramientas
            disponibles para jugar de forma segura.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {tools.map((tool, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-foreground border-primary/50 px-4 py-2.5 text-sm flex items-center gap-2 hover:bg-primary/10 transition-colors"
            >
              <tool.icon className="w-4 h-4 text-primary" />
              {tool.name}
            </Badge>
          ))}
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection animation="fade-right">
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                  Señales de Advertencia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Si identificas alguna de estas señales, considera buscar ayuda profesional:
                </p>
                <ul className="space-y-3">
                  {warningSignals.map((signal, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm group">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {signal}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-left">
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  Recursos de Ayuda en Colombia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Si necesitas ayuda, estos recursos están disponibles para ti:
                </p>
                <div className="space-y-4">
                  {helpResources.map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${resource.color} shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <resource.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{resource.name}</h4>
                        <p className="text-primary font-medium text-sm">{resource.contact}</p>
                        <p className="text-xs text-muted-foreground mt-1">{resource.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={0.3} className="mt-12">
          <Card className="bg-gradient-to-r from-destructive/10 to-amber-500/10 border-destructive/30">
            <CardContent className="p-6 md:p-8 text-center">
              <p className="text-lg text-foreground font-medium mb-4">
                Recuerda: El juego es solo para mayores de 18 años. Juega con moderación.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent" asChild>
                  <a href="https://www.coljuegos.gov.co" target="_blank" rel="noopener noreferrer">
                    Visitar Coljuegos
                  </a>
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <a href="tel:018000112123">Llamar Línea de Ayuda</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
