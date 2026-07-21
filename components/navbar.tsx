"use client";

import { motion } from "framer-motion";
import { resume } from "@/lib/constants";

const navItems = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-[#090D14]/70 border-b border-white/5">
      <button
        onClick={() => {
          const lenis = (window as any).lenis;
          if (lenis) lenis.scrollTo(0);
        }}
        className="text-2xl tracking-wide font-bold text-[#F8FAFC] tracking-tighter cursor-pointer group"
      >
        <motion.div
          whileHover={{ textShadow: "0px 0px 8px rgba(20, 184, 166, 0.8)" }}
        >
          Sudipta.
        </motion.div>
      </button>

      <ul className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => {
                const lenis = (window as any).lenis;
                if (lenis) {
                  lenis.scrollTo(item.href);
                }
              }}
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors text-sm font-medium cursor-pointer"
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      <a
        href={resume}
        target="_blank"
        rel="noreferrer"
        className="group relative px-6 py-2 rounded-full border border-primary text-primary font-medium text-sm overflow-hidden transition-colors duration-300 hover:text-[#fff] cursor-pointer"
      >
        <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
        <span className="relative z-10">View Resume</span>
      </a>
    </nav>
  );
};
