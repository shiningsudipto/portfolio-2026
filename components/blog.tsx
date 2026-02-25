"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding TypeScript: A Game-Changer for JavaScript Developers",
    excerpt:
      "Explore why TypeScript has become an essential tool for modern web development, highlighting its benefits for scalable applications and avoiding runtime errors.",
    date: "Dec 29, 2024",
    readTime: "5 min read",
    link: "https://sudiptadas.netlify.app/blog/understanding-typescript:-a-game-changer-for-javascript-developers-sudipta-das-1735499278469",
    tags: ["TypeScript", "JavaScript", "Frontend"],
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
          href="https://www.linkedin.com/in/sudiptadasweb/"
          className="group flex items-center gap-2 text-primary font-medium hover:text-[#F8FAFC] transition-colors"
        >
          View all articles
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            className="group flex flex-col bg-white/2 border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-secondary/30 transition-all duration-300 relative overflow-hidden h-full"
          >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 duration-300">
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

            <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-secondary transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 line-clamp-3 grow">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-[#94A3B8]/70 mt-auto pt-4 border-t border-white/5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
