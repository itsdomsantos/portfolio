import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Competências"
          title="Skills & Tecnologias"
          subtitle="As ferramentas com que trabalho no dia a dia."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((grupo, i) => (
            <Reveal key={grupo.categoria} delay={i * 0.1}>
              <div className="glass h-full rounded-3xl p-7">
                <h3 className="mb-5 text-lg font-bold text-white">
                  {grupo.categoria}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {grupo.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] px-3.5 py-2 text-sm text-white/80 ring-1 ring-white/10 transition-colors hover:text-white hover:ring-fuchsia-400/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
