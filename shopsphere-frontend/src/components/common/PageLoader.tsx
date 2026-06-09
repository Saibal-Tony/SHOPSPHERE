import { useEffect, useState } from "react";

export default function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Animate counter
    const countInterval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(countInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 40);

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + Math.random() * 5 + 1, 100);
      });
    }, 30);

    // Transition phases
    const revealTimer = setTimeout(() => setPhase("reveal"), 2000);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2700);

    return () => {
      clearInterval(countInterval);
      clearInterval(progressInterval);
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#031716] flex flex-col items-center justify-center transition-all duration-700 ${
        phase === "reveal"
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array(20)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-[#0C969C]"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%)",
                animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
      </div>

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-10 z-10">
        {/* Logo animation */}
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #0C969C, transparent)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <div className="relative overflow-hidden">
            <div
              className="text-white font-bold tracking-[0.4em] uppercase"
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontFamily: "Playfair Display, serif",
                animation:
                  "textReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
              }}
            >
              ShopSphere
            </div>
          </div>
          <div
            className="text-center text-[#0C969C] tracking-[0.5em] uppercase text-xs mt-2"
            style={{
              animation: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both",
            }}
          >
            Premium Fashion
          </div>
        </div>

        {/* Counter */}
        <div
          className="text-[#0C969C] font-bold"
          style={{
            fontSize: "clamp(48px, 8vw, 80px)",
            fontFamily: "Inter, sans-serif",
            fontVariantNumeric: "tabular-nums",
            animation: "fadeUp 0.6s ease 0.3s both",
          }}
        >
          {Math.min(count, 100)}%
        </div>

        {/* Progress bar */}
        <div className="w-64 sm:w-96">
          <div className="h-px bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0A7075] via-[#0C969C] to-[#6BA3BE] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Bottom text */}
        <div
          className="text-white/30 text-xs tracking-[0.3em] uppercase"
          style={{ animation: "fadeUp 0.6s ease 0.8s both" }}
        >
          Curating your experience
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 text-[#0C969C]/30 text-xs tracking-widest">
        SS/2024
      </div>
      <div className="absolute bottom-8 right-8 text-[#0C969C]/30 text-xs tracking-widest">
        FASHION
      </div>
    </div>
  );
}
