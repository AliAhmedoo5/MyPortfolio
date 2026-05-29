import Link from "next/link";
import { PrecisionButton } from "@/components/ui/GlowButton";
import { Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-[0_0_30px_var(--color-primary)]">
        <Terminal className="w-8 h-8 text-primary" />
      </div>
      
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4">
        404
      </h1>
      
      <h2 className="text-xl md:text-2xl text-text-primary font-mono tracking-tight mb-6">
        Page Not Found
      </h2>
      
      <p className="text-text-secondary font-light max-w-md text-center mb-10">
        The route you are looking for doesn't exist, was moved, or requires higher clearance.
      </p>
      
      <Link href="/">
        <PrecisionButton variant="primary" size="lg">
          Return to Dashboard
        </PrecisionButton>
      </Link>
    </div>
  );
}
