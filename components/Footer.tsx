"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark/50">
      <div className="section-container py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-heading text-sm text-zinc-400">
              Designed & Built by{" "}
              <span className="gradient-text font-semibold">
                Himanshu Pandey
              </span>
            </p>
            <p className="mt-1 text-xs text-zinc-600">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { href: socialLinks.github, icon: FaGithub },
              { href: socialLinks.linkedin, icon: FaLinkedin },
              { href: socialLinks.email, icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-accent-cyan"
                whileHover={{ y: -2 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-accent-cyan"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
