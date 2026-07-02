"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github, Lock } from "./icons";
import SectionHeading from "./SectionHeading";
import { projetos, type Projeto } from "@/data/site";

export default function Projects() {
  return (
    <section id="projetos" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured projects"
          subtitle="Web apps, APIs and integrations I've built. My latest client work is a fleet & inventory platform."
        />

        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p, i) => (
            <Card key={p.titulo} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ p, index }: { p: Projeto; index: number }) {
  const initials = p.titulo
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className={`glass group flex flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-2 ${
        p.destaque ? "sm:col-span-2" : ""
      }`}
    >
      {/* Media area — screenshot / video / gradient fallback */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${p.cor} ${
          p.destaque ? "h-64 sm:h-80" : "h-40"
        }`}
      >
        {p.video ? (
          <video
            className="h-full w-full object-cover"
            src={p.video}
            poster={p.imagem}
            controls
            playsInline
          />
        ) : p.imagem ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="h-full w-full object-cover"
            src={p.imagem}
            alt={p.titulo}
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
            <span className="absolute bottom-4 left-5 text-4xl font-black text-white/90">
              {initials}
            </span>
          </>
        )}

        {p.privado && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/15 backdrop-blur">
            <Lock size={12} /> Private
          </span>
        )}
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

        <div className="mt-5 flex items-center gap-4">
          {p.linkDemo && (
            <a
              href={p.linkDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-red-500"
            >
              <ExternalLink size={16} /> Live demo
            </a>
          )}
          {p.linkRepo && (
            <a
              href={p.linkRepo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-red-500"
            >
              <Github size={16} /> View on GitHub
            </a>
          )}
          {p.privado && !p.linkDemo && !p.linkRepo && (
            <span className="inline-flex items-center gap-1.5 text-sm text-white/45">
              <Lock size={14} /> Private client project
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
