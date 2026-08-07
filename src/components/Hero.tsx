const capaDesktop = "/imagens/capa/capa.PNG";
const capaMobile = "/imagens/capa/capa_mobile.png";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Capa mobile */}
      <img
        src={capaMobile}
        alt="Turismo em Torres"
        className="block sm:hidden absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Capa desktop */}
     {/* Capa desktop */}
<img
  src={capaDesktop}
  alt="Turismo em Torres"
  className="hidden sm:block w-full h-full object-cover object-[center_5%]"
/>

      {/* Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />

    </section>
  );
}