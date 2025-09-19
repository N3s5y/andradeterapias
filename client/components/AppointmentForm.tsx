import { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    profession: "",
    sports: "",
    birthday: "",
    surgery: "",
    complaint: "",
    illness: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Format the message for WhatsApp
    const whatsappMessage = `*Ficha do Paciente - Andrade Terapias*

Seja bem-vindo(a) 👋🏻
Preencha a ficha e logo retornaremos o contato. Aguarde um momento, o terapeuta pode estar ocupado! 🙏🏻

*Ficha do paciente*
*Nome:* ${formData.name}
*Idade:* ${formData.age}
*Sexo:* ${formData.gender}
*Peso:* ${formData.weight}
*Altura:* ${formData.height}
*Profissão:* ${formData.profession}
*Esporte/ativ. Física:* ${formData.sports}
*Aniversário:* ${formData.birthday}

*Alguma cirurgia?*
R= ${formData.surgery}

*Queixa: O que o fez procurar a massoterapia/quiropraxia?*
R= ${formData.complaint}

*Gripe, moléstia ou tumor atualmente?*
R= ${formData.illness}

Lugar livre de preconceitos`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number (remove any formatting and add country code)
    const whatsappNumber = "5511993215744";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setSubmitStatus({
      type: "success",
      message: "Redirecionando para WhatsApp com sua ficha preenchida!",
    });
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: "",
        age: "",
        gender: "",
        weight: "",
        height: "",
        profession: "",
        sports: "",
        birthday: "",
        surgery: "",
        complaint: "",
        illness: "",
      });
      setSubmitStatus({ type: null, message: "" });
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold mb-4 font-subtitle">Seja bem-vindo(a) 👋🏻</h3>
        <p className="text-gray-600 font-body">
          Preencha a ficha e logo retornaremos o contato. Aguarde um momento, o terapeuta pode estar ocupado! 🙏🏻
        </p>
      </div>

      <h4 className="text-lg font-bold mb-6 font-subtitle">Ficha do paciente</h4>

      {/* Status Messages */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            submitStatus.type === "success"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome */}
        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Nome: *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          />
        </div>

        {/* Idade */}
        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Idade: *
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            min="1"
            max="120"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          />
        </div>

        {/* Sexo */}
        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Sexo: *
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          >
            <option value="">Selecione...</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        {/* Peso */}
        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Peso: *
          </label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            required
            placeholder="Ex: 70kg"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          />
        </div>

        {/* Altura */}
        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Altura: *
          </label>
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            required
            placeholder="Ex: 1,75m"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          />
        </div>

        {/* Profissão */}
        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Profissão: *
          </label>
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          />
        </div>

        {/* Esporte/Atividade Física */}
        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Esporte/ativ. Física: *
          </label>
          <input
            type="text"
            name="sports"
            value={formData.sports}
            onChange={handleInputChange}
            required
            placeholder="Ex: Futebol, Academia, Corrida, Nenhuma"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          />
        </div>

        {/* Aniversário */}
        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Aniversário: *
          </label>
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          />
        </div>

        {/* Alguma cirurgia */}
        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Alguma cirurgia? *
          </label>
          <textarea
            name="surgery"
            value={formData.surgery}
            onChange={handleInputChange}
            required
            rows={2}
            placeholder="Descreva se já passou por alguma cirurgia ou digite 'Não' se nunca fez"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          />
        </div>

        {/* Queixa */}
        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Queixa: O que o fez procurar a massoterapia/quiropraxia? *
          </label>
          <textarea
            name="complaint"
            value={formData.complaint}
            onChange={handleInputChange}
            required
            rows={3}
            placeholder="Descreva sua dor, desconforto ou motivo da consulta..."
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          />
        </div>

        {/* Gripe, moléstia ou tumor */}
        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Gripe, moléstia ou tumor atualmente? *
          </label>
          <textarea
            name="illness"
            value={formData.illness}
            onChange={handleInputChange}
            required
            rows={2}
            placeholder="Descreva se está com alguma dessas condições ou digite 'Não'"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 font-bold transition-colors font-body ${
            isSubmitting
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-brand text-black hover:bg-brand-dark"
          }`}
        >
          {isSubmitting ? "ABRINDO WHATSAPP..." : "ENVIAR VIA WHATSAPP"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500 mb-2 font-body">
          * Campos obrigatórios. Você será redirecionado para o WhatsApp com sua ficha preenchida.
        </p>
        <p className="text-sm text-brand font-medium italic">
          Lugar livre de preconceitos
        </p>
      </div>
    </div>
  );
};

export default AppointmentForm;
