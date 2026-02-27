"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  tags: string[];
  cover: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "React Customizable Dropdown: The Complete Guide to Building Better Forms in React",
    excerpt:
      "A deep dive into building highly customizable, accessible, and performant dropdowns in React. Learn how to handle complex form states with ease.",
    date: "Feb 25, 2026",
    readTime: "8 min read",
    link: "https://medium.com/@shiningsudiptoo/react-customizable-dropdown-the-complete-guide-to-building-better-forms-in-react-c03953bdba41",
    tags: ["React", "Forms", "UX"],
    cover: "/blogs/react-dropdown.png",
  },
  {
    id: 2,
    title:
      "Complete SEO Guide for Next.js: Make Your Website Search Engine Friendly",
    excerpt:
      "Unlock the full potential of Next.js with advanced SEO strategies. From dynamic metadata to optimized core web vitals, this guide covers it all.",
    date: "Feb 26, 2026",
    readTime: "12 min read",
    link: "https://medium.com/@shiningsudiptoo/complete-seo-guide-for-next-js-make-your-website-search-engine-friendly-967b8c34e7fd",
    tags: ["SEO", "Next.js", "Web Performance"],
    cover: "/blogs/nextjs-seo.png",
  },
];

export const Blog = () => {
  return (
    <section
      id="blog"
      className="py-24 px-6 md:px-12 max-w-6xl mx-auto z-10 relative bg-blog-bg/5 rounded-3xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Technical <span className="text-secondary">Writing</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl text-lg">
            Thoughts, tutorials, and deep dives into modern web engineering.
          </p>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/@shiningsudiptoo"
          className="group flex items-center gap-2 text-primary font-medium hover:text-[#F8FAFC] transition-colors"
        >
          View all articles
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.a
            href={post.link}
            target="_blank"
            rel="noreferrer"
            key={post.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col bg-white/2 border border-white/5 rounded-2xl p-8 hover:bg-white/5 hover:border-secondary/30 transition-all duration-500 relative overflow-hidden h-[400px] justify-end"
          >
            {/* Background Cover Image on Hover */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out scale-105 group-hover:scale-100">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover brightness-[0.3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 duration-300">
                <ArrowUpRight className="w-6 h-6 text-secondary" />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-[#94A3B8] text-base leading-relaxed mb-6 line-clamp-3 group-hover:text-[#CBD5E1] transition-colors">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-[#94A3B8]/70 pt-4 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
