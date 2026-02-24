"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, MouseEvent } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { top, left, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setMagneticPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setMagneticPosition({ x: 0, y: 0 });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-[#090D14]/70 border-b border-white/5">
      <Link href="/">
        <motion.div
          whileHover={{ textShadow: "0px 0px 8px rgba(20, 184, 166, 0.8)" }}
          className="text-xl font-bold text-[#F8FAFC] tracking-tighter cursor-pointer"
        >
          Dev<span className="text-[#14B8A6]">Studio</span>
        </motion.div>
      </Link>

      <ul className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors text-sm font-medium"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <motion.button
        animate={{ x: magneticPosition.x, y: magneticPosition.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="px-6 py-2 rounded-full border border-[#14B8A6] text-[#14B8A6] font-medium text-sm transition-colors hover:bg-[#14B8A6] hover:text-[#090D14]"
      >
        View Resume
      </motion.button>
    </nav>
  );
};
