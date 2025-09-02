"use client";

import { useState, useEffect } from "react";

import { FooterBottom } from "@/components/footer/FooterBottom";
import { FooterBrand } from "@/components/footer/FooterBrand";
import { FooterSocial } from "@/components/footer/FooterSocial";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const el = document.getElementById("footer");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="footer"
      className="relative w-full border-t border-white/5 bg-gradient-to-br from-black/80 via-black/90 to-purple-900/10 overflow-hidden"
    >
      {/* Decorative edge gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/3 top-0 h-full w-1/2 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute -right-1/3 bottom-0 h-full w-1/2 bg-gradient-to-tr from-cyan-900/10 via-transparent to-transparent blur-3xl" />
      </div>
      <div className="c-space pt-6 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1 text-center md:text-left">
            <FooterBrand isVisible={isVisible} />
          </div>
          <div className="md:col-span-1 flex justify-center">
            <FooterSocial isVisible={isVisible} />
          </div>
          <div className="md:col-span-1 flex justify-center md:justify-end">
            {/* Email Contact on Right */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="mailto:nikhil.krishnakn@gmail.com"
                className="group flex items-center gap-2 p-3 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-purple-400/20 transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-center md:text-left">
                  <svg
                    className="w-4 h-4 text-purple-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-xs sm:text-sm text-white/70 group-hover:text-white transition break-all sm:break-normal">
                    nikhil.krishnakn@gmail.com
                  </p>
                  <svg
                    className="w-3 h-3 text-white/30 group-hover:text-purple-400 transition flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <FooterBottom isVisible={isVisible} />
      </div>
    </footer>
  );
};

export default Footer;
