import Header from "../components/Header";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import ReviewsSlider from "../components/ReviewsSlider";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />

      {/* Our Approach Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-brand h-1 w-12 mb-6"></div>
          <h2 className="text-3xl font-bold mb-4 font-title">Nossa abordagem</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-0">
            <div className="md:col-span-2">
              <p className="text-gray-600 mb-4 font-body font-semibold">
                Esqueça tudo o que você conhece sobre massagem.
              </p>
              <p className="text-gray-600 mb-4 font-body font-semibold mb-6">
                Aqui não existe protocolo pronto.
              </p>

              <p className="text-gray-600 mb-4 font-body">
                Na Andrade Terapias, cada sessão começa com uma anamnese completa, onde analisamos sua queixa principal, histórico, rotina, postura e padrões de dor.
              </p>

              <p className="text-gray-600 mb-6 font-body">
                A partir disso, criamos protocolos exclusivos, pensados exatamente para o seu caso. O objetivo não é apenas aliviar a dor momentaneamente. É identificar e tratar a raiz do problema — seja ela postural, muscular, articular ou neuromuscular — responsável por:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6 font-body">
                <li>Pontos gatilho</li>
                <li>Nódulos musculares</li>
                <li>Sobrecargas</li>
                <li>Dores recorrentes</li>
              </ul>

              <p className="text-gray-600 mb-4 font-body">
                Cada sessão tem duração média de 2 horas, tempo necessário para investigar, tratar e aprofundar as técnicas que o seu caso exige. Nesse período, aplicamos em média 8 técnicas diferentes, combinadas de forma estratégica, atuando em cada região conforme a sua necessidade específica.
              </p>

              <p className="text-gray-600 font-body">
                <strong>Nada de receita pronta.</strong> <strong>Nada de sessão genérica.</strong> Aqui, o tratamento se adapta a você — e não o contrário.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-brand/10 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 font-subtitle">
                  Técnicas integradas
                </h3>
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

              <div className="bg-brand/10 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 font-subtitle">
                  Diferencial
                </h3>
                <ul className="space-y-3 text-gray-600 font-body">
                  <li>• Atendimento personalizado</li>
                  <li>• Sessões no consultório ou a domicílio</li>
                  <li>• Foco em resultado real e duradouro</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Member Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe7aabf8df4f14ee888b3b92af9b9197b%2F5b56f8f5980f41ff93e4ace9d0c3a626?format=webp&width=800"
                alt="Tiago Andrade - Terapeuta"
                className="mx-auto w-full max-w-sm md:max-w-md object-contain rounded-lg"
              />
            </div>
            <div>
              <div className="bg-brand h-1 w-12 mb-6"></div>
              <h2 className="text-3xl font-bold mb-4 font-title">Sobre mim</h2>
              <p className="text-gray-600 mb-4 font-body">
                Meu nome é Tiago Andrade, sou especialista em massoterapia e atleta de ciclismo. A vivência no esporte me permite compreender, na prática, as demandas do corpo no tratamento da dor e na recuperação física.
              </p>
              <p className="text-gray-600 mb-4 font-body">
                Atuo no tratamento de dores musculoesqueléticas e no recovery de atletas, utilizando uma metodologia própria, onde diferentes técnicas são aplicadas de forma estratégica e sequencial, respeitando as respostas fisiológicas do corpo.
              </p>
              <p className="text-gray-600 font-body">
                O resultado são tratamentos precisos, profundos e personalizados, adaptados à necessidade de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Facility Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe7aabf8df4f14ee888b3b92af9b9197b%2F62db2ca30dc44632adccecd4d403acb1?format=webp&width=800"
                alt="Sala de tratamento moderna da clínica"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="bg-brand h-1 w-12 mb-6"></div>
              <h2 className="text-3xl font-bold mb-4 font-title">
                Recursos complementares
              </h2>
              <p className="text-gray-600 mb-4 font-body">
                Quando necessário, acrescentamos recursos complementares, como:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6 font-body">
                <li>Dry Needling (agulhamento a seco),</li>
                <li>
                  bandagem elástica e rígida (inclusive para suporte em casos de
                  lipedema),
                </li>
                <li>protocolos para bruxismo,</li>
                <li>
                  recovery esportivo para atletas amadores e profissionais,
                </li>
                <li>ativações pré-competição,</li>
                <li>
                  massagens relaxantes especiais, como a ayurvédica com os pés,
                  entre outras técnicas avançadas.
                </li>
              </ul>
              <p className="text-gray-600 mb-4 font-body">
                Independentemente do seu caso, vamos encontrar a melhor forma de
                cuidar de você. Se houver restrições ou receios, conversaremos e
                montaremos um protocolo personalizado, seja para homens,
                mulheres, idosos ou crianças.
              </p>
              <p className="text-gray-600 font-body">
                Nosso espaço é livre de preconceitos e está preparado para
                oferecer um atendimento de excelência. Venha conhecer a
                revolução das terapias corporais e viver a experiência de
                protocolos classe A.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="appointment-form"
        className="py-8 bg-gray-100 overflow-x-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-full">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-title break-words">
                Preencha sua ficha de paciente*
              </h2>
              <p className="text-gray-600 mb-6 font-body">
                Complete nossa ficha detalhada para que possamos conhecer melhor
                seu caso e oferecer o melhor atendimento. Alternativamente, você
                pode nos ligar diretamente.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand" />
                  <span className="font-medium">(11) 99321-5744</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-brand" />
                  <span>massagemdeverdade@gmail.com</span>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center space-x-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-brand text-brand"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Avaliações no Google</p>
                <div className="mt-6 relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.943952473379!2d-46.653228723725!3d-23.570456361928194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef798f4a03273%3A0xae4a14cd897b1d8b!2sTiago%20Andrade%20-%20terapia%20corporal%2C%20massoterapia%2C%20quiropraxia%2C%20massagem!5e0!3m2!1spt-BR!2sbr!4v1758319426835!5m2!1spt-BR!2sbr"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full border-0"
                  ></iframe>
                </div>
              </div>
              <ReviewsSlider
                reviews={[
                  {
                    name: "Silas Oliveira",
                    text: `Um excelente profissional que não quer apenas que o cliente fique pagando e voltando com ele. O Tiago te ensina e te mostra como não precisar tanto do trabalho dele, por se preocupar com o cliente, que se cuide e fique bem. Recomendarei a todos que me perguntarem sobre.`,
                  },
                  {
                    name: "Eduardo Wolk",
                    text: `Excelente a sessão com o Tiago. Ele utiliza várias técnicas para ajudar nas dores e realinhar o corpo.
Marquei minha sessão com ele depois de ler as outras avaliações e foi uma ótima escolha.`,
                  },
                  {
                    name: "Rodrigo Montenegro",
                    text: `O Tiago é um rapaz extremamente profissional! Mas pra além disso, ele olha para seus pacientes com carinho e muito zelo! Já passei por algumas sessões de massoterapia com outros profissionais mas nem de longe alguém chegou a altura do trabalho que ele faz! A sessão é completa, tem momentos para avaliar, para aconselhar e incentivar, momentos para tratar e para relaxar! Fiz questão de vir aqui avaliar apenas no dia seguinte para poder contar tanto sobre o tratamento e o pós, então afirmo: recomendo muito os serviços do Tiago! Dormi muito bem e estou muito feliz por cuidar do meu corpo com um profissional tão bacana! Obrigado mesmo e muito sucesso com seus clientes!`,
                  },
                  {
                    name: "Luis Andreozzi",
                    text: `Muito bom, excelente profissional, Superou minhas expectativas.10/10`,
                  },
                  {
                    name: "Isadora Toledo",
                    text: `O Tiago é sem sombra de dúvida o melhor profissional com quem já realizei tratamento. Já passei por diversos profissionais da saúde (médicos, fisios etc.) mas o trabalho do Tiago foi, de longe, o mais bem executado e com melhores resultados. Faço treinos de alta intensidade e costumo sofrer lesões musculares e articulares (nódulos, contraturas) e o tratamento do Tiago alinha técnicas múltiplas com tamanha qualidade que sempre saio muito melhor de cada sessão (ele é um grande conhecedor de anatomia e desvenda muito rápido a origem de dores e lesões). E por fim, é muito educado, ético e cuidadoso. Recomendo de olhos fechados.`,
                  },
                  {
                    name: "Rafael Luca",
                    text: `O Tiago é excelente massoterapeuta. Faz uma massagem global que engloba também quiropraxia e alongamento. Eu pratico jiu jitsu e musculação há muitos anos continuamente, e já passei por vários massoterapeutas, mas nunca tinha achado alguém que resolvesse bem as minhas dores. O Tiago é realmente diferenciado, recomendo bastante.`,
                  },
                  {
                    name: "Jose Freire",
                    text: `O Tiago… atende cada cliente de uma maneira personalizada!  Superando as expectativas! Criou um protocolo unico q comecou antes do dia do atendimento principal. Desenhou algo que eu nao podia imaginar! Fez a preparacao do meu corpo e fez a melhor massagem modeladora associando tecnicas de alongamento e relaxamento. Impressionante o resultado e sua duracao. So tenho que agradecer ao profissonal. PARABENS.`,
                  },
                  {
                    name: "Jonas Lopes",
                    text: `O Tiago sabe muito bem o que faz. E sabe fazer bem feito. Ele parece ter amor por cada feixe muscular que toca, e só vai pro próximo quando garante que este já está relaxado o suficiente. Ele não tem pressa em seus movimentos, mas não é manso - faz a pressão exata. Aí os feixes musculares parecem retribuir o amor e ficam nas nuvens.

Foi uma sessão maravilhosa, cheia de conhecimento, técnica, profissionalismo e cuidado para comigo.

Obrigado de verdade, e eu volto em breve.`,
                  },
                  {
                    name: "Santiago Ferreyra",
                    text: `Tiago é um ótimo profissional. Respeitoso e educado. Massagens ideais para atletas e para quem procura relaxar, melhorar a capacidade física ou prevenir lesões. altamente recomendado`,
                  },
                  {
                    name: "Márcio Refacho",
                    text: `Procurei por um massoterapeuta próximo a minha localização e encontrei o Tiago. Fiz uma sessão e sai muito satisfeito. O Tiago encontrou vários pontos em mim a serem trabalhados e buscou por realinhar a minha coluna de forma específica às minhas queixas. Ele fez uma leitura da minha coluna. Deu aula!! Além de tudo, super educado e comunicativo.`,
                  },
                  {
                    name: "Raquel ZB",
                    text: `O Tiago é um massoterapeuta super profissional e talentoso. Antes e durante a massagem ele explica todas as técnicas, a melhora que ela vai trazer  e o motivo daquela região estar ruim, fazendo com que você entenda e passe a ter um olhar diferente do seu corpo . Além disso na minha sessão, por meio das técnicas que ele ia usando e me explicando, descobri lugares que tenho que dar muita atenção a minha saúde, esses que eu não tinha o menor conhecimento que estavam me afetando tanto . Durante e depois da sessão o alívio das minhas costas e quadris foi instantâneo! Enfim, foi tudo perfeito e excelente, vale a pena cada segundo !`,
                  },
                  {
                    name: "Herbert Souza",
                    text: `O Tiago é um excelente profissional. Faço com bastante frequência massagem por conta do esporte e posso garantir que a qualidade é muito superior com ele. Obrigado pelo ótimo trabalho.`,
                  },
                  {
                    name: "Bruno Carvalho",
                    text: `Conheci o trabalho do Tiago há cerca de 6 meses e, desde então, não tive mais crise de lombalgia. Um massoterapeuta incrível, com toque preciso e com conhecimento em diversas técnicas que, certamente, colocam a gente no eixo. Obrigado 🫂 e até breve! …`,
                  },
                  {
                    name: "Patricia Z",
                    text: `O Tiago é um massoterapeuta incrível, super atencioso,  cuidadoso, explica cada movimento.
Indico a todos  que façam a massoterapia com esse profissional incrível, é extremamente relaxante  e a sensação é de estar mil vezes mais leve , a gente perde até a noção do tempo. Muito grata ! ����`,
                  },
                ]}
              />
            </div>
            <div id="patient-form">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-black">AT</span>
              </div>
              <div>
                <div className="font-bold">ANDRADE</div>
                <div className="font-bold">TERAPIAS</div>
              </div>
            </div>

            <div className="flex items-center space-x-8">
              <a
                href="https://www.instagram.com/masso.e.quiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://wa.me/5511993215744"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
