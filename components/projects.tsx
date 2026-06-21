"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github, Package } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  stats: Record<string, string>;
  links: {
    live: string;
    github?: string;
    npm?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Jayga (A Warehouse Management System)",
    description:
      "Developed a full-featured Warehouse Management System (WMS) as a solo web developer, architecting both admin and client portals. Integrated PayStation, email verification, and automated PDF generation while building complex modules for grid-based inventory and delivery tracking.",
    image: "/projects/jayga-s-m-l.png",
    tags: ["React JS", "Redux", "Tanstack Table", "Formik", "TailwindCSS"],
    stats: { Role: "Solo Dev", Type: "WMS", Tech: "React.js" },
    links: {
      live: "https://jayga.io",
    },
  },
  {
    id: 2,
    title: "StrategyByte - AI Powered Portfolio",
    description:
      "Leading the engineering team to architect highly interactive architectures. Integrated AI capabilities to enhance user experience and core functionality while managing complex data schemas across PostgreSQL and MongoDB.",
    image: "/projects/strategybyte-s-m-l.png",
    tags: ["Next.js", "TailwindCSS", "ShadcnUI", "GSAP"],
    stats: { Role: "Lead", Year: "2025", Tech: "Next.js" },
    links: {
      live: "https://strategybyte.com.au",
    },
  },
  {
    id: 3,
    title: "React Customizable Dropdown",
    description:
      "A powerful, flexible, and accessible select component for React. Built with TypeScript, it supports multi-select, async data fetching, and extensive theming options, providing a premium developer experience.",
    image: "/projects/react-customizable-dropdown-mockup.png",
    tags: ["React", "TypeScript", "NPM", "Theming", "Accessibility"],
    stats: { Role: "Author", Type: "NPM Package", Tech: "React" },
    links: {
      live: "https://react-customizable-dropdown.vercel.app",
      github: "https://github.com/shiningsudipto/react-customizable-dropdown",
      npm: "https://www.npmjs.com/package/react-customizable-dropdown",
    },
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  // The image will translate from -15% to 15% as the user scrolls past
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", damping: 20, stiffness: 80, delay: index * 0.1 }}
      className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden aspect-video border border-white/10 bg-white/5">
        <motion.div style={{ y }} className="absolute -inset-y-1/4 inset-x-0 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </motion.div>
        {/* Overlay Stats (visible on hover for desktop, always visible on mobile) */}
        <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-20 flex flex-wrap gap-2 md:gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 duration-500">
          {Object.entries(project.stats).map(([key, val]) => (
            <div
              key={key}
              className="bg-black/80 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-white/10"
            >
              <span className="block text-[8px] md:text-[10px] text-[#94A3B8] uppercase tracking-wider">
                {key}
              </span>
              <span className="block text-xs md:text-sm font-bold text-primary">
                {val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#F8FAFC]">
          {project.title}
        </h3>
        <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-white/10">
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#F8FAFC] font-semibold hover:text-primary transition-colors group"
          >
            Live Demo
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          {project?.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              <Github className="w-5 h-5" />
              Source Code
            </a>
          )}
          {project?.links?.npm && (
            <a
              href={project.links.npm}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              <Package className="w-5 h-5" />
              NPM Package
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 max-w-6xl mx-auto z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", damping: 20, stiffness: 80 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
          Featured <span className="text-primary">Case Studies</span>
        </h2>
        <p className="text-[#94A3B8] max-w-2xl text-lg">
          Technical solutions that delivered measurable business outcomes.
        </p>
      </motion.div>

      <div className="space-y-16 md:space-y-24 rounded-none">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
