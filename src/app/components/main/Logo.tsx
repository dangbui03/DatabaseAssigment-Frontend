"use client";

import localFont from "next/font/local";
import Link from "next/link";
const GaretcRegular = localFont({
  src: "../../../../public/font/GaretcRegular-ywr9m.ttf",
});
import { motion, AnimatePresence } from "framer-motion";

const logoVars = {
  initial: { y: 150 },
  animate: {
    y: 0,
    transition: {
      ease: "anticipate",
    },
  },
  exit: { y: 150 },
};

export default function Logo() {
  return (
    <motion.h1
      className={
        GaretcRegular.className + " text-9xl text-center overflow-hidden"
      }
      id="logo"
    >
      <motion.section
        variants={logoVars}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {" "}
        <Link href={"/"}>Retro Cinema</Link>
      </motion.section>
    </motion.h1>
  );
}
