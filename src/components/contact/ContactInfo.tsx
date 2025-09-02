import { Mail, MapPin, Clock, Zap } from "lucide-react";

interface ContactInfoProps {
  isVisible: boolean;
}

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "nikhil.krishnakn@gmail.com",
    gradient: "from-purple-500/20 to-fuchsia-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide",
    gradient: "from-cyan-500/20 to-sky-500/20",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "< 24 hours",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Zap,
    label: "Focus",
    value: "Frontend • 3D • UI",
    gradient: "from-amber-400/20 to-orange-500/20",
  },
];

export const ContactInfo = ({ isVisible }: ContactInfoProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/5 bg-black/20 backdrop-blur-xl p-6 md:p-8 space-y-6 transition-all duration-1000 hover:border-white/10 hover:bg-black/30 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/[0.02] via-black/40 to-black/60" />

      <div className="relative z-10">
        <h3 className="text-lg font-medium text-white/90 mb-6">Contact Info</h3>
        <div className="space-y-5">
          {items.map(({ icon: Icon, label, value, gradient }) => (
            <div key={label} className="flex items-center gap-4 group">
              <div
                className={`relative h-12 w-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white/70 shadow-inner shadow-black/20 ring-1 ring-white/5 group-hover:ring-white/10 transition-all duration-300`}
              >
                <Icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-wide text-white/40 group-hover:text-white/50 transition">
                  {label}
                </p>
                <p className="text-sm text-white/80 truncate group-hover:text-white/90 transition">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
