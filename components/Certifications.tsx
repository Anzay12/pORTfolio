"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, X } from "lucide-react";
import FadeIn from "./FadeIn";

interface Certificate {
  filename: string;
  src: string;
  name: string;
  issuer: string;
}

function CertificateSkeleton() {
  return (
    <div className="glass-card animate-pulse overflow-hidden">
      <div className="aspect-[4/3] bg-white/5" />
      <div className="space-y-3 p-4">
        <motion.div className="h-4 w-3/4 rounded bg-white/10" />
        <div className="h-3 w-1/2 rounded bg-white/5" />
        <div className="h-9 rounded-lg bg-white/5" />
      </div>
    </div>
  );
}

export default function Certifications() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<Certificate | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetch("/api/certificates")
      .then((res) => res.json())
      .then((data) => setCertificates(data.certificates ?? []))
      .catch(() => setCertificates([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="certifications" className="section-container">
      <FadeIn>
        <h2 className="section-heading gradient-text">
          Professional Certifications
        </h2>
        <p className="mt-2 text-zinc-500">
          Industry credentials across MLOps, cloud, data, and full-stack
          development
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <CertificateSkeleton key={i} />
            ))
          : certificates.map((cert, index) => (
              <FadeIn key={cert.filename} delay={index * 0.08}>
                <motion.div
                  className="glass-card-hover overflow-hidden"
                  whileHover={{ y: -4 }}
                >
                  <div className="relative aspect-[4/3] bg-white/5">
                    {!loadedImages.has(cert.filename) && (
                      <div className="absolute inset-0 animate-pulse bg-white/5" />
                    )}
                    <Image
                      src={cert.src}
                      alt={cert.name}
                      fill
                      className="object-cover object-top transition-opacity duration-300"
                      style={{
                        opacity: loadedImages.has(cert.filename) ? 1 : 0,
                      }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      onLoad={() =>
                        setLoadedImages((prev) =>
                          new Set(prev).add(cert.filename)
                        )
                      }
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-2">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                      <div>
                        <h3 className="font-heading text-sm font-semibold text-white line-clamp-2">
                          {cert.name}
                        </h3>
                        <p className="mt-1 text-xs text-zinc-500">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setLightbox(cert)}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:border-accent-cyan/30 hover:text-accent-cyan"
                    >
                      <Eye className="h-4 w-4" />
                      View Certificate
                    </button>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </motion.button>
            <motion.div
              className="relative max-h-[90vh] max-w-4xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] w-full max-h-[85vh]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.name}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <p className="mt-4 text-center font-heading text-lg text-white">
                {lightbox.name}
              </p>
              <p className="text-center text-sm text-zinc-400">
                {lightbox.issuer}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
