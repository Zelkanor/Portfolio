"use client";

import { useState, useEffect, useRef } from "react";

import { AnimatedBackground } from "@/components/contact/AnimatedBackground";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHeader } from "@/components/contact/ContactHeader";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen w-full flex items-center justify-center relative py-12 sm:py-16 lg:py-20
       px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <AnimatedBackground mousePosition={mousePosition} />
      <div className="w-full max-w-7xl mx-auto">
        <ContactHeader isVisible={isVisible} />
        <div
          className={`w-full transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex justify-center">
            <div className="w-full max-w-2xl px-2 sm:px-0">
              <ContactForm isVisible={isVisible} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
