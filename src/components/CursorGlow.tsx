"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't render on touch devices
    if (typeof window !== "undefined" && "ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[60] w-[500px] h-[500px] rounded-full transition-transform duration-75"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        background: "radial-gradient(circle, rgba(0,245,212,0.04) 0%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
