import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experiencias } from "@/data/site";

export default function Experience() {
  return (
    <section id="experiencia" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Percurso"
          title="Experiência profissional"
        />

        <div className="relative border-l border-white/10 pl-8">
          {experiencias.map((exp, i) => (
            <Reveal key={exp.cargo + exp.empresa} delay={i * 0.1}>
              <div className="relative pb-12 last:pb-0">
                {/* Ponto na timeline */}
                <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center">
                  <span className="h-4 w-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 ring-4 ring-[#05010f]" />
                </span>

                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold">{exp.cargo}</h3>
                    <span className="text-sm font-medium text-fuchsia-400">
                      {exp.periodo}
                    </span>
                  </div>
                  <p className="mt-1 font-medium text-white/80">{exp.empresa}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {exp.descricao}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
