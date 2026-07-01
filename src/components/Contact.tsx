"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { site } from "@/data/site";

type Estado = "idle" | "enviando" | "enviado";

const orcamentos = ["< 1.000€", "1.000€ – 5.000€", "5.000€ – 15.000€", "15.000€ +"];

export default function Contact() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [orcamento, setOrcamento] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEstado("enviando");
    // Placeholder: sem backend, simulamos o envio.
    // Liga isto a uma API/serviço (ex.: Formspree, Resend) quando quiseres.
    setTimeout(() => setEstado("enviado"), 1200);
  }

  return (
    <section id="contacto" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="glass overflow-hidden rounded-[2rem]">
          <div className="grid md:grid-cols-[0.85fr_1.15fr]">
            {/* Coluna informativa */}
            <div className="relative overflow-hidden bg-gradient-to-br from-fuchsia-600/40 via-purple-600/30 to-indigo-600/40 p-8 sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.25),transparent_55%)]" />
              <div className="relative">
                <span className="text-sm font-semibold uppercase tracking-widest text-white/80">
                  Vamos falar
                </span>
                <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                  Tens um projeto? <br /> Pede uma proposta.
                </h2>
                <p className="mt-4 text-white/80">
                  Conta-me a tua ideia e respondo em 24–48h com uma proposta
                  sem compromisso.
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="glass rounded-xl p-2.5">
                      <Mail size={18} />
                    </span>
                    <a href={`mailto:${site.email}`} className="hover:underline">
                      {site.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="glass rounded-xl p-2.5">
                      <Phone size={18} />
                    </span>
                    {site.telefone}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="glass rounded-xl p-2.5">
                      <MapPin size={18} />
                    </span>
                    {site.localizacao}
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulário */}
            <div className="p-8 sm:p-10">
              {estado === "enviado" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={56} className="text-emerald-400" />
                  <h3 className="mt-5 text-2xl font-bold">Pedido enviado!</h3>
                  <p className="mt-2 max-w-sm text-white/60">
                    Obrigado pelo contacto. Respondo o mais breve possível.
                  </p>
                  <button
                    onClick={() => {
                      setEstado("idle");
                      setOrcamento(null);
                    }}
                    className="mt-6 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15"
                  >
                    Enviar outro pedido
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nome" htmlFor="nome">
                      <input
                        id="nome"
                        name="nome"
                        required
                        placeholder="O teu nome"
                        className="input"
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        className="input"
                      />
                    </Field>
                  </div>

                  <Field label="Orçamento estimado" htmlFor="orcamento">
                    <div className="flex flex-wrap gap-2">
                      {orcamentos.map((o) => (
                        <button
                          type="button"
                          key={o}
                          onClick={() => setOrcamento(o)}
                          className={`rounded-xl px-3.5 py-2 text-sm ring-1 transition-colors ${
                            orcamento === o
                              ? "bg-fuchsia-500/20 text-white ring-fuchsia-400/60"
                              : "bg-white/5 text-white/70 ring-white/10 hover:text-white"
                          }`}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="orcamento" value={orcamento ?? ""} />
                  </Field>

                  <Field label="Mensagem" htmlFor="mensagem">
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={4}
                      placeholder="Descreve o teu projeto, prazos e objetivos…"
                      className="input resize-none"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={estado === "enviando"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {estado === "enviando" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> A enviar…
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Enviar pedido
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-medium text-white/80">{label}</span>
      {children}
    </label>
  );
}
