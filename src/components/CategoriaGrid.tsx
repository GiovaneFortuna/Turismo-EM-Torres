import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

type Item = { img: string; title: string; desc: string };

export default function CategoriaGrid({
  id,
  icon,
  title,
  subtitle,
  color,
  itens,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
  itens: Item[];
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (itens.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % itens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [itens.length]);

  if (itens.length === 0) {
    return null;
  }

  const prev = () => setCurrent((c) => (c - 1 + itens.length) % itens.length);
  const next = () => setCurrent((c) => (c + 1) % itens.length);

  const visible = [0, 1, 2, 3, 4].map((offset) => itens[(current + offset) % itens.length]);

  return (
    <section id={id}>
      <SectionHeader icon={icon} title={title} subtitle={subtitle} color={color} />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {visible.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer">
            <div className="h-36 overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-3 text-center">
              <h3 className="font-bold text-gray-800 text-sm leading-tight mb-1">{item.title}</h3>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button onClick={prev} className="w-10 h-10 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white flex items-center justify-center shadow transition-all hover:scale-110">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="w-10 h-10 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white flex items-center justify-center shadow transition-all hover:scale-110">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}