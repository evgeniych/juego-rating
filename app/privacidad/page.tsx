import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Lock, Eye, FileText, Mail, AlertCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Politica de Privacidad | JuegoRating",
  description: "Politica de privacidad de JuegoRating. Conoce como protegemos tu informacion y tus derechos como usuario.",
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Politica de Privacidad
              </h1>
              <p className="text-muted-foreground">
                Ultima actualizacion: Enero 2026
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none space-y-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    1. Introduccion
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    En JuegoRating (juegorating.site) nos comprometemos a proteger tu privacidad. 
                    Esta politica describe como recopilamos, usamos y protegemos tu informacion personal 
                    cuando visitas nuestro sitio web.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    JuegoRating es un sitio web informativo y comparativo. No operamos ningun casino, 
                    no aceptamos apuestas, depositos ni retiros. Nuestra funcion es proporcionar informacion 
                    educativa sobre casinos online autorizados en Colombia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    2. Informacion que Recopilamos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Podemos recopilar los siguientes tipos de informacion:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Informacion de navegacion (paginas visitadas, tiempo en el sitio)</li>
                    <li>Informacion del dispositivo (tipo de navegador, sistema operativo)</li>
                    <li>Direccion IP (anonimizada)</li>
                    <li>Cookies y tecnologias similares</li>
                    <li>Informacion que proporcionas voluntariamente (correo electronico de contacto)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    3. Como Usamos tu Informacion
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizamos la informacion recopilada para:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Mejorar nuestro sitio web y la experiencia del usuario</li>
                    <li>Analizar el trafico y comportamiento de los visitantes</li>
                    <li>Responder a consultas y comunicaciones</li>
                    <li>Cumplir con obligaciones legales</li>
                    <li>Prevenir actividades fraudulentas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">4. Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizamos cookies para mejorar tu experiencia en nuestro sitio. Las cookies son 
                    pequenos archivos de texto que se almacenan en tu dispositivo. Puedes configurar 
                    tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Tipos de cookies que usamos:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong className="text-foreground">Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio</li>
                    <li><strong className="text-foreground">Cookies analiticas:</strong> Nos ayudan a entender como se usa el sitio</li>
                    <li><strong className="text-foreground">Cookies de preferencias:</strong> Recuerdan tus preferencias</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">5. Compartir Informacion</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    No vendemos ni compartimos tu informacion personal con terceros, excepto:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Con proveedores de servicios que nos ayudan a operar el sitio</li>
                    <li>Cuando sea requerido por ley o autoridades competentes</li>
                    <li>Para proteger nuestros derechos legales</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">6. Tus Derechos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Tienes derecho a:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Acceder a tu informacion personal</li>
                    <li>Rectificar datos inexactos</li>
                    <li>Solicitar la eliminacion de tus datos</li>
                    <li>Oponerte al procesamiento de tus datos</li>
                    <li>Retirar tu consentimiento en cualquier momento</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">7. Seguridad</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementamos medidas de seguridad tecnicas y organizativas para proteger tu 
                    informacion contra acceso no autorizado, alteracion, divulgacion o destruccion.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">8. Enlaces a Terceros</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nuestro sitio contiene enlaces a sitios web de terceros (casinos online). 
                    No somos responsables de las practicas de privacidad de estos sitios. 
                    Te recomendamos leer sus politicas de privacidad antes de proporcionar informacion personal.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    9. Contacto
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Si tienes preguntas sobre esta politica de privacidad o deseas ejercer tus derechos, 
                    puedes contactarnos en:
                  </p>
                  <p className="text-primary font-medium">
                    info@juegorating.site
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Cambios en esta Politica</h3>
                      <p className="text-muted-foreground text-sm">
                        Podemos actualizar esta politica periodicamente. Te notificaremos de cambios 
                        significativos publicando la nueva politica en esta pagina con la fecha de actualizacion.
                      </p>
                    </div>
                  </div>
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
