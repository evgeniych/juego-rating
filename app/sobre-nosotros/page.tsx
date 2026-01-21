import type { Metadata } from "next"
import Link from "next/link"
import { 
  Trophy, Target, Shield, Users, CheckCircle, 
  Star, Eye, Heart, Award, TrendingUp 
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Sobre Nosotros | JuegoRating - Tu Guia de Casinos en Colombia",
  description: "Conoce a JuegoRating: tu fuente confiable para comparar casinos online en Colombia. Nuestra mision, valores y compromiso con el juego responsable.",
}

const values = [
  {
    icon: Shield,
    title: "Transparencia",
    description: "Informacion clara y honesta sobre cada casino, sin ocultar nada."
  },
  {
    icon: Eye,
    title: "Objetividad",
    description: "Evaluaciones basadas en criterios medibles, no en preferencias personales."
  },
  {
    icon: Heart,
    title: "Responsabilidad",
    description: "Promovemos el juego responsable y la prevencion de la adiccion."
  },
  {
    icon: TrendingUp,
    title: "Actualizacion",
    description: "Contenido constantemente actualizado para reflejar cambios del mercado."
  },
]

const criteria = [
  "Licencia valida de Coljuegos",
  "Seguridad y encriptacion SSL",
  "Variedad de bonos y promociones",
  "Metodos de pago disponibles",
  "Velocidad de retiros",
  "Calidad del soporte al cliente",
  "Variedad de juegos",
  "Experiencia movil",
]

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary mx-auto mb-6">
                <Trophy className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Sobre JuegoRating
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Tu guia confiable para navegar el mundo de los casinos online en Colombia. 
                Comparamos, analizamos y te ayudamos a elegir con informacion.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Nuestra Mision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Proporcionar informacion objetiva, actualizada y completa sobre los casinos 
                    online autorizados en Colombia, ayudando a los usuarios a tomar decisiones 
                    informadas mientras promovemos el juego responsable.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Nuestra Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser la referencia mas confiable y completa para comparar casinos online 
                    en Colombia, reconocidos por nuestra integridad, precision y compromiso 
                    con la seguridad de los jugadores.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
                Que Hacemos
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Analizamos cada aspecto de los casinos para darte la informacion mas completa
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent" />
                      Comparamos Casinos
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Evaluamos todos los casinos online autorizados por Coljuegos usando 
                      criterios objetivos y medibles. Nuestros rankings reflejan una evaluacion 
                      completa de cada operador.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent" />
                      Analizamos Bonos
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Desglosamos cada bono y promocion, explicando los terminos, requisitos 
                      de apuesta y condiciones. Te ayudamos a entender el valor real de cada oferta.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent" />
                      Guias Educativas
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Creamos contenido educativo sobre metodos de pago, seguridad, juego 
                      responsable y como aprovechar al maximo tu experiencia de casino online.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent" />
                      Actualizacion Constante
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Monitoreamos el mercado constantemente para mantener nuestra informacion 
                      actualizada. Los bonos, promociones y condiciones cambian, y nosotros tambien.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
              Nuestros Valores
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Los principios que guian todo lo que hacemos
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <Card key={value.title} className="text-center">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mx-auto mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
                Como Evaluamos los Casinos
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Nuestro proceso de evaluacion es riguroso y transparente
              </p>

              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {criteria.map((criterion) => (
                      <div key={criterion} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{criterion}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-primary/30">
                <CardContent className="p-6 md:p-8 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Importante: Somos un Sitio Informativo
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    JuegoRating NO es un casino. No aceptamos apuestas, depositos ni retiros. 
                    Somos una plataforma de comparacion que te ayuda a encontrar los mejores 
                    casinos autorizados por Coljuegos. Para jugar, debes registrarte directamente 
                    en los sitios oficiales de los operadores.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/#ranking">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Ver Ranking de Casinos
                      </Button>
                    </Link>
                    <Link href="/contacto">
                      <Button variant="outline">
                        Contactanos
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
