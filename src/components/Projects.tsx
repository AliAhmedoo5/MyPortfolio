"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { projects, type Project } from "@/lib/projects";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { ExternalLink, X, ChevronRight, Sparkles } from "lucide-react";
import { GithubIcon } from "./ui/Icons";
import { PrecisionButton } from "./ui/GlowButton";

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const isFeatured = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={isFeatured ? "md:col-span-2 md:row-span-2" : ""}
    >
      <Card
        className="h-full cursor-pointer hover:border-border-hover transition-colors duration-300"
      >
        <div
          onClick={onClick}
          className={`flex flex-col h-full ${
            isFeatured ? "md:flex-row" : ""
          }`}
        >
          {/* Image */}
          <div
            className={`relative overflow-hidden bg-[#050505] border-b border-border md:border-b-0 ${
              isFeatured ? "md:border-r" : ""
            } ${
              isFeatured
                ? "md:w-1/2 h-64 md:h-auto"
                : "h-48"
            }`}
          >
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface z-10 mix-blend-multiply"
            />
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              quality={95}
              className="object-cover object-top transition-transform duration-500 opacity-100 grayscale-0 md:opacity-80 md:grayscale md:group-hover:scale-105 md:group-hover:opacity-100 md:group-hover:grayscale-0"
              sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
            />
            {/* Category badge */}
            <div className="absolute top-4 left-4 z-20">
              <Badge variant="default" className="bg-black/50 backdrop-blur-md">
                {project.category}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div
            className={`flex flex-col justify-between p-6 bg-surface ${
              isFeatured ? "md:w-1/2 md:p-8" : ""
            }`}
          >
            <div>
              <h3
                className={`font-bold text-text-primary tracking-tight mb-2 ${
                  isFeatured ? "text-2xl lg:text-3xl" : "text-xl"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`text-text-secondary leading-relaxed mb-6 font-light ${
                  isFeatured ? "text-base" : "text-sm"
                }`}
              >
                {project.tagline}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, isFeatured ? 6 : 4).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-[10px]">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* View more */}
            <div className="flex items-center text-sm font-medium text-primary group/link pt-4 border-t border-border mt-auto">
              <span className="transition-colors duration-200">
                View Architecture
              </span>
              <ChevronRight
                className="w-4 h-4 ml-1 transition-transform duration-200 group-hover/link:translate-x-1"
              />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#000]/80 backdrop-blur-md" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface technical-border rounded-xl shadow-2xl flex flex-col"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-md bg-black/50 backdrop-blur-md border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border-hover transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image */}
        <div className="relative h-64 sm:h-80 overflow-hidden shrink-0 border-b border-border bg-[#050505]">
          <Image
            src={project.image}
            alt={`${project.title} detail`}
            fill
            quality={95}
            className="object-cover object-top opacity-90"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 relative z-10 flex-1">
          <Badge variant="outline" className="mb-6">
            {project.category}
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mb-3">
            {project.title}
          </h2>
          <p className="text-lg sm:text-xl font-light text-text-secondary mb-10 border-b border-border pb-8">
            {project.tagline}
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-8">
              {/* Problem */}
              <div>
                <h3 className="text-xs font-mono text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-4 h-px bg-primary" /> The Problem
                </h3>
                <p className="text-text-secondary leading-relaxed font-light">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-xs font-mono text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-4 h-px bg-primary" /> Architecture & Solution
                </h3>
                <p className="text-text-secondary leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Highlights */}
              <div>
                <h3 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
                  Key Metrics
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-text-secondary font-light"
                    >
                      <Sparkles className="w-4 h-4 mt-0.5 shrink-0 text-text-muted" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div>
                <h3 className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-10 mt-10 border-t border-border">
            <PrecisionButton
              variant="outline"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              <GithubIcon className="w-4 h-4" />
              Source Code
            </PrecisionButton>
            {project.liveUrl && (
              <PrecisionButton
                variant="primary"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </PrecisionButton>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 lg:py-40 w-full border-t border-border">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <SectionHeading
          label="Featured Work"
          title="Projects That Ship"
          subtitle="Quality over quantity. Each project represents a unique engineering challenge solved with production-grade architecture."
        />

        {/* Editorial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
