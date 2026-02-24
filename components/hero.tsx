"use client";

import { motion, Variants } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";

export const Hero = () => {
  const text = "Architecting Scalable Web Applications.";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
    }),
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center pt-24"
      id="home"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl z-10"
      >
        <motion.div
          variants={childVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 text-[#14B8A6] text-sm mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14B8A6]"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#F8FAFC] leading-tight mb-6">
          {text.split("").map((word, index) => (
            <motion.span variants={childVariants} key={index}>
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={childVariants}
          className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed gap-6"
        >
          I&apos;m Sudipta Das, a Full Stack Web Developer with 1+ year of
          professional experience building impactful, clean, and scalable web
          solutions using the MERN stack and Next.js.
        </motion.p>

        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-[#F8FAFC] text-[#090D14] px-8 py-3 rounded-full font-semibold hover:bg-white transition-all transform hover:scale-105 active:scale-95"
          >
            Explore My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/shiningsudipto"
              target="_blank"
              rel="noreferrer"
              className="p-3 text-[#94A3B8] hover:text-[#F8FAFC] rounded-full hover:bg-white/5 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sudiptadas-dev"
              target="_blank"
              rel="noreferrer"
              className="p-3 text-[#94A3B8] hover:text-[#F8FAFC] rounded-full hover:bg-white/5 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating 3D/Abstract element backdrop */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotateX: [0, 10, -10, 0],
          rotateY: [0, -15, 15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full border-dashed opacity-20 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          rotateX: [0, -10, 10, 0],
          rotateY: [0, 15, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#14B8A6]/20 rounded-full opacity-30 pointer-events-none"
      />
    </section>
  );
};
