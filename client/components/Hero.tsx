import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const videos = [
    "https://cdn.builder.io/o/assets%2Fe7aabf8df4f14ee888b3b92af9b9197b%2F090f90fbba59489b873cf734240ead67?alt=media&token=34026076-0a58-4961-9848-7f84bdd9524c&apiKey=e7aabf8df4f14ee888b3b92af9b9197b",
    "https://cdn.builder.io/o/assets%2Fe7aabf8df4f14ee888b3b92af9b9197b%2F41156b2cee6e4bbfa18978a09034d12c?alt=media&token=54c021b4-0fb9-47a1-b278-6b001a7707f3&apiKey=e7aabf8df4f14ee888b3b92af9b9197b",
  ];
  const [active, setActive] = useState(0);
  const v0Ref = useRef<HTMLVideoElement>(null);
  const v1Ref = useRef<HTMLVideoElement>(null);

  const scrollToForm = () => {
    const formSection = document.getElementById("appointment-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const prepare = (el: HTMLVideoElement | null) => {
      if (!el) return;
      el.muted = true;
      el.defaultMuted = true as any;
      el.volume = 0;
      try {
        el.play().catch(() => {});
      } catch {}
    };
    prepare(v0Ref.current);
    prepare(v1Ref.current);
    const id = setInterval(() => setActive((a) => (a === 0 ? 1 : 0)), 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Videos */}
      <div className="absolute inset-0 grayscale">
        <video
          ref={v0Ref}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${active === 0 ? "opacity-100" : "opacity-0"}`}
          src={videos[0]}
          muted
          defaultMuted
          autoPlay
          loop
          playsInline
          onLoadedMetadata={(e) => {
            e.currentTarget.muted = true;
            e.currentTarget.volume = 0;
          }}
          aria-hidden="true"
        />
        <video
          ref={v1Ref}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${active === 1 ? "opacity-100" : "opacity-0"}`}
          src={videos[1]}
          muted
          defaultMuted
          autoPlay
          loop
          playsInline
          onLoadedMetadata={(e) => {
            e.currentTarget.muted = true;
            e.currentTarget.volume = 0;
          }}
          aria-hidden="true"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Subtitle */}
        <p className="text-brand text-lg md:text-xl lg:text-2xl italic font-light mb-8 max-w-4xl font-subtitle">
          Especialista em massagem terapêutica com quiropraxia
        </p>

        {/* Main Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wider break-words mb-16 max-w-[90vw] md:max-w-6xl leading-tight font-title">
          ORIENTAÇÃO ESPECIALIZADA &<br />
          TRATAMENTO EFICAZ
        </h1>

        {/* Down Arrow */}
        <div className="mb-16">
          <div className="w-12 h-12 border-2 border-brand flex items-center justify-center">
            <ChevronDown className="w-6 h-6 text-brand" />
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToForm}
          className="bg-brand text-black px-8 py-4 text-lg font-bold tracking-wider hover:bg-brand-dark transition-colors duration-200"
        >
          AGENDAR CONSULTA
        </button>
      </div>
    </section>
  );
};

export default Hero;
