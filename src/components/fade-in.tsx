"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = "up", duration = 0.5, className }: FadeInProps) {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: directions[direction].y,
        x: directions[direction].x
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({ children, staggerDelay = 0.1 }: { children: ReactNode, staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
