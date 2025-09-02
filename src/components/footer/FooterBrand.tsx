export const FooterBrand = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`space-y-2 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Brand */}
      <div>
        <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400">
          Nikhil Krishna KN
        </h3>
      </div>

      {/* Available Status */}
      <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-white/40">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/40" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span>Available for new projects</span>
      </div>
    </div>
  );
};

export default FooterBrand;
