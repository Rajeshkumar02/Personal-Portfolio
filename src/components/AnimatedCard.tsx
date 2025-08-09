"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode, useRef } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  tiltIntensity?: number;
  glowColor?: string;
}

export function AnimatedCard({
  children,
  className = "",
  tiltIntensity = 15,
  glowColor = "var(--accent)",
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [tiltIntensity, -tiltIntensity]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-tiltIntensity, tiltIntensity]
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 20px 60px hsl(${glowColor} / 0.2)`,
        transition: { duration: 0.3 },
      }}
      className={`relative transform-gpu ${className}`}
    >
      <div style={{ transform: "translateZ(50px)" }}>{children}</div>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute -inset-1 rounded-2xl opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${useTransform(
            mouseXSpring,
            [-0.5, 0.5],
            ["0%", "100%"]
          )}% ${useTransform(
            mouseYSpring,
            [-0.5, 0.5],
            ["0%", "100%"]
          )}%, hsl(${glowColor} / 0.3) 0%, transparent 70%)`,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
