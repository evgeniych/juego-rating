"use client"

import Link from "next/link"
import { ArrowLeft, Compass, Home, LifeBuoy } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/30 flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide">
              <span className="text-xs">Ошибка</span>
              <span className="text-base">404</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Страница не найдена</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Похоже, что ссылка устарела или была набрана с ошибкой. Давайте вернёмся на главную и подберём лучший казино для вас.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/">
                  <Home className="w-5 h-5" /> На главную
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/#ranking">
                  <Compass className="w-5 h-5" /> Смотреть рейтинг
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="gap-2">
                <Link href="/contacto">
                  <LifeBuoy className="w-5 h-5" /> Нужна помощь?
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-primary/30 bg-card/70 backdrop-blur">
                <CardContent className="p-6 space-y-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Найдите топ-казино</h3>
                  <p className="text-sm text-muted-foreground">Перейдите к нашему рейтингу и выберите проверенного оператора.</p>
                  <Link href="/#ranking" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                    К рейтингу
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-card/70 backdrop-blur">
                <CardContent className="p-6 space-y-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <Home className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Вернуться домой</h3>
                  <p className="text-sm text-muted-foreground">Исследуйте подборки бонусов, платежей и отзывов на главной.</p>
                  <Link href="/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                    На главную
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-card/70 backdrop-blur">
                <CardContent className="p-6 space-y-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <LifeBuoy className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Свяжитесь с нами</h3>
                  <p className="text-sm text-muted-foreground">Есть вопросы? Напишите в раздел «Контакты» — мы подскажем.</p>
                  <Link href="/contacto" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                    Связаться
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
