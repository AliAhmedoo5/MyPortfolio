"use client";

import { useState, type FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { PrecisionButton } from "./ui/GlowButton";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";
import { Mail, Send, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/AliAhmedoo5",
    icon: GithubIcon,
    description: "View source code",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aliahmed0516",
    icon: LinkedinIcon,
    description: "Connect professionally",
  },
  {
    label: "Email",
    href: "mailto:aliahmed.work0@gmail.com",
    icon: Mail,
    description: "aliahmed.work0@gmail.com",
  },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "rate_limited">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Check rate limit on mount
  useEffect(() => {
    const lastSent = localStorage.getItem("last_message_sent");
    if (lastSent) {
      const timeSince = Date.now() - parseInt(lastSent, 10);
      // 1 hour cooldown (3600000 ms)
      if (timeSince < 3600000) {
        setStatus("rate_limited");
      }
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (status === "rate_limited") return;
    setStatus("submitting");
    setErrorMessage("");

    try {
      const data = {
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          to_name: "Ali Ahmed"
        },
      };

      if (!data.service_id || !data.template_id || !data.user_id) {
        throw new Error("EmailJS configuration is missing.");
      }

      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Failed to send message.");
      }

      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      localStorage.setItem("last_message_sent", Date.now().toString());
      
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40 w-full border-t border-border">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <SectionHeading
          label="Get in Touch"
          title="Let's Build Something."
          subtitle="Have a project in mind? I'm always open to discussing new opportunities, architecture designs, or ways to bring your vision to life."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 sm:p-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-surface z-20 px-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">Message Sent</h3>
                    <p className="text-text-secondary font-light">
                      Thank you for reaching out! I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-3">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    disabled={status === "submitting" || status === "rate_limited"}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#050505] border border-border rounded-md text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-light disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-3">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    disabled={status === "submitting" || status === "rate_limited"}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#050505] border border-border rounded-md text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-light disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-3">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    disabled={status === "submitting" || status === "rate_limited"}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#050505] border border-border rounded-md text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none font-light disabled:opacity-50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Error / Rate Limit Message */}
                <AnimatePresence>
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-3 bg-red-500/10 border border-red-500/20 rounded-md flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-200 font-light leading-relaxed">{errorMessage}</p>
                    </motion.div>
                  )}
                  {status === "rate_limited" && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-md flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-yellow-200 font-light leading-relaxed">
                        You have recently sent a message. Please wait a while before sending another.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <PrecisionButton
                  variant="primary"
                  size="lg"
                  className="w-full"
                  type="submit"
                  disabled={status === "submitting" || status === "rate_limited"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : status === "rate_limited" ? (
                    "Rate Limited"
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </PrecisionButton>
              </form>
            </Card>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
              >
                <Card className="p-6 flex items-center gap-5 group-hover:bg-[#111] transition-colors duration-300">
                  <div className="w-12 h-12 rounded-lg border border-border bg-[#050505] flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                    <social.icon className="w-5 h-5 text-text-secondary group-hover:text-text-primary transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold tracking-tight text-text-primary">
                      {social.label}
                    </h3>
                    <p className="text-sm text-text-muted font-light truncate">
                      {social.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors shrink-0" />
                </Card>
              </a>
            ))}

            {/* Quick note */}
            <Card className="p-6 mt-6 bg-[#050505]">
              <p className="text-sm text-text-muted leading-relaxed font-light">
                <strong className="text-text-primary font-mono text-xs uppercase tracking-widest block mb-2">Preferred Contact</strong>
                Email for project inquiries. I typically respond within 24 hours. For code contributions, reach out via GitHub.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
