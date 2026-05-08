"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowUpRight, Code, Layout, Database } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Spotlight effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 100 } },
  };

  const floatingCardVariants: Variants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      rotate: [0, i % 2 === 0 ? 2 : -2, 0],
      transition: {
        duration: 5 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative flex items-center justify-center min-h-screen w-full px-6 md:px-12 lg:px-24 overflow-hidden bg-[#090D14]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        animate={{ opacity: isHovering ? 1 : 0 }}
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
      >
        {/* Left Column: Text */}
        <div className="lg:col-span-7 flex flex-col items-start text-left pt-20 lg:pt-0">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-[#E2E8F0] font-medium tracking-wide">Available for new challenges</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#F8FAFC] leading-[1.1] mb-6">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2E8F0] to-[#64748B] italic pr-4">digital</span> <br />
            experiences.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#94A3B8] max-w-xl leading-relaxed mb-10 font-light">
            I build scalable, accessible, and performant web applications using modern architectures. Bringing creative visions to life through precise engineering.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <button
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const lenis = (window as any).lenis;
                if (lenis) lenis.scrollTo("#projects");
              }}
              className="group relative flex items-center gap-4 bg-[#F8FAFC] text-[#090D14] px-8 py-4 rounded-full font-semibold hover:bg-[#E2E8F0] transition-colors w-full sm:w-auto justify-center overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <a
              href="#contact"
              className="text-[#E2E8F0] font-medium hover:text-primary transition-colors flex items-center gap-2 px-4 py-4"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Column: Floating Glass Cards */}
        <div className="lg:col-span-5 relative h-[500px] w-full hidden md:block" style={{ perspective: "1000px" }}>
          <div className="absolute inset-0 flex items-center justify-center transform-gpu" style={{ transformStyle: "preserve-3d", transform: "rotateY(-10deg) rotateX(5deg)" }}>
            
            {/* Card 1 */}
            <motion.div
              custom={0}
              variants={floatingCardVariants}
              animate="animate"
              className="absolute top-[10%] left-[10%] z-30 w-64 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-[#F8FAFC] font-semibold mb-2">Clean Architecture</h3>
              <p className="text-[#94A3B8] text-sm">Scalable codebase built with TypeScript and modern React patterns.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              custom={1}
              variants={floatingCardVariants}
              animate="animate"
              className="absolute top-[40%] right-[5%] z-20 w-64 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-[#F8FAFC] font-semibold mb-2">Premium UI/UX</h3>
              <p className="text-[#94A3B8] text-sm">Distinctive designs with fluid animations and micro-interactions.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              custom={2}
              variants={floatingCardVariants}
              animate="animate"
              className="absolute bottom-[10%] left-[20%] z-10 w-64 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-[#F8FAFC] font-semibold mb-2">Robust Backend</h3>
              <p className="text-[#94A3B8] text-sm">Secure and efficient APIs powered by Node, Prisma, and SQL.</p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};
