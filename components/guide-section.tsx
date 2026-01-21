"use client";

import { Shield, Zap, Gift, Headphones, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import Link from "next/link";

const guides = [
  {
    icon: Shield,
    title: "Verifica la Licencia",
    description:
      "Asegúrate de que el casino tenga licencia de Coljuegos, el ente regulador oficial en Colombia. Esto garantiza operaciones legales y protección al jugador.",
    tips: ["Busca el logo de Coljuegos", "Verifica el número de licencia", "Consulta la lista oficial"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Evalúa los Métodos de Pago",
    description:
      "Un buen casino ofrece múltiples opciones de depósito y retiro adaptadas al mercado colombiano, incluyendo PSE, Nequi y tarjetas locales.",
    tips: ["Tiempos de procesamiento claros", "Sin comisiones ocultas", "Métodos locales disponibles"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Gift,
    title: "Analiza los Bonos",
    description:
      "Lee siempre los términos y condiciones. Busca requisitos de apuesta razonables (30x o menos) y plazos alcanzables para liberar el bono.",
    tips: ["Requisitos de apuesta bajos", "Tiempo suficiente para cumplir", "Juegos elegibles claros"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Headphones,
    title: "Prueba el Soporte",
    description:
      "Un casino confiable ofrece atención al cliente en español 24/7 a través de chat en vivo, email y teléfono con tiempos de respuesta rápidos.",
    tips: ["Soporte en español", "Chat en vivo disponible", "Respuestas rápidas"],
    color: "from-rose-500 to-pink-500",
  },
];

export function GuideSection() {
  return (
    <section id="guia" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Guía del Jugador
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Cómo Elegir un Casino Seguro
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Sigue estos consejos expertos para identificar casinos confiables y disfrutar de una experiencia de juego
            segura en Colombia.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {guides.map((guide, index) => (
            <StaggerItem key={index}>
              <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${guide.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <guide.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{guide.description}</p>
                      <ul className="space-y-2">
                        {guide.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-center gap-2 text-sm text-foreground/80">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection animation="fade-up" delay={0.4} className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            Ver más preguntas frecuentes
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
