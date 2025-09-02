import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const resources = [
  { label: "GitHub", href: "https://github.com/", external: true },
  { label: "Resume", href: "#", external: true },
  { label: "Blog", href: "#", external: true },
];

export const FooterLinks = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`space-y-8 transition-all duration-1000 delay-100 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Quick Navigation */}
      <div>
        <h4 className="text-sm font-medium text-white/80 mb-4 flex items-center gap-2">
          <span className="w-1 h-4 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></span>
          Quick Links
        </h4>
        <div className="grid grid-cols-1 gap-2">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              <span className="text-sm text-white/60 group-hover:text-white transition">
                {link.label}
              </span>
              <ArrowUpRight
                size={14}
                className="text-white/30 group-hover:text-purple-400 transition opacity-0 group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div>
        <h4 className="text-sm font-medium text-white/80 mb-4 flex items-center gap-2">
          <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></span>
          Resources
        </h4>
        <div className="grid grid-cols-1 gap-2">
          {resources.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              <span className="text-sm text-white/60 group-hover:text-white transition">
                {link.label}
              </span>
              <ArrowUpRight
                size={14}
                className="text-white/30 group-hover:text-cyan-400 transition opacity-0 group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
