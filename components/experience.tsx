"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 2,
    role: "Full Stack Software Engineer",
    company: "StrategyByte",
    dates: "Sept 2025 - Present",
    impacts: [
      "Lead the frontend development team to architect highly interactive, performance-optimized web architectures and fluid digital interfaces.",
      "Develop end-to-end full-stack applications, implementing automated workflows like dynamic sitemap generation, complex scheduling systems, and AI-driven features.",
      "Orchestrate secure, scalable production server deployments and configurations using Nginx on VPS, managing complex relational and non-relational data schemas across PostgreSQL and MongoDB.",
      "Streamline user conversion funnels by engineering secure payment gateway workflows, third-party authentication, and multi-step modal checkouts.",
    ],
    stack: [
      "Next.js",
      "Zustand",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Express.js",
      "AI",
      "NGINX",
      "VPS Server",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Jayga",
    dates: "Mar 2024 - Sept 2025",
    impacts: [
      "Served as the solo web developer responsible for building user interfaces, business logic, and client/admin portals for a full-featured Warehouse Management System (WMS).",
      "Developed a scalable inventory service platform featuring advanced grid-based asset tracking, real-time delivery tracking, and automated PDF invoice generation modules.",
      "Managed end-to-end frontend architecture with Next.js, Redux Toolkit, and TanStack Table to ensure seamless state management, fast page load speeds, and robust caching.",
    ],
    stack: [
      "Next.js",
      "Redux Toolkit",
      "TanStack Table",
      "TanStack Query",
      "Formik",
      "TailwindCSS",
      "UI/UX",
    ],
  },
  {
    id: 4,
    role: "Intern React Developer",
    company: "Kodezen Limited",
    dates: "Nov 2023 - Feb 2024",
    impacts: [
      "Created dynamic and responsive user interfaces using React for diverse web applications.",
      "Collaborated on building innovative WordPress service plugins to streamline business operations.",
      "Identified and resolved UI-related bugs, improving overall application stability and user experience.",
    ],
    stack: ["React.js", "SCSS", "WordPress", "Frontend Architecture"],
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
          Professional <span className="text-primary">Experience</span>
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
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", damping: 20, stiffness: 80, delay: index * 0.1 }}
            className="mb-16 relative pl-8 md:pl-10"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-[#090D14]" />

            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h3 className="text-xl md:text-2xl font-semibold text-[#F8FAFC]">
                {exp.role}{" "}
                <span className="text-secondary">@ {exp.company}</span>
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
                  <span className="text-primary mr-3 mt-1.5 text-xs">▹</span>
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
