import type { Metadata } from "next"
import { 
  CreditCard, Building, Smartphone, Wallet, Clock, 
  Shield, CheckCircle, AlertCircle, Banknote, ArrowRight
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ResponsibleGaming } from "@/components/responsible-gaming"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Metodos de Pago Casinos Colombia 2026 - Depositos y Retiros | JuegoRating",
  description: "Guia completa de metodos de pago en casinos online colombianos. PSE, Efecty, Nequi, Daviplata, tarjetas y mas. Tiempos, limites y comisiones.",
  keywords: "metodos pago casino, PSE casino, Nequi casino, depositos casino colombia, retiros casino",
}

const paymentMethods = [
  {
    name: "PSE",
    type: "Transferencia bancaria",
    icon: Building,
    depositTime: "Instantaneo",
    withdrawalTime: "24-48 horas",
    minDeposit: "10,000 COP",
    maxDeposit: "50,000,000 COP",
    fees: "Gratis",
    pros: ["Sin comisiones", "Alta seguridad", "Instantaneo"],
    cons: ["Solo en horario bancario"],
  },
  {
    name: "Nequi",
    type: "Billetera digital",
    icon: Smartphone,
    depositTime: "Instantaneo",
    withdrawalTime: "1-24 horas",
    minDeposit: "5,000 COP",
    maxDeposit: "3,000,000 COP",
    fees: "Gratis",
    pros: ["Muy rapido", "Facil de usar", "Retiros rapidos"],
    cons: ["Limites mas bajos"],
  },
  {
    name: "Daviplata",
    type: "Billetera digital",
    icon: Smartphone,
    depositTime: "Instantaneo",
    withdrawalTime: "1-24 horas",
    minDeposit: "5,000 COP",
    maxDeposit: "3,000,000 COP",
    fees: "Gratis",
    pros: ["Muy popular", "Sin comisiones", "Facil acceso"],
    cons: ["Limites moderados"],
  },
  {
    name: "Efecty",
    type: "Pago en efectivo",
    icon: Banknote,
    depositTime: "15-30 minutos",
    withdrawalTime: "No disponible",
    minDeposit: "10,000 COP",
    maxDeposit: "5,000,000 COP",
    fees: "Gratis",
    pros: ["Sin cuenta bancaria", "Miles de puntos"],
    cons: ["Solo depositos", "Requiere ir a punto fisico"],
  },
  {
    name: "Baloto",
    type: "Pago en efectivo",
    icon: Banknote,
    depositTime: "15-30 minutos",
    withdrawalTime: "No disponible",
    minDeposit: "10,000 COP",
    maxDeposit: "3,000,000 COP",
    fees: "Gratis",
    pros: ["Muy accesible", "Sin cuenta bancaria"],
    cons: ["Solo depositos"],
  },
  {
    name: "Visa / Mastercard",
    type: "Tarjeta de credito/debito",
    icon: CreditCard,
    depositTime: "Instantaneo",
    withdrawalTime: "2-5 dias",
    minDeposit: "20,000 COP",
    maxDeposit: "20,000,000 COP",
    fees: "Gratis",
    pros: ["Aceptacion universal", "Altos limites"],
    cons: ["Retiros mas lentos", "Posibles restricciones bancarias"],
  },
]

export default function PagosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Guia Completa
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Metodos de Pago en Casinos Colombia
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                Todo lo que necesitas saber sobre depositos y retiros en casinos online. 
                Comparamos tiempos, limites y comisiones de cada metodo.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">Depositos Instantaneos</h3>
                  <p className="text-sm text-muted-foreground">
                    La mayoria de metodos acreditan en segundos
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">100% Seguros</h3>
                  <p className="text-sm text-muted-foreground">
                    Todos los metodos con encriptacion SSL
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Wallet className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground mb-2">Sin Comisiones</h3>
                  <p className="text-sm text-muted-foreground">
                    La mayoria de casinos no cobran por transacciones
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Payment Methods Grid */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Metodos de Pago Disponibles
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {paymentMethods.map((method) => {
                const Icon = method.icon
                return (
                  <Card key={method.name} className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{method.name}</CardTitle>
                          <CardDescription>{method.type}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Deposito</p>
                          <p className="font-medium text-primary">{method.depositTime}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Retiro</p>
                          <p className="font-medium text-foreground">{method.withdrawalTime}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Min. Deposito</p>
                          <p className="font-medium text-foreground">{method.minDeposit}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Comision</p>
                          <p className="font-medium text-primary">{method.fees}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-1">
                          {method.pros.map((pro) => (
                            <Badge key={pro} variant="secondary" className="text-xs bg-primary/10 text-primary">
                              {pro}
                            </Badge>
                          ))}
                        </div>
                        {method.cons.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {method.cons.map((con) => (
                              <Badge key={con} variant="secondary" className="text-xs bg-secondary text-muted-foreground">
                                {con}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 lg:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Tabla Comparativa
            </h2>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Metodo</TableHead>
                      <TableHead>Deposito</TableHead>
                      <TableHead>Retiro</TableHead>
                      <TableHead>Min. Deposito</TableHead>
                      <TableHead>Max. Deposito</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentMethods.map((method) => (
                      <TableRow key={method.name}>
                        <TableCell className="font-medium">{method.name}</TableCell>
                        <TableCell>
                          <Badge className="bg-primary/10 text-primary border-0">
                            {method.depositTime}
                          </Badge>
                        </TableCell>
                        <TableCell>{method.withdrawalTime}</TableCell>
                        <TableCell>{method.minDeposit}</TableCell>
                        <TableCell>{method.maxDeposit}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Consejos para Depositos y Retiros
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <CheckCircle className="w-5 h-5" />
                      Recomendaciones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          Usa el mismo metodo para depositos y retiros cuando sea posible
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          Verifica tu cuenta completamente antes de solicitar retiros
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          Nequi y Daviplata son los metodos mas rapidos para retiros
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          PSE es ideal para montos altos por sus limites generosos
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                      <AlertCircle className="w-5 h-5" />
                      Ten en Cuenta
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          Algunos bancos pueden bloquear transacciones a casinos
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          Efecty y Baloto no permiten retiros, solo depositos
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          PSE puede no funcionar en horarios nocturnos
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          El primer retiro puede requerir verificacion adicional
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <ResponsibleGaming />
      </main>

      <Footer />
    </div>
  )
}
