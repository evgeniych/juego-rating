import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { 
  Star, Shield, Clock, ExternalLink, Check, X, 
  CreditCard, Smartphone, MessageCircle, Award,
  ChevronLeft, Gamepad2, Gift, Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ResponsibleGaming } from "@/components/responsible-gaming"
import { casinos, getCasinoBySlug } from "@/lib/casinos-data"
import { addUtmParams } from "@/lib/utils"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return casinos.map((casino) => ({
    slug: casino.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const casino = getCasinoBySlug(slug)
  
  if (!casino) {
    return { title: "Casino no encontrado - JuegoRating" }
  }

  return {
    title: `${casino.name} Resena 2026 - Bonos, Juegos y Opiniones | JuegoRating`,
    description: `Resena completa de ${casino.name}: ${casino.bonus} ${casino.bonusAmount}, ${casino.games} juegos, retiros en ${casino.payoutTime}. Licencia ${casino.license}. Lee opiniones reales.`,
    keywords: `${casino.name}, ${casino.name} resena, ${casino.name} bono, ${casino.name} opiniones, casino online colombia`,
    openGraph: {
      title: `${casino.name} - Resena Completa 2026`,
      description: casino.description,
      type: "article",
    },
  }
}

export default async function CasinoPage({ params }: PageProps) {
  const { slug } = await params
  const casino = getCasinoBySlug(slug)

  if (!casino) {
    notFound()
  }

  const ratingCategories = [
    { name: "Bonos", value: 95 },
    { name: "Juegos", value: 90 },
    { name: "Pagos", value: casino.payoutTime.includes("24") ? 95 : 85 },
    { name: "Soporte", value: casino.liveChat ? 90 : 80 },
    { name: "Movil", value: casino.mobileApp ? 95 : 85 },
  ]

  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-0">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Inicio
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/#ranking" className="text-muted-foreground hover:text-foreground transition-colors">
                Casinos
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{casino.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          
          <div className="container mx-auto px-4 relative">
            <Link 
              href="/#ranking" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Volver al ranking
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="lg:col-span-2">
                <div className="flex flex-wrap items-start gap-6 mb-6">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-card shadow-xl">
                    <Image
                      src={casino.logo || "/placeholder.svg"}
                      alt={`${casino.name} logo`}
                      fill
                      className="object-cover"
                      sizes="96px"
                      priority
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h1 className="text-3xl md:text-4xl font-bold text-foreground">{casino.name}</h1>
                      {casino.isTopRated && (
                        <Badge className="bg-accent text-accent-foreground">
                          <Award className="w-3 h-3 mr-1" />
                          #1 Recomendado
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(casino.rating / 2) ? "fill-accent text-accent" : "fill-muted text-muted"}`}
                          />
                        ))}
                      </div>
                      <span className="text-2xl font-bold text-foreground">{casino.rating}</span>
                      <span className="text-muted-foreground">/10</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{casino.description}</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <Gamepad2 className="w-5 h-5 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground">{casino.games}</div>
                    <div className="text-xs text-muted-foreground">Juegos</div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <Clock className="w-5 h-5 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground">{casino.payoutTime}</div>
                    <div className="text-xs text-muted-foreground">Retiros</div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <Shield className="w-5 h-5 text-primary mb-2" />
                    <div className="text-lg font-bold text-foreground truncate">{casino.licenseNumber}</div>
                    <div className="text-xs text-muted-foreground">Licencia</div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <Users className="w-5 h-5 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground">{casino.established}</div>
                    <div className="text-xs text-muted-foreground">Fundado</div>
                  </div>
                </div>

                {/* Rating Breakdown */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Puntuacion Detallada</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {ratingCategories.map((category) => (
                      <div key={category.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground">{category.name}</span>
                          <span className="text-primary font-medium">{category.value}%</span>
                        </div>
                        <Progress value={category.value} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-primary/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2 text-primary">
                        <Check className="w-5 h-5" />
                        Ventajas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {casino.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-destructive/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2 text-destructive">
                        <X className="w-5 h-5" />
                        Desventajas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {casino.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm">
                            <X className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Payment Methods */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      Metodos de Pago
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-3">Depositos</h4>
                        <div className="flex flex-wrap gap-2">
                          {casino.depositMethods.map((method) => (
                            <Badge key={method} variant="secondary">{method}</Badge>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Deposito minimo: {casino.minDeposit}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-3">Retiros</h4>
                        <div className="flex flex-wrap gap-2">
                          {casino.withdrawalMethods.map((method) => (
                            <Badge key={method} variant="secondary">{method}</Badge>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Retiro maximo: {casino.maxWithdrawal}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Software Providers */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gamepad2 className="w-5 h-5 text-primary" />
                      Proveedores de Software
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {casino.softwareProviders.map((provider) => (
                        <Badge key={provider} variant="outline" className="text-foreground">
                          {provider}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Support */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      Soporte al Cliente
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {casino.customerSupport.map((support) => (
                        <div key={support} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary">
                          <Check className="w-4 h-4 text-primary" />
                          <span className="text-sm text-foreground">{support}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        <span>App movil: {casino.mobileApp ? "Si" : "No"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat en vivo: {casino.liveChat ? "Si" : "No"}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Bonus Card */}
                  <Card className="border-primary/50 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-primary/80 p-4">
                      <Gift className="w-8 h-8 text-primary-foreground mb-2" />
                      <div className="text-primary-foreground">
                        <div className="text-sm opacity-90">{casino.bonus}</div>
                        <div className="text-2xl font-bold">{casino.bonusAmount}</div>
                      </div>
                    </div>
                    <CardContent className="p-4 space-y-4">
                      <a
                        href={casino.affiliateUrl ? addUtmParams(casino.affiliateUrl) : `/casino/${casino.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block casino-cta"
                        data-casino-name={casino.slug}
                        data-cta-location="review-sidebar"
                        data-cta-type="visit-casino"
                      >
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                        >
                          VISITAR CASINO
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      </a>
                      <p className="text-xs text-center text-muted-foreground">
                        18+ | Aplican terminos y condiciones | Juega responsablemente
                      </p>
                    </CardContent>
                  </Card>

                  {/* Quick Info */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Informacion Rapida</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Licencia</span>
                        <span className="text-foreground font-medium">{casino.license}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Numero</span>
                        <span className="text-primary font-medium">{casino.licenseNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fundado</span>
                        <span className="text-foreground font-medium">{casino.established}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Idiomas</span>
                        <span className="text-foreground font-medium">{casino.languages.join(", ")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monedas</span>
                        <span className="text-foreground font-medium">{casino.currencies.join(", ")}</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Features */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Caracteristicas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {casino.features.map((feature) => (
                          <Badge key={feature} className="bg-primary/10 text-primary border-primary/20">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ResponsibleGaming />
      </main>

      <Footer />

      {/* Fixed Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-background/95 backdrop-blur-lg border-t border-border p-4 pb-safe">
          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground">{casino.bonus}</div>
              <div className="text-sm font-bold text-primary truncate">{casino.bonusAmount}</div>
            </div>
            <a
              href={casino.affiliateUrl ? addUtmParams(casino.affiliateUrl) : `/casino/${casino.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 casino-cta"
              data-casino-name={casino.slug}
              data-cta-location="mobile-fixed-bar"
              data-cta-type="visit-casino"
            >
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12 px-6 text-base font-bold animate-pulse-glow"
              >
                VISITAR
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
