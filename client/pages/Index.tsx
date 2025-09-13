import Header from "../components/Header";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import { Star, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-title">Andrade Terapias é uma clínica especializada em quiropraxia e massagem terapêutica.</h2>
              <p className="text-gray-600 mb-4 font-body">
                Como uma das principais clínicas especializadas em quiropraxia e massagem terapêutica, 
                oferecemos uma gama completa de serviços para ajudá-lo a retornar à sua saúde e bem-estar ideais.
              </p>
              <p className="text-gray-600 mb-4 font-body">
                Nossa equipe de profissionais altamente qualificados e experientes avaliará sua condição e 
                fornecerá um plano de tratamento individual para ajudá-lo a alcançar seus objetivos.
              </p>
              <p className="text-gray-600">
                Tratamos uma ampla gama de condições e lesões, oferecendo tanto avaliação quanto tratamento 
                para problemas musculoesqueléticos, lesões esportivas e condições de dor crônica.
              </p>
            </div>
            <div className="relative">
              <div className="bg-brand h-1 w-12 mb-6"></div>
              <p className="text-gray-600 italic">
                "Estamos comprometidos em fornecer cuidados de quiropraxia e massagem da mais alta qualidade 
                em um ambiente amigável e profissional."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Massage Centre Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-brand h-1 w-12 mb-6"></div>
              <h2 className="text-3xl font-bold mb-6 font-title">Nossa sala de massagem terapêutica especializada</h2>
              <p className="text-gray-600 mb-4 font-body">
                Temos o prazer de anunciar nossa sala de massagem terapêutica totalmente equipada. 
                Nosso espaço oferece tanto sessões individuais quanto tratamentos personalizados.
              </p>
              <p className="text-gray-600 mb-6 font-body">
                A massagem terapêutica é uma abordagem baseada em evidências que se concentra no 
                alívio da dor, relaxamento muscular e melhoria da circulação sanguínea.
              </p>
              <button className="bg-brand text-black px-6 py-3 font-bold hover:bg-brand-dark transition-colors">
                SAIBA MAIS
              </button>
            </div>
            <div>
              <img 
                src="/pilates-studio.jpg" 
                alt="Sala de massagem terapêutica" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Team Member Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe7aabf8df4f14ee888b3b92af9b9197b%2F5b56f8f5980f41ff93e4ace9d0c3a626?format=webp&width=800"
                alt="Tiago Andrade - Terapeuta"
                className="mx-auto w-full max-w-sm md:max-w-md object-contain rounded-lg"
              />
            </div>
            <div>
              <div className="bg-brand h-1 w-12 mb-6"></div>
              <h2 className="text-3xl font-bold mb-6 font-title">Sobre mim</h2>
              <p className="text-gray-600 mb-4 font-body">
                Meu nome é Tiago Andrade, sou especialista em terapias corporais. Mineiro de origem, cresci em Brasília e atuo profissionalmente em São Paulo desde 2023.
              </p>
              <p className="text-gray-600 mb-4 font-body">
                Além do meu trabalho, também sou atleta de ciclismo, com passagem por diversos esportes ao longo da vida, como skate e artes marciais. Essa vivência esportiva me trouxe experiência prática para compreender melhor as dores, limitações e necessidades de cada corpo.
              </p>
              <p className="text-gray-600 font-body">
                O projeto Andrade Terapias nasceu para transformar a forma como a massagem e as terapias corporais são vistas, elevando o cuidado a um novo nível. Cada protocolo é único, construído de acordo com as queixas, necessidades e objetivos de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Private Treatment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-brand h-1 w-12 mb-6"></div>
              <h2 className="text-3xl font-bold mb-6 font-title">Nossa abordagem</h2>
              <p className="text-gray-600 mb-4 font-body">
                Aqui, não medimos o tempo de sessão como parâmetro, e sim o resultado. Por isso, uma sessão pode variar entre 1h40 a 3h de duração, sempre por um valor único, com foco em:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6 font-body">
                <li>alívio de dores e tensões musculares,</li>
                <li>aumento da mobilidade articular,</li>
                <li>recuperação física,</li>
                <li>redução do estresse mental.</li>
              </ul>
            </div>
            <div className="bg-brand/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 font-subtitle">Técnicas integradas</h3>
              <ul className="space-y-2 text-gray-600 font-body">
                <li>• Shiatsu</li>
                <li>• Drenagem linfática</li>
                <li>• Liberação miofascial</li>
                <li>• Terapias desportivas</li>
                <li>• Ajustes quiropráticos</li>
                <li>• Manipulações inspiradas na osteopatia</li>
                <li>• Alongamentos</li>
                <li>• Relaxamento profundo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Facility Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/clinic-room.jpg" 
                alt="Sala de tratamento moderna da clínica" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="bg-brand h-1 w-12 mb-6"></div>
              <h2 className="text-3xl font-bold mb-6 font-title">Recursos complementares</h2>
              <p className="text-gray-600 mb-4 font-body">Quando necessário, acrescentamos recursos complementares, como:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6 font-body">
                <li>Dry Needling (agulhamento a seco),</li>
                <li>bandagem elástica e rígida (inclusive para suporte em casos de lipedema),</li>
                <li>protocolos para bruxismo,</li>
                <li>recovery esportivo para atletas amadores e profissionais,</li>
                <li>ativações pré-competição,</li>
                <li>massagens relaxantes especiais, como a ayurvédica com os pés, entre outras técnicas avançadas.</li>
              </ul>
              <p className="text-gray-600 mb-4 font-body">
                Independentemente do seu caso, vamos encontrar a melhor forma de cuidar de você. Se houver restrições ou receios, conversaremos e montaremos um protocolo personalizado, seja para homens, mulheres, idosos ou crianças.
              </p>
              <p className="text-gray-600 font-body">
                Nosso espaço é livre de preconceitos e está preparado para oferecer um atendimento de excelência. Venha conhecer a revolução das terapias corporais e viver a experiência de protocolos classe A.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-title">Preencha sua ficha de paciente*</h2>
              <p className="text-gray-600 mb-6 font-body">
                Complete nossa ficha detalhada para que possamos conhecer melhor seu caso e
                oferecer o melhor atendimento. Alternativamente, você pode nos ligar diretamente.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand" />
                  <span className="font-medium">(11) 99321-5744</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-brand" />
                  <span>contato@andradeterapias.com.br</span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center space-x-2 mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-brand text-brand" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Avaliações no Google</p>
              </div>
            </div>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 font-title">Veja o que nossos clientes dizem:</h2>
          <div className="bg-white text-black p-8 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-brand text-brand" />
              ))}
            </div>
            <p className="text-lg mb-4">
              "Excelente atendimento e tratamento profissional. O quiroprático foi muito conhecedor 
              e me ajudou a me recuperar da lesão nas costas muito mais rápido do que esperava."
            </p>
            <p className="font-medium">- Maria S.</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center relative">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-brand mx-auto mb-2" />
              <p className="text-lg font-medium">Andrade Terapias</p>
              <p className="text-gray-600">São Paulo, SP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-black">AT</span>
                </div>
                <div>
                  <div className="font-bold">ANDRADE</div>
                  <div className="font-bold">TERAPIAS</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Especialistas em quiropraxia e massagem terapêutica.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-subtitle">Horário de Funcionamento</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span>8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span>9:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-subtitle">Links Rápidos</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Sobre Nós</div>
                <div>Serviços</div>
                <div>Nossa Equipe</div>
                <div>Agendamentos</div>
                <div>Contato</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-subtitle">Informações de Contato</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@andradeterapias.com.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Andrade Terapias. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
