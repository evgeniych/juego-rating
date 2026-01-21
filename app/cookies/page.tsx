import type { Metadata } from "next"
import { Cookie, Settings, BarChart2, Shield, Info } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Politica de Cookies | JuegoRating",
  description: "Politica de cookies de JuegoRating. Conoce como usamos las cookies y como puedes gestionarlas.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-6">
                <Cookie className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Politica de Cookies
              </h1>
              <p className="text-muted-foreground">
                Ultima actualizacion: Enero 2026
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    Que son las Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Las cookies son pequenos archivos de texto que se almacenan en tu dispositivo 
                    cuando visitas un sitio web. Permiten que el sitio recuerde tus preferencias 
                    y mejore tu experiencia de navegacion.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Settings className="w-5 h-5 text-primary" />
                    Tipos de Cookies que Usamos
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Cookies Esenciales</h3>
                      <p className="text-sm text-muted-foreground">
                        Necesarias para el funcionamiento basico del sitio. Incluyen cookies de sesion 
                        y preferencias de consentimiento. No pueden desactivarse.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Cookies Analiticas</h3>
                      <p className="text-sm text-muted-foreground">
                        Nos ayudan a entender como los visitantes interactuan con el sitio. 
                        Usamos Vercel Analytics para recopilar datos anonimos sobre el uso del sitio.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Cookies de Preferencias</h3>
                      <p className="text-sm text-muted-foreground">
                        Recuerdan tus preferencias como verificacion de edad y configuraciones del sitio 
                        para que no tengas que configurarlas cada vez que visitas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-primary" />
                    Cookies de Terceros
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Algunos servicios de terceros pueden establecer sus propias cookies:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong className="text-foreground">Vercel Analytics:</strong> Para analisis de trafico anonimo</li>
                    <li><strong className="text-foreground">Google:</strong> Si accedes a traves de Google Ads</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Como Gestionar Cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Puedes controlar y eliminar las cookies de varias formas:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>A traves de la configuracion de tu navegador</li>
                    <li>Usando el banner de cookies de nuestro sitio</li>
                    <li>Eliminando las cookies almacenadas en tu dispositivo</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Ten en cuenta que rechazar cookies puede afectar la funcionalidad del sitio.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">
                    Al continuar navegando en nuestro sitio, aceptas el uso de cookies segun esta politica. 
                    Si tienes preguntas, contactanos en{" "}
                    <a href="mailto:info@juegorating.site" className="text-primary hover:underline">
                      info@juegorating.site
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
