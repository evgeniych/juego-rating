import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { 
  Gift, Crown, RotateCw, RefreshCw, Percent, 
  AlertTriangle, CheckCircle, Info, ExternalLink,
  Star, Clock, Shield
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ResponsibleGaming } from "@/components/responsible-gaming"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getVisibleCasinos, bonuses } from "@/lib/casinos-data"
import { addUtmParams } from "@/lib/utils"

const casinos = getVisibleCasinos(); // Declare the casinos variable

export const metadata: Metadata = {
  title: "Mejores Bonos de Casino 2026 - Promociones y Ofertas | JuegoRating",
  description: "Encuentra los mejores bonos de bienvenida, giros gratis, cashback y promociones de los casinos online en Colombia. Guia completa de bonos 2026.",
  keywords: "bonos casino, bono bienvenida, giros gratis, cashback casino, promociones casino colombia",
}

const bonusIcons: Record<string, React.ReactNode> = {
  gift: <Gift className="w-6 h-6" />,
  rotate: <RotateCw className="w-6 h-6" />,
  refresh: <RefreshCw className="w-6 h-6" />,
  crown: <Crown className="w-6 h-6" />,
}

export default function BonosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Actualizado Enero 2026
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Mejores Bonos de Casino en Colombia
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                Comparamos los bonos de bienvenida, giros gratis y promociones de los casinos legales. 
                Aprende como aprovechar al maximo cada oferta.
              </p>
            </div>
          </div>
        </section>

        {/* Best Bonuses */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Top Bonos de Bienvenida 2026
            </h2>

            <div className="grid gap-4 max-w-4xl mx-auto">
              {casinos.slice(0, 5).map((casino, index) => (
                <Card key={casino.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${index === 0 ? 'ring-2 ring-accent' : ''}`}>
                  {index === 0 && (
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                      MEJOR BONO
                    </div>
                  )}
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                      <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 rounded-xl bg-secondary overflow-hidden shrink-0">
                          <Image
                            src={casino.logo || "/placeholder.svg"}
                            alt={`${casino.name} logo`}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{casino.name}</h3>
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="w-4 h-4 fill-accent text-accent" />
                            <span className="text-foreground">{casino.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="text-sm text-muted-foreground">{casino.bonus}</div>
                        <div className="text-2xl font-bold text-primary">{casino.bonusAmount}</div>
                      </div>

                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{casino.payoutTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          <span className="text-primary">{casino.license}</span>
                        </div>
                      </div>

                      <a
                        href={casino.affiliateUrl ? addUtmParams(casino.affiliateUrl) : `/casino/${casino.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="casino-cta"
                        data-casino-name={casino.slug}
                        data-cta-location="bonos-list"
                        data-cta-type="get-bonus"
                      >
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                          OBTENER BONO
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus Types */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
              Tipos de Bonos Explicados
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Conoce los diferentes tipos de bonos que ofrecen los casinos y como funcionan
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {bonuses.map((bonus) => (
                <Card key={bonus.id} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                        {bonusIcons[bonus.icon]}
                      </div>
                      <CardTitle className="text-xl">{bonus.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {bonus.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <Info className="w-4 h-4 text-primary" />
                      Consejos importantes
                    </h4>
                    <ul className="space-y-2">
                      {bonus.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Tips */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Como Aprovechar los Bonos al Maximo
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                      <CheckCircle className="w-5 h-5" />
                      Lo que debes hacer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Lee siempre los terminos y condiciones completos</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Verifica los requisitos de apuesta antes de aceptar</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Compara diferentes ofertas antes de elegir</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Establece un presupuesto y respetalo</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Aprovecha los programas de lealtad</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-destructive/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-destructive">
                      <AlertTriangle className="w-5 h-5" />
                      Lo que debes evitar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Aceptar bonos sin leer las condiciones</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Depositar mas de lo que puedes permitirte perder</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Ignorar las fechas de expiracion de los bonos</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Crear multiples cuentas para obtener bonos</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Jugar en casinos sin licencia de Coljuegos</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Rollover Explanation */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Percent className="w-5 h-5 text-primary" />
                    Que es el Rollover (Requisitos de Apuesta)?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    El rollover es la cantidad de veces que debes apostar el monto del bono antes de poder retirarlo. 
                    Por ejemplo, si recibes un bono de 100,000 COP con rollover x30, necesitas apostar 3,000,000 COP 
                    antes de poder retirar las ganancias del bono.
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Ejemplo practico:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>- Bono recibido: 200,000 COP</li>
                      <li>- Rollover: x25</li>
                      <li>- Total a apostar: 200,000 x 25 = 5,000,000 COP</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Tip:</strong> Busca bonos con rollover de x20 o menos para mejores posibilidades.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <ResponsibleGaming />
      </main>

      <Footer />
    </div>
  )
}
