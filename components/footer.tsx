import Link from "next/link"
import { Trophy, Mail, AlertCircle, Phone, MapPin, ExternalLink, Shield } from "lucide-react"

const quickLinks = [
  { href: "/#ranking", label: "Top Casinos" },
  { href: "/bonos", label: "Bonos y Promociones" },
  { href: "/pagos", label: "Métodos de Pago" },
  { href: "/faq", label: "Preguntas Frecuentes" },
]

const legalLinks = [
  { href: "/privacidad", label: "Politica de Privacidad" },
  { href: "/terminos", label: "Terminos y Condiciones" },
  { href: "/cookies", label: "Politica de Cookies" },
  { href: "/juego-responsable", label: "Juego Responsable" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/contacto", label: "Contacto" },
]

const helpLinks = [
  { href: "https://tomaelcontrol.coljuegos.gov.co/", label: "Toma el Control - Coljuegos", external: true },
  { href: "https://www.coljuegos.gov.co", label: "Coljuegos Oficial", external: true },
  { href: "https://jugadoresanonimoscolombia.org/grupos.html", label: "Jugadores Anonimos Colombia", external: true },
  { href: "https://fundaciongenesis.co/", label: "Fundacion Genesis", external: true },
  { href: "https://renaseresips.com.co/ludopatia/", label: "RenaSeres IPS", external: true },
  { href: "https://fundacionnuevorumbo.com.co/adiccion-a-juegos/", label: "Nuevo Rumbo", external: true },
]

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* 18+ Badge */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-full">
            <span className="text-2xl font-bold text-destructive">18+</span>
            <span className="text-sm text-muted-foreground">Solo Adultos</span>
          </div>
          <a 
            href="https://www.coljuegos.gov.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full hover:bg-primary/20 transition-colors"
          >
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground">Regulado por Coljuegos</span>
          </a>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-secondary/50 border border-border rounded-xl p-4 mb-6 text-center">
          <p className="text-xs text-muted-foreground">
            <strong className="text-foreground">Divulgacion de Afiliados:</strong> Algunos enlaces en este sitio son enlaces de afiliados. 
            Esto significa que podemos recibir una comision si te registras a traves de nuestros enlaces, sin costo adicional para ti. 
            Esto nos ayuda a mantener el sitio y proporcionar contenido de calidad.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-destructive/10 shrink-0">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <div className="space-y-3 text-sm">
              <p className="font-bold text-foreground text-base">
                CONTENIDO SOLO PARA MAYORES DE 18 ANOS - JUEGA RESPONSABLEMENTE
              </p>
              <p className="text-muted-foreground leading-relaxed">
                El juego puede causar adiccion. Juega con responsabilidad y establece limites. 
                Si crees tener un problema con el juego, busca ayuda profesional en{" "}
                <a 
                  href="https://tomaelcontrol.coljuegos.gov.co/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Toma el Control
                </a>
                {" "}o llama a la linea de ayuda: <a href="tel:018000112123" className="text-primary hover:underline">01 8000 112 123</a>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Aviso Legal:</strong> juegorating.site es un sitio web informativo y comparativo. 
                No operamos ningun casino, no aceptamos apuestas, no procesamos depositos ni retiros. 
                Toda la informacion proporcionada es con fines educativos. Los casinos mostrados estan 
                autorizados y regulados por Coljuegos (Empresa Industrial y Comercial del Estado).
              </p>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary transition-transform group-hover:scale-110">
                <Trophy className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">JuegoRating</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Tu guia confiable para encontrar los mejores casinos online en Colombia. 
              Comparamos licencias, bonos, metodos de pago y experiencia de usuario.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Enlaces Rapidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Help */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contacto y Ayuda</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@juegorating.site</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Colombia</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Recursos de ayuda:</p>
              {helpLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary hover:underline mb-1"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} JuegoRating. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Este sitio no es un casino. Es una plataforma informativa independiente.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
