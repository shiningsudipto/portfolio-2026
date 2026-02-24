"use client";

import { motion, Variants } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Architecture",
    items: [
      "React.js",
      "Next.js",
      "RTK Query",
      "Zustand",
      "Shadcn UI",
      "TailwindCSS",
      "TypeScript",
    ],
    color: "var(--color-primary)",
  },
  {
    category: "Backend Services",
    items: [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "RESTful APIs",
      "JWT Authentication",
      "Zod (Validation)",
    ],
    color: "var(--color-secondary)",
  },
  {
    category: "Database & Cloud Infrastructure",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Mongoose",
      "Stripe / AmarPay",
      "Figma / Photoshop",
      "SEO",
    ],
    color: "#3B82F6",
  },
];

const floatVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 max-w-6xl mx-auto z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
          Core <span className="text-secondary">Architecture</span>
        </h2>
        <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
          Mastering modern technologies to build resilient, scalable systems
          from the front to the back.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {skillsData.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-8 rounded-2xl bg-white/2 border border-white/5 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: group.color,
                  boxShadow: `0 0 10px ${group.color}`,
                }}
              />
              <h3 className="text-xl font-semibold justify-center text-[#F8FAFC]">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill, i) => (
                <motion.span
                  key={skill}
                  variants={floatVariants}
                  animate="animate"
                  style={{ animationDelay: `${i * 0.2}s` }}
                  className="px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-[#94A3B8] text-sm hover:text-white hover:border-white/30 transition-all cursor-default relative overflow-hidden group"
                >
                  <span className="relative z-10">{skill}</span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-20 p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center"
      >
        <p className="text-[#F8FAFC] text-lg font-medium">
          &quot;A solid architecture is the foundation of any application that
          needs to scale.&quot;
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-[#94A3B8]">
          <span>• System Design</span>
          <span>• Agile / Scrum</span>
          <span>• Clean Code</span>
          <span>• Performance Optimization</span>
        </div>
      </motion.div>
    </section>
  );
};
