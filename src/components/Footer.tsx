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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-7 h-7 group-hover:scale-110 transition-transform drop-shadow-md">
              <rect width="256" height="256" fill="#0A0A0A" rx="56" />
              <rect x="2" y="2" width="252" height="252" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4" rx="54" />
              <path d="M 112 56 H 144 L 192 184 H 152 L 128 120 L 104 184 H 64 Z" fill="#0070F3" />
              <rect x="112" y="140" width="84" height="24" fill="#EDEDED" />
            </svg>
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
