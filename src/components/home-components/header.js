"use client";

import React from "react";
import { Logo } from "../../../public/logo/logo";
import { Button } from "@heroui/react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export default function Header() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);
  const [elevated, setElevated] = React.useState(false);
  const lastY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const current = y ?? 0;
    // show on scroll up, hide on scroll down
    if (!prefersReduced) setHidden(current > lastY.current && current > 24);
    setElevated(current > 8);
    lastY.current = current;
  });

  const container = {
    initial: { opacity: 0, y: prefersReduced ? 0 : -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.header
      variants={container}
      initial="initial"
      animate="animate"
      // sticky without changing your layout
      className="sticky top-0 z-50 bg-white/70 backdrop-blur-md"
      style={{
        transform:
          hidden && !prefersReduced ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
        boxShadow: elevated ? "0 6px 20px -8px rgba(0,0,0,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-0 py-5 flex justify-between items-center">
        <motion.div
          whileHover={prefersReduced ? {} : { y: -2, rotate: -0.25 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Logo className="w-32 sm:w-48 h-auto scale-[0.9]" />
        </motion.div>

        {/* right side button */}

        {/* <motion.div
          whileHover={prefersReduced ? {} : { scale: 1.03 }}
          whileTap={prefersReduced ? {} : { scale: 0.98 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
        >
          <Button
            size="md"
            className="bg-black w-[100px] sm:w-[160px] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
          >
            Get started
          </Button>
        </motion.div> */}
      </div>
    </motion.header>
  );
}
