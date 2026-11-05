import { Variants } from "motion/react";

export const cardHover: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 4px 12px rgba(0,0,0,.08)",
  },

hover: {
  y: -6,
  scale: 1.01,
  boxShadow: "0px 20px 40px rgba(15,23,42,.10)",
  transition: {
    duration: 0.25,
    ease: "easeOut",
  },
  },
};