import { type ReactNode, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState<"idle" | "enter" | "exit">("idle");
  const prevLocation = useRef(location);

  useEffect(() => {
    if (location.pathname !== prevLocation.current.pathname) {
      setStage("enter");
      const t1 = setTimeout(() => {
        setDisplayLocation(location);
        setStage("exit");
        prevLocation.current = location;
      }, 400);
      const t2 = setTimeout(() => setStage("idle"), 800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [location]);

  return (
    <>
      {/* Curtain overlay */}
      <div
        className="fixed inset-0 z-[999] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #031716, #0A7075)",
          transform:
            stage === "idle"
              ? "scaleY(0) translateY(-100%)"
              : stage === "enter"
                ? "scaleY(1) translateY(0%)"
                : "scaleY(1) translateY(100%)",
          transformOrigin: stage === "enter" ? "top" : "bottom",
          transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Page content */}
      <div
        style={{
          opacity: stage === "enter" ? 0 : 1,
          transform: stage === "enter" ? "translateY(8px)" : "translateY(0)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}
