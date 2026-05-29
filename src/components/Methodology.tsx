"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Bot, Layers, Rocket } from "lucide-react";

const methods = [
  {
    icon: Bot,
    title: "Agentic Execution",
    description:
      "Leveraging state-of-the-art AI coding agents to compress development cycles from weeks to days without sacrificing code quality.",
  },
  {
    icon: Layers,
    title: "Modern Architecture",
    description:
      "Clean architecture, offline-first data paradigms, local-first storage engines, and highly scalable cloud backends.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Delivery",
    description:
      "From Kotlin/Compose and Flutter to Next.js/React. End-to-end production shipping across native mobile and web platforms.",
  },
];

export function Methodology() {
  return (
    <section id="methodology" className="relative py-24 md:py-32 lg:py-40 w-full border-t border-border">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <SectionHeading
          label="How I Build"
          title="Methodology & Workflow"
          subtitle="Speed without sacrifice. Every project follows a battle-tested process that maximizes velocity while maintaining strict production-grade quality."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {methods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full p-8 sm:p-10 flex flex-col group overflow-hidden relative border-border/50 hover:border-border/80 transition-colors duration-500">
                {/* Aceternity Style Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none" />
                
                {/* Icon Container with Aceternity Glow */}
                <div className="relative w-14 h-14 rounded-xl bg-[#0a0a0a] border border-border flex items-center justify-center mb-8 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-primary/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <method.icon className="w-6 h-6 text-primary md:text-text-secondary md:group-hover:text-primary transition-colors relative z-20" />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 md:text-text-primary md:bg-none md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-white md:group-hover:to-white/60 transition-all duration-300">
                  {method.title}
                </h3>
                <p className="relative z-10 text-text-secondary font-light leading-relaxed">
                  {method.description}
                </p>
                
                {/* Decorative Animated Border Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left opacity-80" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
