"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";
import FadeIn from "./FadeIn";

const badgeStyles = {
  cyan: "border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/15 hover:border-accent-cyan/40",
  purple:
    "border-accent-purple/25 bg-accent-purple/10 text-violet-300 hover:bg-accent-purple/15 hover:border-accent-purple/40",
};

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <FadeIn>
        <h2 className="section-heading gradient-text">Tech Stack</h2>
        <p className="mt-2 text-zinc-500">
          Tools and technologies I use — aligned with my{" "}
          <a
            href="https://github.com/Anzay12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-cyan underline-offset-2 hover:underline"
          >
            GitHub profile
          </a>
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, catIndex) => (
          <FadeIn key={category.title} delay={catIndex * 0.06}>
            <motion.div
              className="glass-card-hover h-full p-5 md:p-6"
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 flex items-center gap-2.5 border-b border-white/10 pb-3">
                <span className="text-xl">{category.icon}</span>
                <h3 className="font-heading text-base font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className={cn(
                      "rounded-md border px-2.5 py-1 text-xs font-semibold tracking-wide transition-all duration-200",
                      badgeStyles[category.accent]
                    )}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
