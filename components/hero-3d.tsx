"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create a highly tessellated sphere
    const geometry = new THREE.IcosahedronGeometry(2, 32);

    // Store original positions for animation
    const positionAttribute = geometry.getAttribute("position");
    const vertex = new THREE.Vector3();
    const originalPositions: THREE.Vector3[] = [];
    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i);
      originalPositions.push(vertex.clone());
    }

    const material = new THREE.MeshBasicMaterial({
      color: 0x94a3b8, // Slate 400
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 5;
    // Shift camera slightly right so the sphere sits on the right side of the screen
    camera.position.x = 2; 

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    };

    document.addEventListener("mousemove", onDocumentMouseMove);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      // Responsive camera positioning
      if (width < 768) {
        camera.position.x = 0;
        camera.position.z = 6;
      } else {
        camera.position.x = 2;
        camera.position.z = 5;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const clock = new THREE.Clock();

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX = mouseX * 0.5;
      targetY = mouseY * 0.5;

      sphere.rotation.y += 0.002;
      sphere.rotation.x += 0.001;

      // Mouse interaction parallax
      sphere.rotation.x += 0.05 * (targetY - sphere.rotation.x);
      sphere.rotation.y += 0.05 * (targetX - sphere.rotation.y);

      // Morph geometry
      const posAttr = geometry.getAttribute("position");
      for (let i = 0; i < posAttr.count; i++) {
        vertex.copy(originalPositions[i]);

        // Complex noise-like displacement using sine waves
        const noise =
          Math.sin(vertex.x * 2 + elapsedTime) *
          Math.cos(vertex.y * 2 + elapsedTime) *
          Math.sin(vertex.z * 2 + elapsedTime) *
          0.15;

        vertex.multiplyScalar(1 + noise);
        posAttr.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 80 },
    },
  };

  return (
    <section
      className="relative flex flex-col items-start justify-center min-h-screen w-full overflow-hidden px-6 md:px-12 lg:px-24"
      id="home"
    >
      {/* 3D Canvas Background */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-80"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 w-full max-w-7xl flex flex-col items-start text-left"
      >
        <motion.div variants={childVariants} className="mb-6 overflow-hidden">
          <p className="text-primary font-mono text-sm tracking-widest uppercase flex items-center gap-4">
            <span className="w-12 h-px bg-primary" />
            Full Stack Engineer
          </p>
        </motion.div>

        <div className="overflow-hidden mb-4">
          <motion.h1
            variants={childVariants}
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-[#F8FAFC] leading-[0.85] uppercase"
          >
            Sudipta
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h1
            variants={childVariants}
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary leading-[0.85] uppercase"
          >
            Das.
          </motion.h1>
        </div>

        <motion.div
          variants={childVariants}
          className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-8 border-t border-white/10 pt-8 w-full max-w-2xl backdrop-blur-sm"
        >
          <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed flex-1">
            Architecting scalable web applications. Delivering premium digital
            experiences through clean code and creative engineering.
          </p>
          <button
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const lenis = (window as any).lenis;
              if (lenis) lenis.scrollTo("#projects");
            }}
            className="group relative flex items-center justify-center w-20 h-20 rounded-full border border-white/20 hover:border-primary transition-colors cursor-pointer shrink-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />
            <ArrowRight className="w-6 h-6 text-[#F8FAFC] group-hover:text-primary transition-colors z-10 group-hover:-rotate-45" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
