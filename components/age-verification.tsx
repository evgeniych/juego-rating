"use client"

import { useState, useEffect } from "react"
import { AlertTriangle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function AgeVerification() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem("age-verified")
    if (!verified) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    }
  }, [])

  const handleVerify = () => {
    localStorage.setItem("age-verified", "true")
    setIsVisible(false)
    document.body.style.overflow = ""
  }

  const handleDecline = () => {
    window.location.href = "https://www.google.com"
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="max-w-md w-full bg-card border-border shadow-2xl">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-destructive" />
          </div>
          
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Verificacion de Edad
          </h2>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Este sitio web contiene informacion sobre casinos y juegos de azar. 
            Debes ser mayor de <span className="text-foreground font-bold">18 anos</span> para acceder.
          </p>

          <div className="flex items-center justify-center gap-2 p-3 bg-secondary/50 rounded-lg mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Solo operadores autorizados por Coljuegos
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <Button 
              onClick={handleVerify}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg"
            >
              Soy Mayor de 18 Anos
            </Button>
            <Button 
              variant="outline" 
              onClick={handleDecline}
              className="w-full border-border hover:bg-secondary bg-transparent h-12"
            >
              Soy Menor de Edad
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Al continuar, confirmas que tienes al menos 18 anos y aceptas nuestros{" "}
            <a href="/terminos" className="text-primary hover:underline">
              terminos de uso
            </a>.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
