import type { Metadata } from "next"
import { AlertTriangle, Phone, Globe, Users, Heart, Shield, Clock, Ban, CheckCircle, HelpCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Juego Responsable | JuegoRating",
  description: "Informacion sobre juego responsable. Conoce las senales de advertencia, herramientas de autocontrol y recursos de ayuda disponibles en Colombia.",
}

const warningSignals = [
  "Gastas mas dinero del que puedes permitirte perder",
  "Juegas para recuperar perdidas anteriores",
  "Descuidas responsabilidades personales o profesionales por el juego",
  "Mientes a familiares sobre cuanto tiempo o dinero gastas jugando",
  "El juego afecta tus relaciones personales o familiares",
  "Sientes ansiedad o irritabilidad cuando no puedes jugar",
  "Has pedido dinero prestado para jugar",
  "Has vendido posesiones para financiar el juego",
]

const selfControlTools = [
  {
    icon: Shield,
    name: "Limites de Deposito",
    description: "Establece limites diarios, semanales o mensuales para tus depositos",
  },
  {
    icon: Clock,
    name: "Limites de Tiempo",
    description: "Configura recordatorios y limites de tiempo de sesion",
  },
  {
    icon: Ban,
    name: "Autoexclusion",
    description: "Excluete temporal o permanentemente del casino",
  },
  {
    icon: Heart,
    name: "Test de Autoevaluacion",
    description: "Evalua tu relacion con el juego periodicamente",
  },
]

const helpResources = [
  {
    icon: Phone,
    name: "Linea Nacional de Ayuda",
    contact: "01 8000 112 123",
    description: "Linea gratuita disponible 24/7",
    url: "tel:018000112123",
  },
  {
    icon: Globe,
    name: "Jugar Bien - Coljuegos",
    contact: "www.jugarbien.gov.co",
    description: "Portal oficial de juego responsable",
    url: "https://www.jugarbien.gov.co",
  },
  {
    icon: Globe,
    name: "Coljuegos",
    contact: "www.coljuegos.gov.co",
    description: "Autoridad reguladora oficial de Colombia",
    url: "https://www.coljuegos.gov.co",
  },
  {
    icon: Users,
    name: "Jugadores Anonimos Colombia",
    contact: "Grupos de apoyo presenciales",
    description: "Reuniones y asesoria grupal",
    url: "https://www.jugadoresanonimos.org",
  },
]

const tips = [
  "El juego debe ser entretenimiento, nunca una forma de ganar dinero",
  "Establece un presupuesto ANTES de jugar y respetalo",
  "Nunca juegues con dinero que necesitas para gastos esenciales",
  "No intentes recuperar perdidas jugando mas",
  "Toma descansos regulares durante las sesiones de juego",
  "No juegues bajo la influencia del alcohol o drogas",
  "Equilibra el juego con otras actividades de ocio",
  "Habla con alguien si sientes que el juego te afecta",
]

export default function JuegoResponsablePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-destructive/10 mx-auto mb-6">
                <Heart className="w-8 h-8 text-destructive" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Juego Responsable
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                El juego debe ser una actividad de entretenimiento. Aqui encontraras informacion 
                para mantener una relacion saludable con el juego.
              </p>
            </div>

            {/* Important Alert */}
            <Card className="border-destructive/30 mb-12">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-destructive shrink-0" />
                  <div>
                    <h2 className="font-bold text-foreground text-lg mb-2">
                      Necesitas Ayuda Ahora?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Si sientes que el juego esta afectando tu vida, no estas solo. 
                      Hay ayuda disponible las 24 horas.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground" asChild>
                        <a href="tel:018000112123">
                          <Phone className="w-4 h-4 mr-2" />
                          Llamar 01 8000 112 123
                        </a>
                      </Button>
                      <Button variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent" asChild>
                        <a href="https://www.jugarbien.gov.co" target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-2" />
                          Visitar JugarBien.gov.co
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Warning Signals */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                  Senales de Advertencia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Si identificas una o mas de estas senales, considera buscar ayuda profesional:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {warningSignals.map((signal, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0" />
                      <span className="text-muted-foreground">{signal}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Self Control Tools */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Shield className="w-5 h-5 text-primary" />
                  Herramientas de Autocontrol
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Los casinos autorizados por Coljuegos deben ofrecer estas herramientas:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {selfControlTools.map((tool, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 shrink-0">
                        <tool.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{tool.name}</h4>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Consejos para Jugar Responsablemente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Help Resources */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  Recursos de Ayuda en Colombia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {helpResources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target={resource.url.startsWith("http") ? "_blank" : undefined}
                      rel={resource.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 shrink-0">
                        <resource.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{resource.name}</h4>
                        <p className="text-primary text-sm">{resource.contact}</p>
                        <p className="text-xs text-muted-foreground mt-1">{resource.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Final Message */}
            <Card className="border-primary/30">
              <CardContent className="p-6 text-center">
                <p className="text-foreground font-medium mb-2">
                  Recuerda: El juego es solo para mayores de 18 anos.
                </p>
                <p className="text-sm text-muted-foreground">
                  Si tu o alguien que conoces tiene problemas con el juego, 
                  no dudes en buscar ayuda. No tienes que enfrentarlo solo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
