import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

interface SocialLinksProps {
  isVisible: boolean;
}

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
];

export const SocialLinks = ({ isVisible }: SocialLinksProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/5 bg-black/20 backdrop-blur-xl p-6 md:p-8 transition-all duration-1000 delay-100 hover:border-white/10 hover:bg-black/30 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/[0.02] via-black/40 to-black/60" />

      <div className="relative z-10">
        <h4 className="text-base font-medium text-white/90 mb-5 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse" />
          Connect
        </h4>
        <div className="grid grid-cols-4 gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group relative h-12 w-12 flex items-center justify-center rounded-xl border border-white/5 bg-black/20 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <Icon
                size={18}
                className="text-white/60 group-hover:text-white/90 transition-all duration-200 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
