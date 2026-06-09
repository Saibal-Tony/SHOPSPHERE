import { type ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  animation?: "bottom" | "left" | "right" | "scale" | "fade";
  delay?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation = "bottom",
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animations = {
    bottom: {
      initial: { opacity: 0, transform: "translateY(50px)" },
      animate: { opacity: 1, transform: "translateY(0)" },
    },
    left: {
      initial: { opacity: 0, transform: "translateX(-50px)" },
      animate: { opacity: 1, transform: "translateX(0)" },
    },
    right: {
      initial: { opacity: 0, transform: "translateX(50px)" },
      animate: { opacity: 1, transform: "translateX(0)" },
    },
    scale: {
      initial: { opacity: 0, transform: "scale(0.9)" },
      animate: { opacity: 1, transform: "scale(1)" },
    },
    fade: {
      initial: { opacity: 0, transform: "translateY(20px)" },
      animate: { opacity: 1, transform: "translateY(0)" },
    },
  };

  const anim = animations[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(!visible ? anim.initial : anim.animate),
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
