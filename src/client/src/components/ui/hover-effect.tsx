import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverEffectProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  hoverY?: number;
}

export const HoverEffect = ({
  children,
  className,
  hoverScale = 1.05,
  hoverY = -5,
}: HoverEffectProps) => {
  return (
    <motion.div
      className={cn("transition-all duration-300", className)}
      whileHover={{ 
        scale: hoverScale, 
        y: hoverY,
        transition: { duration: 0.3 } 
      }}
    >
      {children}
    </motion.div>
  );
};
