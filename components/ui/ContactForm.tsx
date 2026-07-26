"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-5 py-3.5 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 text-sm rounded focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-colors duration-200"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-5 py-3.5 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 text-sm rounded focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-colors duration-200"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-5 py-3.5 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 text-sm rounded focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-colors duration-200"
          placeholder="What is this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-5 py-3.5 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 text-sm rounded focus:outline-none focus:border-green focus:ring-1 focus:ring-green transition-colors duration-200 resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message"}
        </Button>
        {status === "sent" && (
          <span className="text-sm text-green font-medium">Thank you! I&apos;ll respond within 24 hours.</span>
        )}
        {status === "error" && (
          <span className="text-sm text-red-500 font-medium">Something went wrong. Please try again.</span>
        )}
      </div>
    </form>
  );
}
