"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Trophy, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#ranking", label: "Ranking" },
  { href: "/bonos", label: "Bonos" },
  { href: "/pagos", label: "Pagos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-lg shadow-lg shadow-background/50 border-b border-border" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
              <Trophy className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">JuegoRating</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/#ranking">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                Ver Top Casinos
              </Button>
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <nav className="flex flex-col gap-1 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#ranking" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2">
                Ver Top Casinos
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
