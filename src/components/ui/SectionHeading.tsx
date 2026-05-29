import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  label,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-24 flex flex-col gap-4",
        {
          "items-center text-center": align === "center",
          "items-start text-left": align === "left",
        },
        className
      )}
      {...props}
    >
      {label && (
        <span className="font-mono text-sm tracking-widest text-primary uppercase">
          {label}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
