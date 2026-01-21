import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GamesContent } from "./games-content";

export const metadata: Metadata = {
  title: "Tipos de Juegos de Casino Online | JuegoRating",
  description:
    "Descubre todos los tipos de juegos disponibles en casinos online: tragamonedas, ruleta, blackjack, poker, baccarat y casino en vivo. Guía completa para jugadores colombianos.",
  keywords:
    "juegos casino online, tragamonedas, ruleta online, blackjack, poker, casino en vivo, juegos de azar colombia",
  openGraph: {
    title: "Tipos de Juegos de Casino Online | JuegoRating",
    description: "Guía completa de juegos de casino online para jugadores colombianos.",
    url: "https://juegorating.site/juegos",
  },
};

export default function GamesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <GamesContent />
      </main>
      <Footer />
    </>
  );
}
