import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/",
    label: "GitHub",
    color: "hover:text-white hover:bg-white/10",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/",
    label: "Twitter",
    color: "hover:text-cyan-400 hover:bg-cyan-400/10",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/",
    label: "Instagram",
    color: "hover:text-pink-400 hover:bg-pink-400/10",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/",
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:bg-blue-400/10",
  },
];

export const FooterSocial = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`transition-all duration-1000 delay-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Social Icons - Compact and Centered */}
      <div className="flex items-center justify-center gap-3">
        {socials.map(({ icon: Icon, href, label, color }, index) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={`group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-all duration-300 ${color} hover:scale-110 hover:-translate-y-1 active:scale-95`}
            style={{
              animationDelay: `${index * 100}ms`,
              animation: isVisible
                ? `float 3s ease-in-out infinite ${index * 0.5}s`
                : "none",
            }}
          >
            <Icon
              size={18}
              className="text-white/60 group-hover:text-current transition-all duration-200"
            />

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-current/5 blur-sm"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;
