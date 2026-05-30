"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { typingRoles, socialLinks } from "@/lib/data";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = typingRoles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % typingRoles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-hero-mesh"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <ParticleBackground />

      <motion.div
        className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-accent-cyan/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-accent-purple/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent-cyan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I&apos;m Himanshu Pandey
        </motion.p>

        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-white">I&apos;m a </span>
          <br className="sm:hidden" />
          <span className="gradient-text">
            {displayText}
            <motion.span
              className="inline-block w-[3px] bg-accent-cyan ml-1 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              style={{ height: "0.9em" }}
            />
          </span>
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Building intelligent systems that scale from data to production.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.a
            href="/Himanshu_Resume.pdf"
            download
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple px-8 py-3.5 text-sm font-semibold text-dark shadow-glow transition-all hover:shadow-glow-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Download Resume
          </motion.a>
          <motion.a
            href="#projects"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-accent-cyan/40 hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-10 flex items-center justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {[
            { href: socialLinks.github, icon: FaGithub, label: "GitHub" },
            { href: socialLinks.linkedin, icon: FaLinkedin, label: "LinkedIn" },
            { href: socialLinks.email, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-400 transition-all hover:border-accent-cyan/40 hover:text-accent-cyan hover:shadow-glow"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-zinc-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
