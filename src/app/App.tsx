import { Camera, UtensilsCrossed, BedDouble, Key } from "lucide-react";

import Hero from "../components/Hero";
import PasseiosSlider from "../components/PasseiosSlider";
import CategoriaGrid from "../components/CategoriaGrid";
import SectionHeader from "../components/SectionHeader";
import Footer from "../components/Footer";

import { gastronomia, hospedagem, vidaNoturna } from "../data/locais";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Hero />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-16">
        <section id="passeios">
          <SectionHeader
            icon={<Camera className="w-8 h-8 text-cyan-600" />}
            title="PASSEIOS"
            subtitle="Aventura, natureza e paisagens incríveis!"
            color="border-cyan-500"
          />
          <PasseiosSlider />
        </section>

        <CategoriaGrid
          id="gastronomia"
          icon={<UtensilsCrossed className="w-8 h-8 text-orange-500" />}
          title="GASTRONOMIA"
          subtitle="Sabores que encantam!"
          color="border-orange-400"
          itens={gastronomia}
        />

        <CategoriaGrid
          id="hospedagem"
          icon={<BedDouble className="w-8 h-8 text-yellow-600" />}
          title="HOSPEDAGEM"
          subtitle="Conforto e acolhimento para você relaxar!"
          color="border-yellow-500"
          itens={hospedagem}
        />

        <CategoriaGrid
          id="Vida Noturna"
          icon={<Key className="w-8 h-8 text-violet-600" />}
          title="Vidas Noturnas"
          subtitle="Tudo o que você precisa para aproveitar a cidade!"
          color="border-violet-500"
          itens={vidaNoturna}
        />
      </main>

      <Footer />
    </div>
  );
}