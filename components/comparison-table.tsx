"use client";

import { Check, X, Star, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { getVisibleCasinos } from "@/lib/casinos-data";
import { addUtmParams } from "@/lib/utils";

export function ComparisonTable() {
  const topCasinos = getVisibleCasinos().slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Comparativa Detallada
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Tabla Comparativa de Casinos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Compara las características más importantes de los mejores casinos online en Colombia de un vistazo.
          </p>
        </AnimatedSection>

        {/* Desktop Table */}
        <AnimatedSection animation="fade-up" delay={0.2} className="hidden lg:block">
          <Card className="bg-card border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left p-4 font-semibold text-foreground">Casino</th>
                    <th className="text-center p-4 font-semibold text-foreground">Rating</th>
                    <th className="text-center p-4 font-semibold text-foreground">Bono</th>
                    <th className="text-center p-4 font-semibold text-foreground">Licencia</th>
                    <th className="text-center p-4 font-semibold text-foreground">App Móvil</th>
                    <th className="text-center p-4 font-semibold text-foreground">Chat 24/7</th>
                    <th className="text-center p-4 font-semibold text-foreground">Retiro Rápido</th>
                    <th className="text-center p-4 font-semibold text-foreground"></th>
                  </tr>
                </thead>
                <tbody>
                  {topCasinos.map((casino, index) => (
                    <tr
                      key={casino.slug}
                      className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{casino.name}</p>
                            <p className="text-xs text-muted-foreground">{casino.established}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-4 h-4 text-accent fill-accent" />
                          <span className="font-semibold text-foreground">{casino.rating}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                          {casino.bonus}
                        </Badge>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-sm text-muted-foreground">{casino.license}</span>
                      </td>
                      <td className="p-4 text-center">
                        {casino.mobileApp ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {casino.liveChat ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {casino.payoutTime.includes("-24") ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                          <a 
                            href={casino.affiliateUrl ? addUtmParams(casino.affiliateUrl) : `/casino/${casino.slug}`} 
                            target="_blank" 
                            rel="noopener noreferrer nofollow"
                            className="casino-cta"
                            data-casino-name={casino.slug}
                            data-cta-location="comparison-table"
                            data-cta-type="visit-casino"
                          >
                            Visitar <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </AnimatedSection>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {topCasinos.map((casino, index) => (
            <AnimatedSection key={casino.slug} animation="fade-up" delay={index * 0.1}>
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </div>
                      <CardTitle className="text-lg">{casino.name}</CardTitle>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="font-semibold">{casino.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Bono:</span>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      {casino.bonus}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Licencia:</span>
                    <span className="text-foreground">{casino.license}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="text-center p-2 bg-secondary/50 rounded-lg">
                      {casino.mobileApp ? (
                        <Check className="w-4 h-4 text-primary mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground mx-auto" />
                      )}
                      <span className="text-xs text-muted-foreground block mt-1">App</span>
                    </div>
                    <div className="text-center p-2 bg-secondary/50 rounded-lg">
                      {casino.liveChat ? (
                        <Check className="w-4 h-4 text-primary mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground mx-auto" />
                      )}
                      <span className="text-xs text-muted-foreground block mt-1">Chat 24/7</span>
                    </div>
                    <div className="text-center p-2 bg-secondary/50 rounded-lg">
                      {casino.payoutTime.includes("-24") ? (
                        <Check className="w-4 h-4 text-primary mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground mx-auto" />
                      )}
                      <span className="text-xs text-muted-foreground block mt-1">Retiro</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2" asChild>
                    <a 
                      href={casino.affiliateUrl ? addUtmParams(casino.affiliateUrl) : `/casino/${casino.slug}`} 
                      target="_blank" 
                      rel="noopener noreferrer nofollow"
                      className="casino-cta"
                      data-casino-name={casino.slug}
                      data-cta-location="comparison-table-mobile"
                      data-cta-type="visit-casino"
                    >
                      Visitar Casino <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
