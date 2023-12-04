"use client";

import ScreeningNavItem from "./ScreeningNavItem";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
const annabel_1 = localFont({ src: "../../../../public/font/annabel_1.ttf" });

const screeningNavVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.5,
      when: "afterChildren",
      delay: 1,
    },
  },
};

const itemVars = {
  initial: { opacity: 0, x: -100 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: -100,
  }),
};

const containerVars = {
  initital: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      staggerDirection: -1,
    },
  },
};

const moreTextVars = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

type Props = {
  movieScreenings: { name: string; screening: movieScreening }[];
};

function ScreeningNav({ movieScreenings }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={open ? "overflow-scroll h-screen" : ""}>
      <section
        onMouseEnter={() => {
          setOpen(true);
        }}
        onMouseLeave={() => {
          setOpen(false);
        }}
        className="flex justify-end"
      >
        <AnimatePresence>
          {!open && (
            <motion.p
              variants={moreTextVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-xl whitespace-nowrap"
            >
              {pathname === "/" ? (
                <>
                  Travel back in <span className={annabel_1.className}>T</span>
                  IME &rarr;
                </>
              ) : pathname.includes("movie") ||
                pathname.includes("filmScreening") ? (
                <></>
              ) : (
                <>More &rarr;</>
              )}
            </motion.p>
          )}
        </AnimatePresence>
      </section>
      <AnimatePresence>
        {open && (
          <motion.ul
            variants={screeningNavVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className=" origin-top"
            onMouseEnter={() => {
              setOpen(true);
            }}
            onMouseLeave={() => {
              setOpen(false);
            }}
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {movieScreenings.map((movieScreening, i) => {
                return (
                  <motion.li variants={itemVars} custom={i}>
                    <ScreeningNavItem
                      movieScreening={movieScreening.screening}
                      key={movieScreening.screening.ID}
                      name={movieScreening.name}
                    />
                  </motion.li>
                );
              })}
            </motion.div>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default ScreeningNav;
