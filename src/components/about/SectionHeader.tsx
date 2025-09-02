interface SectionHeaderProps {
  isVisible: boolean;
  title: string;
  subtitle: string;
}

export function SectionHeader({
  isVisible,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div
      className={`text-center space-y-8 mb-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative inline-block">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          {title}
        </h2>
        <div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #2a2a2a 50%, transparent 100%)",
          }}
        />
      </div>

      <p className="text-gray-400 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
