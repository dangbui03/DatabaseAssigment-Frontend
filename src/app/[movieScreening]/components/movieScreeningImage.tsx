"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  ID: number;
  name: string;
};

const slideVars = {
  initial: { x: -1000 },
  animate: {
    x: 0,
    transition: {
      delay: 0.5,
      ease: "anticipate",
    },
  },
  exit: { x: -1000 },
  hover: {
    backgroundPositionX: 0,
    transition: {
      duration: 2,
    },
  },
};

export default function MovieScreeningImage({ ID, name }: Props) {
  const [cur, setCur] = useState(1);

  const handleNext = () => {
    if (cur === 3) setCur(1);
    else setCur(cur + 1);
  };

  const handlePre = () => {
    if (cur === 1) setCur(3);
    else setCur(cur - 1);
  };

  return (
    <section className=" overflow-hidden">
      <div className=" flex justify-between">
        <motion.button
          onClick={handlePre}
          className="text-5xl z-50"
          whileHover={{ scale: 1.2 }}
        >
          &larr;
        </motion.button>
        <motion.button
          onClick={handleNext}
          className="text-5xl z-50"
          whileHover={{ scale: 1.2 }}
        >
          &rarr;
        </motion.button>
      </div>
      <AnimatePresence>
        {cur === 1 && (
          <motion.div
            variants={slideVars}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            style={{ backgroundImage: `url('/filmImage/${ID}_${1}.jpg')` }}
            className="bg-no-repeat bg-right h-screen"
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {cur === 2 && (
          <motion.div
            variants={slideVars}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            style={{ backgroundImage: `url('/filmImage/${ID}_${2}.jpg')` }}
            className="bg-no-repeat bg-right h-screen"
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {cur === 3 && (
          <motion.div
            variants={slideVars}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            style={{ backgroundImage: `url('/filmImage/${ID}_${3}.jpg')` }}
            className="bg-no-repeat bg-right h-screen"
          ></motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
