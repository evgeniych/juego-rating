"use client";

import { ArrowRight, Star, Gift, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import Link from "next/link";

interface CTABannerProps {
  variant?: "default" | "compact";
}

export function CTABanner({ variant = "default" }: CTABannerProps) {
  if (variant === "compact") {
    return (
      <AnimatedSection animation="fade-up">
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 rounded-2xl p-6 md:p-8 border border-primary/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-1">Encuentra tu casino ideal hoy</h3>
              <p className="text-muted-foreground">Compara bonos y comienza a jugar de forma segura</p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap" asChild>
              <Link href="/#ranking">
                Ver Ranking
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-emerald-600 p-8 md:p-12 lg:p-16">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
                    Comienza a Jugar en los Mejores Casinos
                  </h2>
                  <p className="text-lg text-white/80 max-w-2xl mb-6">
                    Aprovecha los mejores bonos de bienvenida y disfruta de una experiencia de juego segura y
                    emocionante en casinos 100% legales.
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                    <div className="flex items-center gap-2 text-white/90">
                      <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                      <span>Casinos verificados</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <Gift className="w-5 h-5 text-yellow-300" />
                      <span>Bonos exclusivos</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <Shield className="w-5 h-5 text-yellow-300" />
                      <span>100% seguros</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 font-semibold text-base px-8"
                      asChild
                    >
                      <Link href="/#ranking">
                        Ver Ranking de Casinos
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/50 text-white hover:bg-white/10 font-semibold text-base px-8 bg-transparent"
                      asChild
                    >
                      <Link href="/bonos">Ver Todos los Bonos</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
