"use client";

import { Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 w-full border-t border-border">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-medium">
              Ali<span className="text-primary">.</span>dev
            </span>
          </a>

          {/* Copyright */}
          <p className="flex items-center gap-1.5 text-sm text-text-muted">
            Built with
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            and modern tooling ·{" "}
            <span className="text-text-secondary">
              © {new Date().getFullYear()} Ali Ahmed
            </span>
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="text-sm text-text-muted hover:text-primary transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
