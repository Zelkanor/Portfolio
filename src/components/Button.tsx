interface ButtonProps {
  name: string;
  isBeam?: boolean;
  containerClass?: string;
  onClick?: () => void;
}

const Button = ({
  name,
  isBeam = false,
  containerClass,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-cyan-600 hover:from-purple-700 hover:via-purple-800 hover:to-cyan-700 transition-all duration-300 active:scale-95 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-1 ${containerClass}`}
      onClick={onClick}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center gap-3">
        {isBeam && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping"></span>
            <span className="btn-ping_dot"></span>
          </span>
        )}
        <span className="relative z-10">{name}</span>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
    </button>
  );
};

export default Button;
