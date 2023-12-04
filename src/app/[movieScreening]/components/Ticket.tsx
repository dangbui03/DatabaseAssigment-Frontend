"use client";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  movieScreeningContext,
  movieScreeningContextType,
} from "@/app/context/MovieScreeningContextProvider";
import { useContext } from "react";
const annabel_1 = localFont({ src: "../../../../public/font/annabel_1.ttf" });

const textVars = {
  initial: { y: 100, width: 150 },
  animate: { y: 0, width: 150 },
  exit: { y: 100 },
  hover: { width: 200, scale: 1.2 },
};

type Props = {
  url: string;
  screening: movieScreening;
};

export default function Ticket({ url, screening }: Props) {
  const [isHovered, setHovered] = useState(false);

  const { movieScreening, setMovieScreening } = useContext(
    movieScreeningContext
  ) as movieScreeningContextType;

  return (
    <Link
      href={`/ticket/${url}`}
      className="fixed -right-40 -bottom-0 -rotate-45 w-128"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ stroke: "#ffffff" }}
      onClick={() => setMovieScreening(screening)}
    >
      <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isHovered ? 1 : 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          strokeWidth={4}
          d="M 0, 5 L 100, 5"
        />
      </svg>
      <motion.div
        variants={textVars}
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover="hover"
        className="mx-auto"
      >
        <p className="text-4xl text-right font-averia translate-y-5">ENTER</p>
        <p className="text-2xl text-left font-averia">the</p>
        <p className={" text-5xl text-center font-averia"}>
          <span className={annabel_1.className}>S</span>
          HOW
        </p>
      </motion.div>
      <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isHovered ? 1 : 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          strokeWidth={4}
          d="M 0, 5 L 100, 5"
          className="translate-y-1"
        />
      </svg>
    </Link>
  );
}
