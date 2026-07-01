"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "./icons";
import SectionHeading from "./SectionHeading";
import { projetos } from "@/data/site";

export default function Projects() {
  return (
    <section id="projetos" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projetos em destaque"
          subtitle="Uma seleção de trabalhos recentes. Substitui pelos teus projetos reais."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p, i) => (
            <motion.article
              key={p.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass group flex flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Cabeçalho em gradiente */}
              <div
                className={`relative h-40 bg-gradient-to-br ${p.cor} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
                <span className="absolute bottom-4 left-5 text-4xl font-black text-white/90">
                  {p.titulo
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{p.titulo}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                  {p.descricao}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  {p.linkDemo && (
                    <a
                      href={p.linkDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-fuchsia-400"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                  {p.linkRepo && (
                    <a
                      href={p.linkRepo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-fuchsia-400"
                    >
                      <Github size={16} /> Código
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
