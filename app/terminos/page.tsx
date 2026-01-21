import type { Metadata } from "next"
import { FileText, AlertTriangle, Scale, Ban, CheckCircle, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terminos y Condiciones | JuegoRating",
  description: "Terminos y condiciones de uso de JuegoRating. Lee las reglas y responsabilidades al usar nuestro sitio.",
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-6">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Terminos y Condiciones
              </h1>
              <p className="text-muted-foreground">
                Ultima actualizacion: Enero 2026
              </p>
            </div>

            {/* Important Notice */}
            <Card className="border-destructive/30 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Aviso Importante</h3>
                    <p className="text-muted-foreground text-sm">
                      JuegoRating es un sitio web INFORMATIVO. No operamos casinos, no aceptamos 
                      apuestas, depositos ni retiros. Al usar este sitio, aceptas estos terminos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    1. Aceptacion de Terminos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Al acceder y utilizar juegorating.site, aceptas estar sujeto a estos Terminos y Condiciones, 
                    todas las leyes y regulaciones aplicables, y aceptas que eres responsable del cumplimiento 
                    de las leyes locales aplicables.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">2. Naturaleza del Sitio</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    JuegoRating es un sitio web de caracter informativo y comparativo que proporciona:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Comparaciones de casinos online autorizados en Colombia</li>
                    <li>Informacion sobre bonos, promociones y metodos de pago</li>
                    <li>Guias educativas sobre juegos de azar responsables</li>
                    <li>Rankings basados en criterios objetivos</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong className="text-foreground">NO</strong> somos un casino, casa de apuestas, 
                    ni operador de juegos de azar. No aceptamos dinero, apuestas, depositos ni retiros.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Ban className="w-5 h-5 text-destructive" />
                    3. Restricciones de Edad
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Este sitio web esta destinado EXCLUSIVAMENTE a personas mayores de 18 anos. 
                    Si eres menor de edad, debes abandonar este sitio inmediatamente.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    El juego puede causar adiccion. Si decides jugar en algun casino, hazlo de manera 
                    responsable y dentro de tus posibilidades economicas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">4. Enlaces a Terceros</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nuestro sitio contiene enlaces a casinos online y otros sitios web de terceros. 
                    Estos enlaces se proporcionan unicamente para tu conveniencia e informacion.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>No controlamos ni somos responsables del contenido de sitios de terceros</li>
                    <li>No garantizamos la disponibilidad o exactitud de sitios externos</li>
                    <li>Tu uso de sitios de terceros esta sujeto a sus propios terminos</li>
                    <li>Podemos recibir comisiones por referidos (marketing de afiliados)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">5. Precision de la Informacion</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nos esforzamos por mantener la informacion actualizada y precisa, sin embargo:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Los bonos y promociones pueden cambiar sin previo aviso</li>
                    <li>Los terminos de los casinos pueden variar</li>
                    <li>No garantizamos que toda la informacion este siempre actualizada</li>
                    <li>Siempre verifica los terminos directamente en el sitio del casino</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">6. Limitacion de Responsabilidad</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    JuegoRating no sera responsable por:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Perdidas financieras derivadas del juego en casinos</li>
                    <li>Problemas con operadores de terceros</li>
                    <li>Informacion desactualizada o inexacta</li>
                    <li>Interrupciones del servicio</li>
                    <li>Danos directos, indirectos, incidentales o consecuentes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">7. Propiedad Intelectual</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Todo el contenido de este sitio, incluyendo textos, graficos, logos, iconos y software, 
                    es propiedad de JuegoRating o sus proveedores de contenido y esta protegido por leyes 
                    de propiedad intelectual.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    No puedes reproducir, distribuir, modificar ni crear obras derivadas sin autorizacion escrita.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    8. Uso Aceptable
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Al usar este sitio, te comprometes a:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Usar el sitio solo para fines legales</li>
                    <li>No intentar acceder a areas restringidas</li>
                    <li>No interferir con el funcionamiento del sitio</li>
                    <li>No transmitir contenido danino o ilegal</li>
                    <li>Respetar los derechos de propiedad intelectual</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">9. Ley Aplicable</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Estos terminos se rigen por las leyes de Colombia. Cualquier disputa sera 
                    resuelta en los tribunales competentes de Colombia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">10. Modificaciones</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nos reservamos el derecho de modificar estos terminos en cualquier momento. 
                    Los cambios seran efectivos inmediatamente despues de su publicacion en el sitio. 
                    El uso continuado del sitio constituye aceptacion de los terminos modificados.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    11. Contacto
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Para consultas sobre estos terminos, contactanos en:
                  </p>
                  <p className="text-primary font-medium">
                    info@juegorating.site
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
