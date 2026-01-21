"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-5 duration-500">
      <Card className="max-w-4xl mx-auto bg-card/95 backdrop-blur-md border-border shadow-2xl">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-shrink-0 hidden md:block">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                <Cookie className="w-5 h-5 text-primary md:hidden" />
                Utilizamos Cookies
              </h3>
              <p className="text-sm text-muted-foreground">
                Usamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. Al
                continuar navegando, aceptas nuestra{" "}
                <Link href="/privacidad" className="text-primary hover:underline">
                  política de privacidad
                </Link>{" "}
                y el uso de cookies.
              </p>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={declineCookies}
                className="flex-1 md:flex-none border-border hover:bg-secondary bg-transparent"
              >
                Rechazar
              </Button>
              <Button
                size="sm"
                onClick={acceptCookies}
                className="flex-1 md:flex-none bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Aceptar
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={declineCookies}
                className="hidden md:flex text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
                <span className="sr-only">Cerrar</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
