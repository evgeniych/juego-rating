"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-in fade-in slide-in-from-bottom-5 duration-300"
      aria-label="Volver arriba"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
}
