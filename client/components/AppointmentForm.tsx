import { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    const whatsappMessage = `*Nova Solicitação de Agendamento - Andrade Terapias*

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
*Data Preferida:* ${formData.preferredDate}${formData.message ? `
*Mensagem:* ${formData.message}` : ''}`;

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
      message: "Redirecionando para WhatsApp com suas informações preenchidas!",
    });

    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        message: "",
      });
      setSubmitStatus({ type: null, message: "" });
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-6 font-subtitle">Agendamento Online</h3>

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
        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Nome *
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

        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            E-mail *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Telefone *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Data Preferida *
          </label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleInputChange}
            required
            min={new Date().toISOString().split("T")[0]} // Prevent past dates
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 font-body">
            Mensagem
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent font-body"
            placeholder="Descreva brevemente sua condição ou motivo da consulta..."
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

      <p className="text-xs text-gray-500 mt-4 font-body">
        * Campos obrigatórios. Você será redirecionado para o WhatsApp com suas informações preenchidas.
      </p>
    </div>
  );
};

export default AppointmentForm;
