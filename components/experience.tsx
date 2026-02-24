"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Full-Stack Engineer",
    company: "TechNova Solutions",
    dates: "Jan 2023 - Present",
    impacts: [
      "Architected and deployed a multi-tenant SaaS application using Next.js and Node.js, supporting 10k+ daily active users.",
      "Optimized MongoDB aggregation pipelines, reducing average API response times from 800ms to under 150ms.",
      "Implemented a CI/CD pipeline with GitHub Actions and Docker, reducing deployment time by 40%.",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "Docker", "AWS"],
  },
  {
    id: 2,
    role: "MERN Stack Developer",
    company: "Creative Labs Inc.",
    dates: "Jun 2021 - Dec 2022",
    impacts: [
      "Led the frontend team to migrate a legacy React application to Next.js, improving SEO scores by 35%.",
      "Designed robust RESTful APIs using Express.js and integrated them with third-party payment gateways like Stripe.",
      "Integrated Redux for complex state management across 50+ interactive pages, improving code maintainability.",
    ],
    stack: ["React", "Express.js", "Redux", "Stripe", "PostgreSQL"],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 max-w-5xl mx-auto z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
          Professional <span className="text-[#14B8A6]">Experience</span>
        </h2>
        <p className="text-[#94A3B8] mb-16 max-w-2xl text-lg">
          A track record of building production-grade systems and optimizing
          architectures.
        </p>
      </motion.div>

      <div className="relative border-l border-white/10 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-16 relative pl-8 md:pl-10"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-[#14B8A6] ring-4 ring-[#090D14]" />

            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h3 className="text-xl md:text-2xl font-semibold text-[#F8FAFC]">
                {exp.role}{" "}
                <span className="text-[#8B5CF6]">@ {exp.company}</span>
              </h3>
              <span className="text-[#94A3B8] text-sm md:text-base font-mono bg-white/5 py-1 px-3 rounded-md mt-2 md:mt-0 w-fit">
                {exp.dates}
              </span>
            </div>

            <ul className="mt-4 space-y-3">
              {exp.impacts.map((impact, i) => (
                <li
                  key={i}
                  className="text-[#94A3B8] leading-relaxed flex items-start"
                >
                  <span className="text-[#14B8A6] mr-3 mt-1.5 text-xs">▹</span>
                  {impact}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium text-[#F8FAFC] bg-white/5 border border-white/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
