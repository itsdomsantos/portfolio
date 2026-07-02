import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ImageOff, Play } from "lucide-react";
import Background from "@/components/Background";
import Reveal from "@/components/Reveal";
import { Lock } from "@/components/icons";
import { operager } from "@/data/operager";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${operager.nome} — ${operager.subtitulo} · ${site.nome}`,
  description: operager.intro,
};

export default function OperagerPage() {
  return (
    <>
      <Background />

      <main className="mx-auto max-w-5xl px-6 py-16">
        {/* Back link */}
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>

        {/* Header */}
        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-white/80">
              <Lock size={12} /> Private client project
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {operager.status}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">
            <span className="text-gradient">{operager.nome}</span>
          </h1>
          <p className="mt-2 text-xl font-semibold text-white/80 sm:text-2xl">
            {operager.subtitulo}
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/60">
            {operager.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {operager.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Demo */}
        <Reveal className="mt-14">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-red-500">
            Demo
          </h2>
          <div className="glass overflow-hidden rounded-3xl">
            {operager.demoVideo ? (
              <video
                className="aspect-video w-full bg-black"
                src={operager.demoVideo}
                poster={operager.demoPoster || undefined}
                controls
                playsInline
              />
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center bg-gradient-to-br from-red-900/40 to-rose-950/40 text-center">
                <div className="glass flex h-16 w-16 items-center justify-center rounded-full">
                  <Play size={26} className="translate-x-0.5 text-white/80" />
                </div>
                <p className="mt-4 font-medium text-white/70">Demo video coming soon</p>
                <p className="mt-1 text-sm text-white/40">
                  Add it in public/projects/operager/ and set demoVideo in
                  src/data/operager.ts
                </p>
              </div>
            )}
          </div>
        </Reveal>

        {/* Features */}
        <Reveal className="mt-16">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-red-500">
            Key features
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {operager.funcionalidades.map((f) => (
              <div key={f.titulo} className="glass rounded-2xl p-6">
                <h3 className="font-bold text-white">{f.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {f.descricao}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Tech stack */}
        <Reveal className="mt-16">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-red-500">
            Tech stack
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {Object.entries(operager.stack).map(([grupo, itens]) => (
              <div key={grupo} className="glass rounded-2xl p-6">
                <h3 className="mb-4 font-bold text-white">{grupo}</h3>
                <div className="flex flex-wrap gap-2">
                  {itens.map((it) => (
                    <span
                      key={it}
                      className="rounded-xl bg-white/5 px-3 py-1.5 text-sm text-white/80 ring-1 ring-white/10"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Screenshots */}
        <Reveal className="mt-16">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-red-500">
            Screenshots
          </h2>
          {operager.screenshots.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2">
              {operager.screenshots.map((s) => (
                <figure key={s.src} className="glass overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={s.legenda} className="w-full" />
                  <figcaption className="px-4 py-3 text-sm text-white/60">
                    {s.legenda}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="glass flex aspect-video flex-col items-center justify-center rounded-2xl text-center text-white/40"
                >
                  <ImageOff size={24} />
                  <p className="mt-2 text-sm">Screenshot coming soon</p>
                </div>
              ))}
            </div>
          )}
        </Reveal>

        {/* CTA */}
        <Reveal className="mt-20">
          <div className="glass flex flex-col items-center gap-5 rounded-3xl bg-gradient-to-br from-red-900/30 to-rose-950/30 p-10 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Want something like this?
            </h2>
            <p className="max-w-md text-white/60">
              I build custom web platforms, APIs and integrations tailored to how
              your business actually works.
            </p>
            <Link
              href="/#contacto"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-700 to-rose-900 px-6 py-3.5 font-semibold text-white shadow-xl shadow-red-900/40 transition-transform hover:scale-105"
            >
              Request a quote
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </main>
    </>
  );
}
