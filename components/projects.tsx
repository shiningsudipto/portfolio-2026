"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A fast, scalable e-commerce platform featuring a modern UI and robust inventory management.",
    image: "/api/placeholder/600/400", // using placeholder, should be replaced with real image
    tags: ["React.js", "Next.js", "Node.js", "TailwindCSS", "MongoDB"],
    stats: { Scale: "Next.js 14", Stack: "MERN", DB: "MongoDB" },
    links: {
      live: "https://sudiptadas.netlify.app/project/e-commerce-platform-sudipta-das-1735306285798",
      github: "https://github.com/shiningsudipto",
    },
  },
  {
    id: 2,
    title: "Ultimate Tripz (Social Site)",
    description:
      "A social networking platform built to connect travelers, manage trips, and share experiences.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    stats: { Frontend: "Next.js", Language: "TypeScript", Styling: "Tailwind" },
    links: {
      live: "https://sudiptadas.netlify.app/project/ultimate-tripz-(a-social-site)-sudipta-das-1735306902746",
      github: "https://github.com/shiningsudipto",
    },
  },
];

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
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
          Featured <span className="text-[#14B8A6]">Case Studies</span>
        </h2>
        <p className="text-[#94A3B8] max-w-2xl text-lg">
          Technical solutions that delivered measurable business outcomes.
        </p>
      </motion.div>

      <div className="space-y-24 rounded-none">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden aspect-video border border-white/10 bg-white/5">
              <div className="absolute inset-0 bg-linear-to-t from-[#090D14] via-transparent to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-20" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Overlay Stats */}
              <div className="absolute bottom-4 left-4 z-20 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                {Object.entries(project.stats).map(([key, val]) => (
                  <div
                    key={key}
                    className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10"
                  >
                    <span className="block text-[10px] text-[#94A3B8] uppercase tracking-wider">
                      {key}
                    </span>
                    <span className="block text-sm font-bold text-[#14B8A6]">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-3xl font-bold text-[#F8FAFC]">
                {project.title}
              </h3>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-[#8B5CF6] bg-[#8B5CF6]/10 px-3 py-1 rounded-full border border-[#8B5CF6]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#F8FAFC] font-semibold hover:text-[#14B8A6] transition-colors group"
                >
                  Live Demo
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                >
                  <Github className="w-5 h-5" />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
