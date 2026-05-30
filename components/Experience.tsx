"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <FadeIn>
        <h2 className="section-heading gradient-text">Experience</h2>
        <p className="mt-2 text-zinc-500">
          Where I&apos;ve worked and what I&apos;ve built
        </p>
      </FadeIn>

      <div className="relative mt-12">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent md:left-1/2 md:-translate-x-px" aria-hidden />

        <FadeIn delay={0.1}>
          <div className="relative pl-10 md:pl-0">
            <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent-cyan bg-dark shadow-glow md:left-1/2 md:-translate-x-1/2">
              <div className="h-2 w-2 rounded-full bg-accent-cyan" />
            </div>

            <div className="glass-card-hover p-6 md:mx-auto md:max-w-2xl md:ml-[calc(50%+2rem)]">
              <div className="flex flex-wrap items-start gap-3">
                <div className="rounded-xl bg-accent-cyan/10 p-2.5">
                  <Briefcase className="h-5 w-5 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {experience.company}
                  </h3>
                  <p className="text-accent-cyan">{experience.role}</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {experience.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {experience.location}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {experience.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
