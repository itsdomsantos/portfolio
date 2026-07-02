"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

const budgets = ["< $1k", "$1k – $5k", "$5k – $15k", "$15k +"];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [budget, setBudget] = useState<string | null>(null);
  const [erro, setErro] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErro("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("sent");
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="glass overflow-hidden rounded-[2rem]">
          <div className="grid md:grid-cols-[0.85fr_1.15fr]">
            {/* Info column */}
            <div className="relative overflow-hidden bg-gradient-to-br from-red-900/50 via-rose-950/40 to-black/40 p-8 sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.18),transparent_55%)]" />
              <div className="relative">
                <span className="text-sm font-semibold uppercase tracking-widest text-white/80">
                  Let&apos;s talk
                </span>
                <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                  Got a project? <br /> Request a quote.
                </h2>
                <p className="mt-4 text-white/80">
                  Tell me about your idea and I&apos;ll get back to you within
                  24–48h with a no-obligation proposal.
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
                  {site.telefone && (
                    <li className="flex items-center gap-3">
                      <span className="glass rounded-xl p-2.5">
                        <Phone size={18} />
                      </span>
                      {site.telefone}
                    </li>
                  )}
                  <li className="flex items-center gap-3">
                    <span className="glass rounded-xl p-2.5">
                      <MapPin size={18} />
                    </span>
                    {site.localizacao}
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 sm:p-10">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={56} className="text-emerald-400" />
                  <h3 className="mt-5 text-2xl font-bold">Request sent!</h3>
                  <p className="mt-2 max-w-sm text-white/60">
                    Thanks for reaching out. I&apos;ll reply as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setBudget(null);
                    }}
                    className="mt-6 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="input"
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="input"
                      />
                    </Field>
                  </div>

                  <Field label="Estimated budget" htmlFor="budget">
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`rounded-xl px-3.5 py-2 text-sm ring-1 transition-colors ${
                            budget === b
                              ? "bg-red-500/20 text-white ring-red-500/60"
                              : "bg-white/5 text-white/70 ring-white/10 hover:text-white"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="budget" value={budget ?? ""} />
                  </Field>

                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Describe your project, timeline and goals…"
                      className="input resize-none"
                    />
                  </Field>

                  {status === "error" && erro && (
                    <p className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-300 ring-1 ring-red-500/30">
                      {erro}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-700 to-rose-900 px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-900/40 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send request
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
