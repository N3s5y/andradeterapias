import { useState } from "react";
import { AppointmentRequest, AppointmentResponse } from "@shared/api";

const AppointmentForm = () => {
  const [formData, setFormData] = useState<AppointmentRequest>({
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result: AppointmentResponse = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          preferredDate: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Erro ao enviar formulário. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4 font-body">
        * Campos obrigatórios. Entraremos em contato em até 24 horas.
      </p>
    </div>
  );
};

export default AppointmentForm;
