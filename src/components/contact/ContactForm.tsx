"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Please provide more details"),
});

type FormValues = z.infer<typeof schema>;

interface ContactFormProps {
  isVisible: boolean;
}

export const ContactForm = ({ isVisible }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setSubmitted(false);
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Contact form submission", data);
    setSubmitted(true);
    reset();
  };

  return (
    <div
      className={`relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-4 sm:p-6 lg:p-8 transition-all duration-1000 hover:border-white/20 hover:bg-white/10 shadow-2xl ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Enhanced glass effect */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5" />
      <div className="absolute inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-black/20 via-black/40 to-black/60" />

      {/* Floating orbs for ambiance - hidden on mobile for performance */}
      <div className="hidden sm:block absolute -top-10 -right-10 h-32 w-32 bg-gradient-to-br from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute -bottom-10 -left-10 h-24 w-24 bg-gradient-to-tr from-fuchsia-400/10 to-purple-400/10 rounded-full blur-2xl" />

      <div className="relative z-10">
        <div className="mb-6 sm:mb-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-cyan-100 mb-2 sm:mb-3">
            Let&apos;s Work Together
          </h3>
          <p className="text-sm sm:text-base text-white/50 max-w-md mx-auto px-2 sm:px-0">
            Have a project in mind? I&apos;d love to hear from you. Send me a
            message and I&apos;ll respond as soon as possible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2 sm:mb-3">
              Name
            </label>
            <input
              {...register("name")}
              placeholder="Enter your name"
              className="w-full rounded-2xl sm:rounded-2xl bg-white/10 border border-white/20 focus:border-purple-400/60 focus:ring-4 focus:ring-purple-400/10 px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-white/40 outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/15 text-sm sm:text-base"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-rose-400 flex items-center gap-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2 sm:mb-3">
              Email
            </label>
            <input
              {...register("email")}
              placeholder="your@email.com"
              className="w-full rounded-2xl sm:rounded-2xl bg-white/10 border border-white/20 focus:border-purple-400/60 focus:ring-4 focus:ring-purple-400/10 px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-white/40 outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/15 text-sm sm:text-base"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-rose-400 flex items-center gap-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2 sm:mb-3">
              Message
            </label>
            <textarea
              rows={4}
              {...register("message")}
              placeholder="Tell me about your project or just say hello..."
              className="w-full resize-none rounded-2xl sm:rounded-2xl bg-white/10 border border-white/20 focus:border-purple-400/60 focus:ring-4 focus:ring-purple-400/10 px-4 sm:px-5 py-3 sm:py-4 text-white placeholder:text-white/40 outline-none transition-all duration-300 backdrop-blur-sm hover:bg-white/15 text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
            />
            {errors.message && (
              <p className="mt-2 text-sm text-rose-400 flex items-center gap-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full flex items-center justify-center gap-2 sm:gap-3 rounded-2xl sm:rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500 hover:from-purple-600 hover:via-fuchsia-600 hover:to-cyan-600 py-3 sm:py-4 px-4 sm:px-6 font-medium text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed group/btn text-sm sm:text-base"
          >
            <div className="absolute inset-0 rounded-2xl sm:rounded-2xl bg-gradient-to-r from-purple-400/20 via-fuchsia-400/20 to-cyan-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            {isSubmitting ? (
              <span className="flex items-center gap-2 sm:gap-3 relative z-10">
                <span className="h-4 w-4 sm:h-5 sm:w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Sending message...
              </span>
            ) : submitted ? (
              <span className="flex items-center gap-2 sm:gap-3 relative z-10">
                <span className="text-emerald-300 text-base sm:text-lg">✓</span>
                Message sent successfully!
              </span>
            ) : (
              <span className="flex items-center gap-2 sm:gap-3 relative z-10">
                <Send size={16} className="sm:w-5 sm:h-5" />
                Send Message
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
