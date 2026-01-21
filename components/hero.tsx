"use client"

import Link from "next/link"
import { Shield, Clock, Users, Star, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection, AnimatedCounter } from "@/components/ui/animated-section"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 lg:right-20 animate-float">
        <div className="w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
          <Star className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-32 left-10 lg:left-20 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="w-12 h-12 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center">
          <Shield className="w-6 h-6 text-accent" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">Actualizado Enero 2026</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
              Mejores Casinos Online en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient">
                Colombia 2026
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
              Analizamos bonos, licencias, velocidad de pagos y variedad de juegos de los casinos autorizados por Coljuegos
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href="#ranking">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
                  Ver Ranking Completo
                  <ChevronDown className="w-5 h-5 animate-bounce" />
                </Button>
              </Link>
              <Link href="/bonos">
                <Button size="lg" variant="outline" className="gap-2 text-lg px-8 border-primary/50 text-foreground hover:bg-primary/10 bg-transparent">
                  Mejores Bonos
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 mb-12">
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/20">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">
                    <AnimatedCounter end={17} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Operadores Analizados</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/20">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">Casinos Legales</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/20">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Asistencia Disponible</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Solo operadores legales</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Información verificada</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Guías actualizadas</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  )
}
