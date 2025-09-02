interface ContactHeaderProps {
  isVisible: boolean;
}

export const ContactHeader = ({ isVisible }: ContactHeaderProps) => {
  return (
    <div
      className={`text-center mb-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="head-text">
        Let&apos;s build something
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 ml-2">
          exceptional
        </span>
      </h2>
      <p className="text-white/60 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
        Open to freelance, full‑time and collaboration opportunities. Drop a
        message and I&apos;ll get back within 24h.
      </p>
    </div>
  );
};

export default ContactHeader;
