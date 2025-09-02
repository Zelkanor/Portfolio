export const FooterBottom = ({ isVisible }: { isVisible: boolean }) => {
  const year = new Date().getFullYear();
  return (
    <div
      className={`mt-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-3 pb-1 text-xs text-white/40 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="order-2 md:order-1">
        © {year} Nikhil Krishna KN. All rights reserved.
      </p>
      <div className="flex items-center gap-4 order-1 md:order-2">
        <a href="#" className="hover:text-white transition">
          Privacy Policy
        </a>
        <span className="text-white/20">•</span>
        <a href="#" className="hover:text-white transition">
          Terms
        </a>
        <span className="text-white/20">•</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-lg bg-white/5 px-3 py-1.5 border border-white/10 hover:bg-white/10 text-white/60 hover:text-white transition"
        >
          Top ↑
        </button>
      </div>
    </div>
  );
};

export default FooterBottom;
