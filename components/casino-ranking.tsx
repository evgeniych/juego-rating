"use client"

import { Trophy, TrendingUp } from "lucide-react"
import { CasinoCard } from "./casino-card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { getVisibleCasinos } from "@/lib/casinos-data"

export function CasinoRanking() {
  const casinos = getVisibleCasinos(); // Declare the casinos variable

  return (
    <section id="ranking" className="py-16 lg:py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 animate-pulse-glow">
              <Trophy className="w-7 h-7 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
              Top 5 Casinos Colombia 2026
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <p className="text-center text-muted-foreground">
              Ranking actualizado - Enero 2026
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Nuestra selección de los mejores casinos online autorizados por Coljuegos, 
            evaluados por bonos, velocidad de pagos, variedad de juegos y experiencia de usuario.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-4">
          {casinos.map((casino, index) => (
            <AnimatedSection key={casino.id} delay={300 + index * 100} direction="left">
              <CasinoCard {...casino} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={800}>
          <div className="mt-12 p-6 rounded-2xl bg-card/50 border border-border text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Nota:</strong> Las posiciones se actualizan mensualmente basándose en bonos, 
              velocidad de pagos, variedad de juegos y opiniones de usuarios verificados.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
