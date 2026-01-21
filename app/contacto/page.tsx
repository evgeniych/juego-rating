"use client"

import React from "react"

import { useState } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { 
  Mail, MessageCircle, Clock, MapPin, Send, 
  CheckCircle, AlertCircle, HelpCircle, FileText
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactReasons = [
  { value: "general", label: "Consulta general" },
  { value: "suggestion", label: "Sugerencia" },
  { value: "error", label: "Reportar un error" },
  { value: "partnership", label: "Colaboracion" },
  { value: "other", label: "Otro" },
]

export default function ContactoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

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
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contactanos
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Estamos aqui para ayudarte. Envianos tu consulta y te responderemos lo antes posible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground text-sm">info@juegorating.site</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Tiempo de Respuesta</h3>
                        <p className="text-muted-foreground text-sm">24-48 horas habiles</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">Ubicacion</h3>
                        <p className="text-muted-foreground text-sm">Colombia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/30">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      Antes de contactar
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Quizas tu pregunta ya tenga respuesta en nuestras secciones:
                    </p>
                    <div className="space-y-2">
                      <Link 
                        href="/faq" 
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <FileText className="w-4 h-4" />
                        Preguntas Frecuentes
                      </Link>
                      <Link 
                        href="/sobre-nosotros" 
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <FileText className="w-4 h-4" />
                        Sobre Nosotros
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Envianos un mensaje</CardTitle>
                    <CardDescription>
                      Completa el formulario y te responderemos lo antes posible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          Mensaje enviado!
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Gracias por contactarnos. Te responderemos en 24-48 horas habiles.
                        </p>
                        <Button 
                          onClick={() => setIsSubmitted(false)}
                          variant="outline"
                        >
                          Enviar otro mensaje
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nombre *</Label>
                            <Input 
                              id="name" 
                              placeholder="Tu nombre" 
                              required 
                              className="bg-secondary/50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input 
                              id="email" 
                              type="email" 
                              placeholder="tu@email.com" 
                              required 
                              className="bg-secondary/50"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="reason">Motivo de contacto *</Label>
                          <Select required>
                            <SelectTrigger className="bg-secondary/50">
                              <SelectValue placeholder="Selecciona un motivo" />
                            </SelectTrigger>
                            <SelectContent>
                              {contactReasons.map((reason) => (
                                <SelectItem key={reason.value} value={reason.value}>
                                  {reason.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Asunto *</Label>
                          <Input 
                            id="subject" 
                            placeholder="Asunto de tu mensaje" 
                            required 
                            className="bg-secondary/50"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Mensaje *</Label>
                          <Textarea 
                            id="message" 
                            placeholder="Escribe tu mensaje aqui..." 
                            rows={6} 
                            required 
                            className="bg-secondary/50 resize-none"
                          />
                        </div>

                        <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                            <p>
                              <strong className="text-foreground">Nota:</strong> JuegoRating es un sitio informativo. 
                              No podemos ayudar con problemas de casinos especificos (depositos, retiros, cuentas). 
                              Para esos casos, contacta directamente al casino o a Coljuegos.
                            </p>
                          </div>
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>Enviando...</>
                          ) : (
                            <>
                              Enviar Mensaje
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
