const capaIMG = "/imagens/capa/capa.PNG";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[620px] md:h-[960px] overflow-hidden">
        <img src={capaIMG} alt="Torres" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
        <div className="absolute inset-0 flex items-end justify-center pb-16">
       
        </div>
      </div>
    </section>
  );
}