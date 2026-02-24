"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    const lenis = (window as any).lenis;
    if (lenis) lenis.scrollTo(0);
  };

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5 bg-[#090D14] relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Greetings Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-2">
            Thanks for stopping by!
          </h3>
          <p className="text-[#94A3B8]">
            Let&apos;s build something amazing together.
          </p>
        </motion.div>

        {/* Brand & Socials */}
        <div className="w-full grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
          <div className="flex items-center justify-start">
            <button
              onClick={scrollToTop}
              className="text-xl font-bold text-[#F8FAFC] tracking-tighter cursor-pointer group"
            >
              Dev<span className="text-[#14B8A6]">Studio</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/shiningsudipto"
              target="_blank"
              rel="noreferrer"
              className="p-3 text-[#94A3B8] hover:text-[#14B8A6] rounded-full bg-white/5 border border-white/10 hover:border-[#14B8A6]/50 transition-all hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sudiptadas-dev"
              target="_blank"
              rel="noreferrer"
              className="p-3 text-[#94A3B8] hover:text-[#8B5CF6] rounded-full bg-white/5 border border-white/10 hover:border-[#8B5CF6]/50 transition-all hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-[#94A3B8] text-sm flex items-center justify-end gap-2">
            Made with{" "}
            <Heart className="w-4 h-4 text-[#EF4444] fill-[#EF4444]" /> by
            Sudipta © {currentYear}
          </p>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#14B8A6]/10 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
};
