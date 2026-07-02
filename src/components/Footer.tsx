import { Github, Linkedin } from "./icons";
import { site } from "@/data/site";

const socials = [
  { href: site.redes.github, Icon: Github, label: "GitHub" },
  { href: site.redes.linkedin, Icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <a href="#" className="text-lg font-bold">
            <span className="text-gradient">{site.nome.split(" ")[0]}</span>
            <span className="text-white/60">.</span>
          </a>
          <p className="mt-1 text-sm text-white/50">
            © {new Date().getFullYear()} {site.nome}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="glass rounded-xl p-2.5 text-white/70 transition-colors hover:text-white"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
