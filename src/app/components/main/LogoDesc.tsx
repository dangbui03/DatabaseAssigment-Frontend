"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const logoDescVars = {
  initial: { x: -1500 },
  animate: {
    x: 0,
    transition: {
      ease: "anticipate",
    },
  },
  exit: { x: -1500 },
};
export default function LogoDesc() {
  return (
    <div className=" overflow-hidden text-justify">
      <motion.p
        className=" font-averia"
        variants={logoDescVars}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Retro Cinema invites you to embark on a nostalgic journey through time,
        where the golden age of cinema awaits. Step back into the enchanting
        world of classic movies that have left an indelible mark on the history
        of filmmaking.
      </motion.p>
    </div>
  );
}
