"use client";

import { Shield, Lock, Heart, Headphones, UserCheck, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const securityFeatures = [
  {
    icon: Shield,
    title: "Licencias Verificadas",
    description: "Todos los casinos listados tienen licencia vigente de Coljuegos, la autoridad reguladora de Colombia.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Lock,
    title: "Encriptación SSL 256-bit",
    description: "Protección de datos con encriptación de grado bancario para transacciones y datos personales seguros.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Heart,
    title: "Juego Responsable",
    description: "Herramientas de autoexclusión, límites de depósito y recursos de ayuda para jugadores.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Headphones,
    title: "Soporte en Español 24/7",
    description: "Atención al cliente disponible las 24 horas por chat en vivo, email y teléfono con agentes capacitados.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: UserCheck,
    title: "Verificación KYC",
    description: "Procesos de verificación de identidad para prevenir fraude y garantizar retiros seguros.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Reputación Comprobada",
    description: "Miles de jugadores colombianos confían en estos operadores con años de trayectoria comprobada.",
    color: "from-purple-500 to-violet-500",
  },
];

const trustIndicators = [
  "Licencia Coljuegos activa",
  "Auditorías independientes",
  "RNG certificado",
  "Protección de datos GDPR",
];

export function SecuritySection() {
  return (
    <section id="seguridad" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Tu Seguridad Primero
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Factores de Confianza y Seguridad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            La seguridad es nuestra prioridad. Todos los casinos recomendados cumplen con estrictos estándares de
            protección.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{indicator}</span>
            </div>
          ))}
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <StaggerItem key={index}>
              <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
