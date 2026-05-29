"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import {
  GraduationCap,
  Cpu,
  Globe,
  Smartphone,
  Zap,
  Shield,
} from "lucide-react";

const focuses = [
  { label: "Fintech", icon: Zap },
  { label: "Civic Tech", icon: Globe },
  { label: "Mobile", icon: Smartphone },
  { label: "AI Engineering", icon: Cpu },
  { label: "Privacy-First", icon: Shield },
];

const stats = [
  { value: "4+", label: "Production Apps" },
  { value: "3", label: "Platforms" },
  { value: "10+", label: "Technologies" },
  { value: "∞", label: "Curiosity" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 w-full border-t border-border bg-[#050505]">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <SectionHeading
          label="About Me"
          title="Engineering with Purpose"
          subtitle="Computer Science fundamentals meet cutting-edge AI tooling."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Bio — Left column (3/5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card className="p-8 sm:p-10 h-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-8 border-b border-border">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-text-primary">
                    Ali Ahmed
                  </h3>
                  <p className="text-sm font-mono text-text-secondary uppercase tracking-widest mt-1">
                    Software Engineer
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-text-secondary leading-relaxed font-light">
                <p>
                  I&apos;m a software engineer focused on building{" "}
                  <strong className="text-text-primary font-medium">
                    production-ready applications
                  </strong>{" "}
                  that solve real problems. My approach combines strong Computer
                  Science fundamentals with modern AI-accelerated development
                  workflows.
                </p>
                <p>
                  I specialize in{" "}
                  <strong className="text-text-primary font-medium">
                    offline-first, privacy-conscious architectures
                  </strong>{" "}
                  — systems that work reliably without internet, protect user
                  data by default, and sync seamlessly when connectivity
                  returns.
                </p>
                <p>
                  Every project I ship is built with strict architectural boundaries, comprehensive testing, and an obsessive attention to UI/UX
                  detail. From native Android with Kotlin/Compose to
                  cross-platform Flutter and React web apps — I deliver
                  end-to-end.
                </p>
              </div>

              {/* Focus areas */}
              <div className="flex flex-wrap gap-2 mt-8">
                {focuses.map((focus) => (
                  <Badge key={focus.label} variant="default">
                    <focus.icon className="w-3 h-3 mr-1.5 text-text-muted" />
                    {focus.label}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Stats — Right column (2/5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <Card key={stat.label} className="p-8 hover:bg-[#111] transition-all duration-500 overflow-hidden relative group">
                <div className="flex flex-col items-center justify-center h-full w-full text-center relative z-10">
                  {/* Subtle top glow on hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-primary/20 blur-[50px] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="text-5xl sm:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/30 mb-4 pr-2">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-primary font-mono uppercase tracking-widest font-semibold bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
