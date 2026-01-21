"use client";

import { Gamepad2, Cherry, CircleDot, Spade, Crown, Users, Zap, Gift, Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import Link from "next/link";

const gameCategories = [
  {
    icon: Cherry,
    title: "Tragamonedas (Slots)",
    description:
      "Los juegos más populares de los casinos online. Desde slots clásicos de 3 carretes hasta modernos video slots con múltiples líneas de pago, funciones bonus y jackpots progresivos.",
    features: ["Miles de títulos disponibles", "Jackpots progresivos", "Funciones bonus interactivas", "RTP del 94-98%"],
    popular: ["Book of Dead", "Starburst", "Gonzo's Quest", "Sweet Bonanza"],
    color: "from-rose-500 to-pink-500",
    providers: ["Pragmatic Play", "NetEnt", "Microgaming"],
  },
  {
    icon: CircleDot,
    title: "Ruleta",
    description:
      "El juego de mesa más icónico. Apuesta al número, color o sección donde caerá la bola. Disponible en variantes europea, americana y francesa con diferentes ventajas de la casa.",
    features: ["Ruleta europea (2.7% ventaja)", "Ruleta americana", "Ruleta francesa", "Lightning Roulette"],
    popular: ["European Roulette", "Lightning Roulette", "Immersive Roulette"],
    color: "from-emerald-500 to-teal-500",
    providers: ["Evolution", "Playtech", "Ezugi"],
  },
  {
    icon: Spade,
    title: "Blackjack",
    description:
      "El juego de cartas con la menor ventaja de la casa. Suma 21 o acércate más que el crupier sin pasarte. Con estrategia básica, la ventaja del casino puede ser menor al 0.5%.",
    features: ["Ventaja de casa < 0.5%", "Múltiples variantes", "Estrategia básica aplicable", "Blackjack en vivo"],
    popular: ["Classic Blackjack", "Blackjack VIP", "Infinite Blackjack"],
    color: "from-blue-500 to-indigo-500",
    providers: ["Evolution", "Pragmatic Play Live"],
  },
  {
    icon: Crown,
    title: "Poker",
    description:
      "Desde video poker hasta Texas Hold'em y Caribbean Stud. Combina habilidad y estrategia para vencer a la casa o a otros jugadores en torneos y mesas cash.",
    features: ["Video Poker", "Texas Hold'em", "Caribbean Stud", "Torneos en vivo"],
    popular: ["Casino Hold'em", "Three Card Poker", "Jacks or Better"],
    color: "from-amber-500 to-orange-500",
    providers: ["Evolution", "Playtech"],
  },
  {
    icon: Users,
    title: "Casino en Vivo",
    description:
      "Experimenta la emoción de un casino real desde casa. Crupieres profesionales en tiempo real, múltiples cámaras HD y chat interactivo para una experiencia inmersiva.",
    features: ["Crupieres en tiempo real", "Calidad HD/4K", "Chat interactivo", "Mesas en español"],
    popular: ["Live Blackjack", "Live Roulette", "Live Baccarat", "Game Shows"],
    color: "from-purple-500 to-violet-500",
    providers: ["Evolution", "Pragmatic Play Live", "Ezugi"],
  },
  {
    icon: Gamepad2,
    title: "Otros Juegos",
    description:
      "Descubre baccarat, craps, sic bo, keno, bingo y juegos de azar instantáneos. Una variedad de opciones para todos los gustos y niveles de experiencia.",
    features: ["Baccarat", "Craps", "Keno y Bingo", "Scratch Cards"],
    popular: ["Speed Baccarat", "Mega Ball", "Dream Catcher"],
    color: "from-cyan-500 to-blue-500",
    providers: ["Evolution", "Pragmatic Play"],
  },
];

const tips = [
  {
    icon: Zap,
    title: "Entiende el RTP",
    description: "El Return to Player indica el porcentaje teórico de retorno. Busca juegos con RTP superior al 96%.",
  },
  {
    icon: Gift,
    title: "Aprovecha los Bonos",
    description:
      "Usa bonos de bienvenida para probar juegos. Revisa qué juegos contribuyen al wagering antes de jugar.",
  },
  {
    icon: Star,
    title: "Practica Gratis",
    description:
      "La mayoría de casinos ofrecen modo demo. Practica sin riesgo para entender las mecánicas del juego.",
  },
];

export function GamesContent() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Guía de Juegos
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Tipos de Juegos de Casino Online
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conoce todos los juegos disponibles en los mejores casinos online de Colombia. Desde tragamonedas hasta
            casino en vivo, encuentra tu juego favorito.
          </p>
        </AnimatedSection>

        {/* Game Categories */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {gameCategories.map((game, index) => (
            <StaggerItem key={index}>
              <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <game.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {game.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{game.description}</p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                      Características
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {game.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-border">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                      Juegos Populares
                    </h4>
                    <p className="text-sm text-muted-foreground">{game.popular.join(", ")}</p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                      Proveedores
                    </h4>
                    <p className="text-xs text-primary">{game.providers.join(" • ")}</p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Tips Section */}
        <AnimatedSection animation="fade-up" className="mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">Consejos para Nuevos Jugadores</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {tips.map((tip, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <tip.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fade-up" className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Encuentra el Mejor Casino para Jugar</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Compara los mejores casinos online de Colombia y elige el que mejor se adapte a tus juegos favoritos.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="/#ranking">
              Ver Ranking de Casinos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </div>
  );
}
