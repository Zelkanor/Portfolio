"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<
    "default" | "hover" | "click" | "text"
  >("default");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Initialize visibility on mouse move
    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Direct DOM manipulation for immediate response
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.display = "block";
    };

    const onMouseDown = () => setCursorState("click");
    const onMouseUp = () => setCursorState("default");

    // Handle hover effects for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [data-cursor-hover], [role="button"]'
      );
      const formElements = document.querySelectorAll("input, textarea");

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorState("hover"));
        el.addEventListener("mouseleave", () => setCursorState("default"));
      });

      formElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorState("text"));
        el.addEventListener("mouseleave", () => setCursorState("default"));
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    // Add hover listeners
    setTimeout(addHoverListeners, 100);

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(() => {
      setTimeout(addHoverListeners, 100);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      observer.disconnect();
    };
  }, [isVisible]);

  const getCursorClasses = () => {
    const baseClasses = "fixed pointer-events-none transform-gpu";

    switch (cursorState) {
      case "hover":
        return `${baseClasses} scale-110`;
      case "click":
        return `${baseClasses} scale-90`;
      case "text":
        return `${baseClasses} scale-125`;
      default:
        return `${baseClasses} scale-100`;
    }
  };

  // Always render cursor, just control visibility
  return (
    <div
      ref={cursorRef}
      className={getCursorClasses()}
      style={{
        left: mousePos.x,
        top: mousePos.y,
        opacity: isVisible ? 1 : 0,
        transition: "none",
        zIndex: 99999,
        position: "fixed",
        display: "block",
      }}
    >
      {/* Chevron Arrow Head Cursor */}
      <div className="relative">
        {/* Chevron Arrow Head */}
        <div
          className={`
            relative w-4 h-4 transform rotate-45 
            ${
              cursorState === "hover"
                ? "bg-gradient-to-br from-cyan-400 to-purple-400"
                : cursorState === "click"
                ? "bg-gradient-to-br from-purple-600 to-fuchsia-600"
                : cursorState === "text"
                ? "bg-gradient-to-br from-blue-400 to-cyan-400"
                : "bg-gradient-to-br from-white to-gray-200"
            }
            shadow-lg border-l-2 border-t-2 border-white/20 rounded-sm
          `}
        >
          {/* Inner glow */}
          <div
            className={`
              absolute inset-0.5 rounded-sm
              ${
                cursorState === "hover"
                  ? "bg-gradient-to-br from-cyan-300/50 to-purple-300/50"
                  : cursorState === "click"
                  ? "bg-gradient-to-br from-purple-500/50 to-fuchsia-500/50"
                  : cursorState === "text"
                  ? "bg-gradient-to-br from-blue-300/50 to-cyan-300/50"
                  : "bg-gradient-to-br from-white/30 to-gray-100/30"
              }
            `}
          />
        </div>

        {/* Chevron tail lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className={`
              absolute w-2 h-0.5 transform -rotate-45 origin-left
              ${
                cursorState === "hover"
                  ? "bg-cyan-400/60"
                  : cursorState === "click"
                  ? "bg-purple-600/60"
                  : cursorState === "text"
                  ? "bg-blue-400/60"
                  : "bg-white/60"
              }
              rounded-full shadow-sm -translate-x-1 -translate-y-0.5
            `}
          />
          <div
            className={`
              absolute w-2 h-0.5 transform rotate-45 origin-left
              ${
                cursorState === "hover"
                  ? "bg-cyan-400/60"
                  : cursorState === "click"
                  ? "bg-purple-600/60"
                  : cursorState === "text"
                  ? "bg-blue-400/60"
                  : "bg-white/60"
              }
              rounded-full shadow-sm -translate-x-1 translate-y-0.5
            `}
          />
        </div>

        {/* State-specific effects */}
        {cursorState === "hover" && (
          <div className="absolute -inset-3 border-2 border-cyan-400/30 rounded-full animate-pulse" />
        )}

        {cursorState === "click" && (
          <>
            <div className="absolute -inset-2 bg-purple-600/20 rounded-full blur-sm" />
            <div className="absolute top-1 left-0 w-1 h-1 bg-white rounded-full animate-ping" />
            <div className="absolute top-1 right-0 w-1 h-1 bg-fuchsia-400 rounded-full animate-ping" />
          </>
        )}

        {cursorState === "text" && (
          <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-sm animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
