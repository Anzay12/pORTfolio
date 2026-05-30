"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "@/lib/data";
import FadeIn from "./FadeIn";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "26anjay06@gmail.com",
    href: "mailto:26anjay06@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "himanshu-pandey12",
    href: socialLinks.linkedin,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Anzay12",
    href: socialLinks.github,
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+91 7652023417",
    href: "tel:+917652023417",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:26anjay06@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-container">
      <FadeIn>
        <h2 className="section-heading gradient-text">Contact</h2>
        <p className="mt-2 text-zinc-500">Let&apos;s connect and build something great</p>
      </FadeIn>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <FadeIn delay={0.1}>
          <div className="glass-card-hover p-6 md:p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-1.5 text-sm font-medium text-accent-cyan">
              <Sparkles className="h-4 w-4" />
              Open to opportunities
            </div>

            <p className="mb-6 text-zinc-400">
              I&apos;m always interested in data science, ML engineering, and
              quant roles. Feel free to reach out!
            </p>

            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all hover:border-white/10 hover:bg-white/5"
                  >
                    <div className="rounded-lg bg-accent-purple/10 p-2.5 group-hover:bg-accent-purple/20">
                      <Icon className="h-4 w-4 text-accent-purple" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">{label}</p>
                      <p className="text-sm font-medium text-zinc-200 group-hover:text-accent-cyan">
                        {value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 p-3 text-zinc-400 hover:border-accent-cyan/30 hover:text-accent-cyan"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 p-3 text-zinc-400 hover:border-accent-cyan/30 hover:text-accent-cyan"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="glass-card-hover flex flex-col gap-4 p-6 md:p-8"
          >
            <h3 className="font-heading text-lg font-semibold text-white">
              Send a Message
            </h3>
            <div>
              <label htmlFor="name" className="mb-1 block text-xs text-zinc-500">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, name: e.target.value }))
                }
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-accent-cyan/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-xs text-zinc-500">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, email: e.target.value }))
                }
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-accent-cyan/50"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-xs text-zinc-500">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, message: e.target.value }))
                }
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-accent-cyan/50"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple py-3 text-sm font-semibold text-dark"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="h-4 w-4" />
              Send Message
            </motion.button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
