import Reveal from "./Reveal";
import { sobre, site } from "@/data/site";

export default function About() {
  return (
    <section id="sobre" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        {/* Avatar / cartão visual */}
        <Reveal className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-fuchsia-500/40 to-indigo-500/40 blur-2xl" />
            <div className="glass relative flex h-64 w-64 items-center justify-center rounded-[2rem] sm:h-72 sm:w-72">
              <span className="bg-gradient-to-tr from-fuchsia-400 to-indigo-400 bg-clip-text text-8xl font-black text-transparent">
                {site.nome
                  .split(" ")
                  .map((p) => p[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <div>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
              Sobre mim
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Um pouco da minha história
            </h2>
          </Reveal>

          {sobre.paragrafos.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <p className="mt-5 leading-relaxed text-white/70">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {sobre.destaques.map((d) => (
                <div key={d.label} className="glass rounded-2xl p-4 text-center">
                  <div className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-3xl font-extrabold text-transparent">
                    {d.valor}
                  </div>
                  <div className="mt-1 text-xs text-white/60">{d.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
