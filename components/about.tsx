"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
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
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full mb-8" />
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side: Image/Visual Placeholder */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ type: "spring", damping: 20, stiffness: 80, delay: 0.2 }}
          className="w-full md:w-5/12 aspect-[4/5] relative rounded-2xl overflow-hidden group border border-white/10 bg-white/5"
        >
          {/* Decorative frame elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary z-20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-secondary z-20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />

          <div className="absolute inset-0 md:bg-gradient-to-tr md:from-[#090D14]/50 to-transparent z-10 pointer-events-none" />
          <motion.div style={{ y }} className="absolute -inset-y-[15%] inset-x-0 w-full">
            <Image
              src="/sudipta-das, shiningsudipta, sit-1.png" // using placeholder, should be replaced with real image
              alt="Portrait placeholder"
              fill
              quality={100}
              className="object-cover md:filter md:grayscale md:group-hover:grayscale-0 md:transition-all md:duration-700 md:ease-out md:transform md:group-hover:scale-105"
            />
          </motion.div>
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
            Hello! I&apos;m Sudipta Das, a Full Stack Software Developer with 3+
            years of experience specializing in the MERN and PERN stacks to
            build high-performance, scalable SaaS platforms and enterprise
            applications.
          </p>

          <p>
            I seamlessly bridge the gap between clean architecture and
            business-centric objectives — leveraging a unique background in
            Marketing alongside professional UI/UX design capabilities to
            deliver premium digital experiences that convert and scale.
          </p>

          <p>
            Beyond engineering, I bring professional design skills with Figma
            and Adobe Photoshop, deep knowledge of Technical SEO and Speed
            Optimization, and hands-on experience with system design and
            DevOps — giving me a well-rounded perspective on what makes a
            great web product.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
            <div>
              <span className="block text-[#F8FAFC] font-semibold text-xl mb-1">
                Location
              </span>
              <span className="text-sm font-mono">Barishal, Bangladesh</span>
            </div>
            <div>
              <span className="block text-[#F8FAFC] font-semibold text-xl mb-1">
                Interest
              </span>
              <span className="text-sm font-mono">
                System Design & Building
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
