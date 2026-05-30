"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <FadeIn>
        <h2 className="section-heading gradient-text">Projects</h2>
        <p className="mt-2 text-zinc-500">Selected work and case studies</p>
      </FadeIn>

      <motion.div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.1}>
            <motion.article
              className="glass-card-hover group flex h-full flex-col p-6"
              whileHover={{ y: -6 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-2xl">{project.emoji}</span>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block font-heading text-lg font-semibold text-white transition-colors hover:text-accent-cyan"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <h3 className="mt-2 font-heading text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  )}
                  <p className="text-sm text-zinc-500">{project.subtitle}</p>
                </div>
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-400 transition-all hover:border-accent-cyan/40 hover:text-accent-cyan"
                    whileHover={{ scale: 1.1 }}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub className="h-4 w-4" />
                  </motion.a>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-accent-purple/20 bg-accent-purple/5 px-2 py-0.5 text-xs text-accent-purple"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-4 flex-1 list-disc space-y-2 pl-4 marker:text-accent-cyan/60">
                {project.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-zinc-400"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent-cyan transition-colors hover:text-white"
                >
                  <FaGithub className="h-4 w-4" />
                  View Repository
                </a>
              )}
            </motion.article>
          </FadeIn>
        ))}
      </motion.div>
    </section>
  );
}
