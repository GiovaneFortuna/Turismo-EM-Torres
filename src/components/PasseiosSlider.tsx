import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { passeios } from "../data/locais";

export default function PasseiosSlider() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + passeios.length) % passeios.length);
  const next = () => setCurrent((c) => (c + 1) % passeios.length);
  const visible = [0, 1, 2, 3, 4].map((offset) => passeios[(current + offset) % passeios.length]);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {visible.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer flex flex-col">
            <div className="overflow-hidden bg-blue-50 flex items-center justify-center h-48">
              <img src={p.img} alt={p.alt} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-3 text-center flex-1 flex flex-col justify-center">
              <h3 className="font-bold text-blue-900 text-sm leading-tight mb-1">{p.title}</h3>
              <p className="text-gray-500 text-xs">{p.desc}</p>
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
    </div>
  );
}