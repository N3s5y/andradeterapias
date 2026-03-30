import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Course() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider break-words mb-6 max-w-4xl leading-tight font-title">
            Aprenda Massagem e Terapia Corporal
          </h1>
          <p className="text-brand text-lg md:text-xl lg:text-2xl font-light mb-8 max-w-2xl font-subtitle">
            Desenvolvimento profissional com metodologia exclusiva
          </p>
          <Link
            to="/"
            className="bg-brand text-black px-8 py-4 text-lg font-bold tracking-wider hover:bg-brand-dark transition-colors duration-200"
          >
            VOLTAR AO INÍCIO
          </Link>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-brand h-1 w-12 mb-6"></div>
            <h2 className="text-3xl font-bold mb-8 font-title">Sobre o Curso</h2>
            
            <p className="text-gray-600 mb-6 font-body">
              Descubra a metodologia revolucionária da Andrade Terapias. Aprenda técnicas avançadas de massoterapia e quiropraxia aplicadas de forma estratégica e sequencial.
            </p>
            
            <p className="text-gray-600 mb-6 font-body">
              Nosso curso é desenvolvido para profissionais que buscam oferecer tratamentos precisos, profundos e personalizados. Cada aluno recebe treinamento baseado em protocolos exclusivos que respeitam as respostas fisiológicas do corpo.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-6 font-subtitle">O que você vai aprender:</h3>
              <ul className="space-y-3 text-gray-600 font-body">
                <li className="flex items-start">
                  <span className="text-brand mr-3">✓</span>
                  <span>Técnicas avançadas de massagem terapêutica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3">✓</span>
                  <span>Ajustes quiropráticos e manipulações</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3">✓</span>
                  <span>Anamnese completa e avaliação corporal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3">✓</span>
                  <span>Protocolos personalizados para diferentes casos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3">✓</span>
                  <span>Recovery de atletas e reabilitação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3">✓</span>
                  <span>Técnicas integradas: Shiatsu, Drenagem Linfática, Liberação Miofascial e mais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 font-title">Quer participar?</h2>
          <p className="text-gray-600 mb-8 font-body max-w-2xl mx-auto">
            Entre em contato conosco para mais informações sobre datas, horários e valores do curso.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700 font-body">
              <strong>WhatsApp:</strong> <a href="https://wa.me/5511993215744" className="text-brand hover:underline">+55 11 99321-5744</a>
            </p>
            <p className="text-gray-700 font-body">
              <strong>Email:</strong> <a href="mailto:massagemdeverdade@gmail.com" className="text-brand hover:underline">massagemdeverdade@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-black">AT</span>
              </div>
              <div>
                <div className="font-bold">ANDRADE</div>
                <div className="font-bold">TERAPIAS</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
