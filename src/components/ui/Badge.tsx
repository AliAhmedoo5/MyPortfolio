import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "glow";
  color?: string; // Kept for backwards compatibility
}

export function Badge({
  children,
  variant = "default",
  color,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono tracking-tight transition-all duration-300 border backdrop-blur-md cursor-default",
        {
          "bg-white/[0.08] text-white border-white/20 hover:bg-white/[0.12] hover:border-white/30": variant === "default",
          "bg-white/[0.03] text-white/70 border-white/10 hover:bg-white/[0.08] hover:text-white hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]": variant === "outline",
          "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:border-primary/40 hover:shadow-[0_0_15px_var(--color-primary)]": variant === "glow",
        },
        className
      )}
      style={
        variant === "glow" && color
          ? {
              backgroundColor: `${color}15`,
              color: color,
              borderColor: `${color}30`,
            }
          : undefined
      }
      {...props}
    >
      {children}
    </span>
  );
}
