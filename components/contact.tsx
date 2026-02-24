"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000); // Reset after 5s
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 max-w-4xl mx-auto z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
          Let&apos;s <span className="text-[#14B8A6]">Connect</span>
        </h2>
        <p className="text-[#94A3B8] max-w-lg mx-auto text-lg">
          Currently open for new opportunities. Let&apos;s build something
          scalable together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Direct Contact Info */}
        <div className="md:col-span-2 space-y-8 flex flex-col justify-center text-[#94A3B8]">
          <div className="flex items-center gap-4 group">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl group-hover:border-[#14B8A6]/50 group-hover:bg-[#14B8A6]/10 transition-colors">
              <Mail className="w-6 h-6 text-[#14B8A6]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#F8FAFC]">Email</p>
              <a
                href="mailto:shiningsudipto@gmail.com"
                className="hover:text-[#14B8A6] transition-colors"
              >
                shiningsudipto@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl group-hover:border-[#8B5CF6]/50 group-hover:bg-[#8B5CF6]/10 transition-colors">
              <Phone className="w-6 h-6 text-[#8B5CF6]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#F8FAFC]">Phone</p>
              <a
                href="tel:+8801758579417"
                className="hover:text-[#8B5CF6] transition-colors"
              >
                +880 17585 79417
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl group-hover:border-[#3B82F6]/50 group-hover:bg-[#3B82F6]/10 transition-colors">
              <MapPin className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#F8FAFC]">Location</p>
              <p>Barishal, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="md:col-span-3 space-y-6 bg-white/2 border border-white/5 p-8 rounded-2xl backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <input
                type="text"
                id="name"
                required
                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#14B8A6] transition-colors peer placeholder-transparent"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-3 text-[#94A3B8] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#94A3B8]/70 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#14B8A6] cursor-text"
              >
                Name
              </label>
            </div>
            <div className="relative group">
              <input
                type="email"
                id="email"
                required
                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#14B8A6] transition-colors peer placeholder-transparent"
                placeholder="Work Email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-3 text-[#94A3B8] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#94A3B8]/70 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#14B8A6] cursor-text"
              >
                Work Email
              </label>
            </div>
          </div>

          <div className="relative group pt-4">
            <textarea
              id="message"
              required
              rows={4}
              className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#14B8A6] transition-colors peer placeholder-transparent resize-none"
              placeholder="Message"
            />
            <label
              htmlFor="message"
              className="absolute left-0 top-7 text-[#94A3B8] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-7 peer-placeholder-shown:text-[#94A3B8]/70 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-[#14B8A6] cursor-text"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="w-full bg-white/5 border border-white/10 hover:bg-[#14B8A6] hover:text-[#090D14] hover:border-[#14B8A6] text-[#F8FAFC] font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none disabled:bg-[#14B8A6]/20"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
              />
            ) : isSuccess ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2 text-[#14B8A6]"
              >
                <CheckCircle className="w-5 h-5" />
                Message Sent
              </motion.div>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};
