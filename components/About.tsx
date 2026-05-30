"use client";

import { GraduationCap, User } from "lucide-react";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="section-container">
      <FadeIn>
        <h2 className="section-heading gradient-text">About Me</h2>
        <p className="mt-2 text-zinc-500">Who I am and what I do</p>
      </FadeIn>

      <div className="mt-12 grid gap-6 md:grid-cols-5">
        <FadeIn className="md:col-span-3" delay={0.1}>
          <div className="glass-card-hover flex h-full flex-col gap-6 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20">
                <User className="h-10 w-10 text-accent-cyan" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-white">Himanshu Pandey</h3>
                <p className="text-sm text-accent-cyan">Data Science & ML Engineer</p>
              </div>
            </div>
            <p className="leading-relaxed text-zinc-400">
              I&apos;m Himanshu Pandey, a BS Data Science student at IIT Madras with a passion for building end-to-end ML systems. From algorithmic trading pipelines to time-series forecasting models, I love turning raw data into intelligent, production-grade solutions. Currently interning at Shodhshala where I engineer features, backtest strategies, and monitor live trading models.
            </p>
          </div>
        </FadeIn>
        <FadeIn className="md:col-span-2" delay={0.2}>
          <div className="glass-card-hover flex h-full flex-col gap-4 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-accent-purple/20 p-2.5"><GraduationCap className="h-5 w-5 text-accent-purple" /></div>
              <h3 className="font-heading text-lg font-semibold text-white">Education</h3>
            </div>
            <div>
              <p className="font-medium text-white">IIT Madras</p>
              <p className="text-sm text-zinc-400">B.Sc. Data Science & Applications</p>
              <p className="mt-1 text-xs text-zinc-500">Sept 2023 – Aug 2026</p>
            </div>
            <div className="mt-2 border-t border-white/10 pt-4">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Coursework</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Data Structures", "Machine Learning", "DBMS", "Statistics"].map((course) => (
                  <span key={course} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{course}</span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}