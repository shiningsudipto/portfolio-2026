"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 max-w-5xl mx-auto z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
          About <span className="text-[#14B8A6]">Me</span>
        </h2>
        <div className="w-20 h-1 bg-[#14B8A6] rounded-full mb-8" />
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side: Image/Visual Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-5/12 aspect-[4/5] relative rounded-2xl overflow-hidden group border border-white/10 bg-white/5"
        >
          {/* Decorative frame elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#14B8A6] z-20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#8B5CF6] z-20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />

          <div className="absolute inset-0 bg-gradient-to-tr from-[#090D14]/80 to-transparent z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/api/placeholder/400/500" // using placeholder, should be replaced with real image
            alt="Portrait placeholder"
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full md:w-7/12 flex flex-col justify-center space-y-6 text-[#94A3B8] text-lg leading-relaxed"
        >
          <p>
            Hello! I&apos;m a Full-Stack MERN Developer specializing in
            architecting scalable and performant web applications. With over 2
            years of professional experience, my engineering philosophy revolves
            around writing clean, testable code and building resilient systems
            that solve real business problems.
          </p>

          <p>
            My journey began when I started automating small tasks during
            college, which quickly escalated into a deep dive into the
            Javascript ecosystem. Today, I build dynamic frontends with React &
            Next.js and power them with robust Node.js architectures in the
            backend.
          </p>

          <p>
            When I&apos;m not writing code, you&apos;ll probably find me
            exploring new tech paradigms, contributing to open source, or trying
            to optimize my personal workflows. I believe good engineering is a
            mix of structure, creativity, and constant iteration.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
            <div>
              <span className="block text-[#F8FAFC] font-semibold text-xl mb-1">
                Location
              </span>
              <span className="text-sm font-mono">Global / Remote</span>
            </div>
            <div>
              <span className="block text-[#F8FAFC] font-semibold text-xl mb-1">
                Interest
              </span>
              <span className="text-sm font-mono">System Design, UI/UX</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
