"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Shield, ExternalLink, Check, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn, addUtmParams } from "@/lib/utils"

interface CasinoCardProps {
  rank: number
  name: string
  slug: string
  logo: string
  rating: number
  games: string
  bonus: string
  bonusAmount: string
  payoutTime: string
  license: string
  features: string[]
  isTopRated?: boolean
  affiliateUrl?: string
  className?: string
}

export function CasinoCard({
  rank,
  name,
  slug,
  logo,
  rating,
  games,
  bonus,
  bonusAmount,
  payoutTime,
  license,
  features,
  isTopRated = false,
  affiliateUrl,
  className,
}: CasinoCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-500 hover:shadow-2xl group",
      isTopRated 
        ? "ring-2 ring-primary hover:ring-primary/80 hover:shadow-primary/20" 
        : "hover:shadow-accent/10 hover:border-primary/30",
      className
    )}>
      {isTopRated && (
        <div className="absolute top-0 right-0 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold px-6 py-1.5 transform translate-x-6 translate-y-2 rotate-45 shadow-lg">
            #1 TOP
          </div>
        </div>
      )}
      
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
          {/* Rank & Logo */}
          <div className="flex items-center gap-4">
            <div className={cn(
              "flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full font-bold text-xl transition-all duration-300 group-hover:scale-110",
              rank === 1 
                ? "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-lg shadow-accent/30" 
                : rank <= 3 
                  ? "bg-gradient-to-br from-muted to-secondary text-foreground" 
                  : "bg-secondary text-secondary-foreground"
            )}>
              {rank}
            </div>
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-gradient-to-br from-secondary to-card transition-all duration-300 group-hover:shadow-lg">
              <Image
                src={logo || "/placeholder.svg"}
                alt={`${name} logo`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 64px, 80px"
              />
            </div>
          </div>

          {/* Casino Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
              <Link href={`/casino/${slug}`}>
                <h3 className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors">
                  {name}
                </h3>
              </Link>
              <Badge variant="secondary" className="text-xs gap-1">
                <Gamepad2 className="w-3 h-3" />
                {games} juegos
              </Badge>
            </div>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-4 h-4 md:w-5 md:h-5 transition-all duration-300",
                    i < Math.floor(rating / 2) 
                      ? "fill-accent text-accent" 
                      : "fill-muted text-muted"
                  )}
                />
              ))}
              <span className="ml-2 text-lg md:text-xl font-bold text-foreground">{rating}</span>
              <span className="text-sm text-muted-foreground">/10</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {features.map((feature) => (
                <span 
                  key={feature} 
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-secondary/80 px-2 py-1 rounded-full"
                >
                  <Check className="w-3 h-3 text-primary" />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Bonus */}
          <div className="text-center lg:text-left lg:min-w-[180px] p-4 rounded-xl bg-primary/5 border border-primary/20">
            <div className="text-sm text-muted-foreground mb-1">{bonus}</div>
            <div className="text-xl md:text-2xl font-bold text-primary">{bonusAmount}</div>
          </div>

          {/* Payout & License */}
          <div className="flex flex-row lg:flex-col gap-4 lg:gap-2 text-sm lg:min-w-[140px]">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Retiro</div>
                <span className="text-foreground font-medium">{payoutTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Licencia</div>
                <span className="text-primary font-medium">{license}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-2">
            <a 
              href={affiliateUrl ? addUtmParams(affiliateUrl) : `/casino/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="casino-cta"
              data-casino-name={slug}
              data-cta-location="ranking-card"
              data-cta-type="visit-casino"
            >
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 min-w-[140px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 w-full"
              >
                VISITAR
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            <Link href={`/casino/${slug}`}>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-xs border-border hover:border-primary/50 hover:bg-primary/5 bg-transparent"
              >
                Ver Reseña
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
