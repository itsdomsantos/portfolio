"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { Github, Linkedin, Twitter } from "./icons";
import { site } from "@/data/site";

const socials = [
  { href: site.redes.github, Icon: Github, label: "GitHub" },
  { href: site.redes.linkedin, Icon: Linkedin, label: "LinkedIn" },
  { href: site.redes.twitter, Icon: Twitter, label: "Twitter" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        {site.disponivel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m <span className="text-gradient">{site.nome}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl"
        >
          <span className="font-semibold text-white/90">{site.profissao}.</span>{" "}
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-2 text-sm text-white/50"
        >
          <MapPin size={16} />
          {site.localizacao}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-700 to-rose-900 px-6 py-3.5 font-semibold text-white shadow-xl shadow-red-900/40 transition-transform hover:scale-105"
          >
            Work with me
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#projetos"
            className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white/90 transition-colors hover:bg-white/10"
          >
            View projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="glass rounded-xl p-3 text-white/70 transition-colors hover:text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <a
        href="#sobre"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-white/80"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </a>
    </section>
  );
}
