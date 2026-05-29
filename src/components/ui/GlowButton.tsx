"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PrecisionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function GlowButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: PrecisionButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none rounded-md",
        {
          // Primary: High contrast white on black (Vercel style) or Primary color
          "bg-text-primary text-background hover:bg-white": variant === "primary",
          // Secondary: Subtle dark surface with border
          "bg-surface technical-border text-text-primary hover:bg-surface-hover": variant === "secondary",
          // Outline: Pure border
          "border border-border text-text-primary hover:border-text-primary hover:bg-surface": variant === "outline",
        },
        {
          "text-sm px-4 py-2 h-9": size === "sm",
          "text-sm px-5 py-2.5 h-10": size === "md",
          "text-base px-6 py-3 h-12": size === "lg",
        },
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">{children}</span>
    </button>
  );
}

// Exporting as PrecisionButton for semantic naming, keeping GlowButton for backward compat during refactor
export const PrecisionButton = GlowButton;
