"use client";

import { motion } from "framer-motion";
import { PrecisionButton } from "./ui/GlowButton";
import { Badge } from "./ui/Badge";
import { ArrowDown, Terminal } from "lucide-react";

const techBadges = [
  "Flutter",
  "React",
  "Kotlin",
  "Next.js",
  "Supabase",
  "Jetpack Compose",
  "TypeScript",
  "SQLite",
];

const terminalLines = [
  { prefix: "ali@dev:~$", command: "antigravity build --ship", delay: 0 },
  { prefix: "✓", command: "Architecture validated", delay: 0.3 },
  { prefix: "✓", command: "Tests passed (47/47)", delay: 0.5 },
  { prefix: "✓", command: "Bundle optimized → 142kb", delay: 0.7 },
  { prefix: "🚀", command: "Deployed to production", delay: 0.9 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-24 overflow-hidden"
    >
      {/* Neo-Technical Mesh Background */}
      <div className="hero-mesh">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>

      {/* Strict Container */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column: Typography */}
        <div className="flex flex-col items-start text-left z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {techBadges.map((tech) => (
              <Badge key={tech} variant="outline" className="opacity-80">
                {tech}
              </Badge>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-8 text-text-primary leading-tight"
          >
            Engineering <br />
            <span className="text-primary">High-Velocity</span> <br />
            Software.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 leading-relaxed font-light"
          >
            Building production-ready mobile and web applications with modern AI-driven development methodologies. Architected for scale, shipped at velocity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <PrecisionButton size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects
              <ArrowDown className="w-4 h-4 ml-2" />
            </PrecisionButton>
            <PrecisionButton
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </PrecisionButton>
          </motion.div>
        </div>

        {/* Right Column: Terminal UI */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative w-full mx-auto lg:mx-0 z-10 hidden md:block"
        >
          {/* Decorative frame */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-border-hover to-transparent rounded-xl blur-[2px] opacity-50" />
          
          <div className="relative rounded-xl bg-[#000000] technical-border overflow-hidden shadow-2xl w-full">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-[#111111] border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#333333]" />
                <div className="w-3 h-3 rounded-full bg-[#333333]" />
                <div className="w-3 h-3 rounded-full bg-[#333333]" />
              </div>
              <div className="mx-auto flex items-center gap-2 text-xs font-mono text-text-muted">
                <Terminal className="w-3.5 h-3.5" />
                <span>ali-deploy</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 font-mono text-sm leading-relaxed overflow-x-auto whitespace-nowrap">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + line.delay, duration: 0.3 }}
                  className="flex gap-3 mb-3"
                >
                  <span className={line.prefix === "✓" ? "text-primary" : "text-text-muted"}>
                    {line.prefix}
                  </span>
                  <span className={i === 0 ? "text-text-primary" : "text-text-secondary"}>
                    {line.command}
                  </span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.1 }}
                className="mt-6 flex gap-3 text-primary"
              >
                <span>ali@dev:~$</span>
                <span className="w-2 h-4 bg-primary animate-blink mt-0.5" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
