"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const SERVICE_OPTIONS = [
  "Mezanino Metálico",
  "Mezanino Residencial",
  "Cobertura de Vidro",
  "Cobertura Metálica",
  "Esquadrias Blindex",
  "Envidraçamento de Sacada",
  "Box para Banheiro",
  "Automatização de Portão",
  "Reforma de Portão de Alumínio",
  "Reforma Hidráulica",
  "Instalação Elétrica",
  "Outro Serviço",
];

export function TestimonialModal({ isOpen, onClose, onSuccess }: TestimonialModalProps) {
  const [clientName, setClientName] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [serviceProvided, setServiceProvided] = useState(SERVICE_OPTIONS[0]);
  const [customService, setCustomService] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const utils = api.useUtils();

  const createMutation = api.testimonials.create.useMutation({
    onSuccess: async () => {
      setIsSubmitted(true);
      await utils.testimonials.getAll.invalidate();
      if (onSuccess) onSuccess();
      setTimeout(() => {
        resetForm();
        onClose();
      }, 2000);
    },
    onError: (err) => {
      setErrorMessage(err.message || "Ocorreu um erro ao enviar sua avaliação. Tente novamente.");
    },
  });

  const resetForm = () => {
    setClientName("");
    setNeighborhood("");
    setServiceProvided(SERVICE_OPTIONS[0]);
    setCustomService("");
    setRating(5);
    setComment("");
    setIsSubmitted(false);
    setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const finalService = serviceProvided === "Outro Serviço" ? customService : serviceProvided;

    if (!clientName.trim() || clientName.trim().length < 2) {
      setErrorMessage("Por favor, insira seu nome (mínimo 2 caracteres).");
      return;
    }
    if (!neighborhood.trim() || neighborhood.trim().length < 2) {
      setErrorMessage("Por favor, insira seu bairro ou cidade.");
      return;
    }
    if (!finalService.trim()) {
      setErrorMessage("Por favor, informe o serviço realizado.");
      return;
    }
    if (!comment.trim() || comment.trim().length < 5) {
      setErrorMessage("Por favor, escreva um comentário com pelo menos 5 caracteres.");
      return;
    }

    createMutation.mutate({
      clientName: clientName.trim(),
      neighborhood: neighborhood.trim(),
      serviceProvided: finalService.trim(),
      rating,
      comment: comment.trim(),
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => {
            resetForm();
            onClose();
          }}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-colors"
          aria-label="Fechar modal"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="font-head text-2xl font-black text-gray-900">Avaliação Enviada!</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              Muito obrigado por compartilhar sua experiência! Sua avaliação foi registrada e já está visível no site.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-wider">
                Sua Opinião Importa
              </span>
              <h3 className="font-head text-2xl sm:text-3xl font-black text-gray-900 mt-1">
                Deixar uma Avaliação
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Conte-nos sobre a sua experiência com a Azultech Engenharia.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating Picker */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Sua Nota
                </label>
                <div className="flex gap-2 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 transition-transform hover:scale-110 focus:outline-hidden"
                    >
                      <svg
                        className={`w-8 h-8 ${
                          star <= (hoverRating || rating)
                            ? "text-orange-400 fill-current"
                            : "text-gray-300 fill-current"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                  <span className="text-xs font-bold text-gray-500 ml-2">
                    {rating} de 5 estrelas
                  </span>
                </div>
              </div>

              {/* Name & Neighborhood grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João da Silva"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Seu Bairro / Cidade *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Morumbi - SP"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  />
                </div>
              </div>

              {/* Service Provided */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Serviço Realizado *
                </label>
                <select
                  value={serviceProvided}
                  onChange={(e) => setServiceProvided(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all bg-white"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {serviceProvided === "Outro Serviço" && (
                  <input
                    type="text"
                    placeholder="Especifique o serviço"
                    value={customService}
                    onChange={(e) => setCustomService(e.target.value)}
                    className="w-full mt-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  />
                )}
              </div>

              {/* Comment */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Seu Depoimento *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Escreva como foi o atendimento, a execução do projeto, prazo, qualidade..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    onClose();
                  }}
                  className="px-5 py-2.5 text-xs font-bold text-gray-600 hover:text-gray-800 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={createMutation.isPending}
                  className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  {createMutation.isPending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Enviando...
                    </>
                  ) : (
                    "Enviar Avaliação"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
