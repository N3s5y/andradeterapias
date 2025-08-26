import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
        style={{
          backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2Fe7aabf8df4f14ee888b3b92af9b9197b%2F0fa7fb6728714bd6b685658883700fdf?format=webp&width=800')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Subtitle */}
        <p className="text-brand text-lg md:text-xl lg:text-2xl italic font-light mb-8 max-w-4xl">
          Especialista em quiropraxia e massagem terapêutica
        </p>

        {/* Main Heading */}
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wider mb-16 max-w-6xl leading-tight">
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
        <button className="bg-brand text-black px-8 py-4 text-lg font-bold tracking-wider hover:bg-brand-dark transition-colors duration-200">
          AGENDAR CONSULTA
        </button>
      </div>

      {/* Contact Text - Vertical on Right */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
        <span className="text-brand text-lg font-bold tracking-[0.3em]">
          CONTATO
        </span>
      </div>
    </section>
  );
};

export default Hero;
