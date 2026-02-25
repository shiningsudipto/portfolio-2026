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
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center"
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
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
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
          I&apos;m Sudipta Das, a Full Stack Web Developer with 2+ year of
          professional experience building impactful, clean, and scalable web
          solutions.
        </motion.p>

        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={() => {
              const lenis = (window as any).lenis;
              if (lenis) lenis.scrollTo("#projects");
            }}
            className="group flex items-center gap-2 bg-[#F8FAFC] text-[#090D14] px-8 py-3 rounded-full font-semibold hover:bg-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Explore My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
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

      {/* Background Animated Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-linear-to-bl from-primary to-secondary rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-linear-to-tr from-secondary to-[#090D14] rounded-full blur-[100px]"
        />
      </div>

      {/* Diagonal Grid - Synthwave */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute -inset-full bg-[linear-gradient(to_right,rgba(236,72,153,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,72,153,0.15)_1px,transparent_1px)] bg-size-[60px_60px]"
          style={{ transform: "rotate(45deg) scale(1.5)" }}
        />
        <div
          className="absolute -inset-full bg-[linear-gradient(to_right,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-size-[120px_120px]"
          style={{ transform: "rotate(45deg) scale(1.5)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 20%, #090D14 70%)",
          }}
        />
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[
          { top: "10%", left: "80%", delay: 0 },
          { top: "30%", left: "50%", delay: 1.2 },
          { top: "5%", left: "90%", delay: 2.5 },
          { top: "60%", left: "70%", delay: 0.5 },
          { top: "40%", left: "95%", delay: 1.8 },
          { top: "80%", left: "60%", delay: 2.1 },
          { top: "20%", left: "100%", delay: 0.8 },
          { top: "70%", left: "85%", delay: 1.5 },
        ].map((star, i) => (
          <div
            key={`star-${i}`}
            className="absolute"
            style={{
              top: star.top,
              left: star.left,
              transform: "rotate(315deg)",
            }}
          >
            <div
              className="relative w-[4px] h-[4px] bg-white rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.1),0_0_0_8px_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,1)] before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:w-[300px] before:h-px before:bg-linear-to-r before:from-white before:to-transparent animate-[falling-star_3s_linear_infinite]"
              style={{
                animationDelay: `${star.delay}s`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
