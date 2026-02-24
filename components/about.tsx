"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full mb-8" />
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
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary z-20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-secondary z-20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />

          <div className="absolute inset-0 md:bg-gradient-to-tr md:from-[#090D14]/50 to-transparent z-10" />
          <Image
            src="/sudipta-das, shiningsudipta, sit-1.png" // using placeholder, should be replaced with real image
            alt="Portrait placeholder"
            width={500}
            height={500}
            quality={100}
            className="w-full h-full object-cover md:filter md:grayscale md:group-hover:grayscale-0 md:transition-all md:duration-700 md:ease-out md:transform md:group-hover:scale-105"
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
            Hello! I&apos;m Sudipta Das, a Full Stack Web Developer specializing
            in architecting scalable and performant web applications. With an
            educational background in Marketing, I excel in aligning web
            development and user experience with genuine business objectives.
          </p>

          <p>
            With expertise in the MERN stack alongside tools like Next.js,
            TypeScript, and Prisma ORM, I focus on solving complex challenges
            and delivering clean, maintainable code. My passion lies in learning
            new technologies to stay ahead of industry trends and applying them
            to build efficient systems.
          </p>

          <p>
            Beyond core development, I bring skills in Graphic Design, Adobe
            Photoshop, Figma, and SEO, allowing me to approach web applications
            with a well-rounded creative and technical perspective.
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
