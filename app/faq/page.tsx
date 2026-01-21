import type { Metadata } from "next"
import Link from "next/link"
import { HelpCircle, Search, MessageCircle, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ResponsibleGaming } from "@/components/responsible-gaming"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes (FAQ) | JuegoRating",
  description: "Respuestas a las preguntas mas frecuentes sobre casinos online en Colombia. Legalidad, bonos, pagos, seguridad y mas.",
  keywords: "FAQ casinos colombia, preguntas frecuentes casino, dudas casino online, ayuda casino",
}

const categories = [
  {
    title: "Legalidad",
    questions: [
      {
        question: "Es legal jugar en casinos online en Colombia?",
        answer: "Si, es completamente legal jugar en casinos online autorizados por Coljuegos. Estos operadores cumplen con todas las regulaciones colombianas y garantizan un entorno de juego seguro y transparente. Solo debes asegurarte de que el casino tenga licencia valida de Coljuegos."
      },
      {
        question: "Como se si un casino tiene licencia de Coljuegos?",
        answer: "Puedes verificar la licencia de un casino visitando el sitio web oficial de Coljuegos (www.coljuegos.gov.co). Todos los casinos legales muestran su numero de licencia en el pie de pagina de su sitio web. En JuegoRating solo recomendamos casinos verificados y autorizados."
      },
    ]
  },
  {
    title: "Pagos y Retiros",
    questions: [
      {
        question: "Cuanto tiempo tardan los retiros?",
        answer: "El tiempo de retiro varia segun el casino y el metodo de pago elegido. Los casinos mas rapidos procesan retiros en menos de 24 horas. Los metodos electronicos como PSE, Nequi y Daviplata suelen ser los mas rapidos, mientras que las transferencias bancarias pueden tomar 2-5 dias habiles."
      },
      {
        question: "Que metodos de pago puedo usar?",
        answer: "Los casinos colombianos aceptan multiples metodos de pago locales: PSE para transferencias bancarias, Efecty y Baloto para pagos en efectivo, billeteras digitales como Nequi y Daviplata, y tarjetas Visa/Mastercard. La mayoria de depositos son instantaneos."
      },
      {
        question: "Hay limites de deposito o retiro?",
        answer: "Si, cada casino establece sus propios limites. Los depositos minimos suelen estar entre 10,000 y 20,000 COP. Los limites maximos de retiro varian, pero generalmente permiten retirar varios millones de pesos. Los jugadores VIP suelen tener limites mas altos."
      },
    ]
  },
  {
    title: "Bonos y Promociones",
    questions: [
      {
        question: "Como funcionan los bonos de bienvenida?",
        answer: "Los bonos de bienvenida generalmente duplican tu primer deposito hasta un monto maximo. Por ejemplo, un bono del 100% hasta 500,000 COP significa que si depositas 500,000 COP, recibiras otros 500,000 COP en bonos. Es importante leer los requisitos de apuesta (rollover) antes de aceptar."
      },
      {
        question: "Que es el rollover o requisitos de apuesta?",
        answer: "El rollover es la cantidad de veces que debes apostar el monto del bono antes de poder retirarlo. Por ejemplo, si recibes un bono de 100,000 COP con rollover x30, necesitas apostar 3,000,000 COP antes de poder retirar las ganancias del bono."
      },
    ]
  },
  {
    title: "Juego y Soporte",
    questions: [
      {
        question: "Puedo jugar desde mi celular?",
        answer: "Si, todos los casinos que recomendamos estan optimizados para dispositivos moviles. Algunos tienen aplicaciones nativas para iOS y Android, mientras que otros funcionan perfectamente desde el navegador movil. La experiencia de juego es igual de completa que en computadora."
      },
      {
        question: "Que debo hacer si tengo un problema?",
        answer: "Si tienes algun problema, contacta primero al soporte del casino a traves de chat en vivo, email o telefono. Si no obtienes una solucion satisfactoria, puedes presentar una queja ante Coljuegos. Tambien existen organizaciones de ayuda si crees tener problemas con el juego."
      },
    ]
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Preguntas Frecuentes
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Encuentra respuestas a las dudas mas comunes sobre casinos online en Colombia
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {categories.map((category, categoryIndex) => (
                <div key={category.title} className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Search className="w-5 h-5 text-primary" />
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                        <AccordionTrigger className="text-left hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6 md:p-8 text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Tienes mas preguntas?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Si no encontraste la respuesta que buscabas, no dudes en contactarnos. 
                  Estamos aqui para ayudarte.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contacto">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Contactanos
                    </Button>
                  </Link>
                  <a 
                    href="https://www.coljuegos.gov.co" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="gap-2 bg-transparent">
                      Coljuegos Oficial
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <ResponsibleGaming />
      </main>

      <Footer />
    </div>
  )
}
