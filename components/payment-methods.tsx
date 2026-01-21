"use client";

import { CreditCard, Wallet, Building, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import Link from "next/link";

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Tarjetas de Crédito/Débito",
    description: "Visa, Mastercard, Diners Club, American Express",
    badge: "Depósitos Instantáneos",
    color: "from-blue-500 to-indigo-500",
    features: ["Sin comisiones", "Proceso seguro", "Amplia aceptación"],
  },
  {
    icon: Wallet,
    title: "Billeteras Digitales",
    description: "Nequi, Daviplata, PSE, Efecty, Baloto",
    badge: "Más Populares",
    color: "from-emerald-500 to-teal-500",
    features: ["Transferencias rápidas", "Sin datos bancarios", "Fácil de usar"],
  },
  {
    icon: Building,
    title: "Transferencia Bancaria",
    description: "Bancolombia, Davivienda, Banco de Bogotá, BBVA",
    badge: "Mayor Seguridad",
    color: "from-amber-500 to-orange-500",
    features: ["Montos altos", "Verificación bancaria", "Protección adicional"],
  },
];

const processingTimes = {
  deposits: [
    { method: "Tarjetas", time: "Instantáneo", icon: "lightning" },
    { method: "Nequi/Daviplata", time: "Instantáneo", icon: "lightning" },
    { method: "PSE", time: "Instantáneo", icon: "lightning" },
    { method: "Transferencia", time: "1-3 horas", icon: "clock" },
  ],
  withdrawals: [
    { method: "Nequi/Daviplata", time: "24-48 horas", icon: "clock" },
    { method: "Transferencia", time: "24-72 horas", icon: "clock" },
    { method: "Tarjetas", time: "3-5 días", icon: "calendar" },
  ],
};

export function PaymentMethods() {
  return (
    <section id="pagos" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Opciones de Pago
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Métodos de Pago Disponibles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Los mejores casinos colombianos ofrecen múltiples opciones de depósito y retiro adaptadas al mercado local.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
          {paymentMethods.map((method, index) => (
            <StaggerItem key={index}>
              <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                    {method.badge}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <ul className="space-y-2">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection animation="fade-up" delay={0.3}>
          <Card className="bg-card border-border overflow-hidden">
            <CardHeader className="bg-secondary/50">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-primary" />
                Tiempos de Procesamiento
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Depósitos
                  </h4>
                  <ul className="space-y-3">
                    {processingTimes.deposits.map((item) => (
                      <li
                        key={item.method}
                        className="flex justify-between items-center text-sm p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                      >
                        <span className="text-foreground font-medium">{item.method}</span>
                        <span className="text-primary font-semibold">{item.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Retiros
                  </h4>
                  <ul className="space-y-3">
                    {processingTimes.withdrawals.map((item) => (
                      <li
                        key={item.method}
                        className="flex justify-between items-center text-sm p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                      >
                        <span className="text-foreground font-medium">{item.method}</span>
                        <span className="text-accent font-semibold">{item.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={0.4} className="mt-8 text-center">
          <Link
            href="/pagos"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            Ver guía completa de métodos de pago
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
