"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const webDescVars = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "anticipate",
    },
  },
  exit: { y: 500, opacity: 0 },
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
      staggerChildren: 0.4,
      delayChildren: 1,
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

export default function WebDesc() {
  return (
    <AnimatePresence>
      <motion.section
        className="p-5 text-justify overflow-hidden"
        variants={containerVars}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.article className="mb-5" variants={webDescVars}>
          <h2 className="text-3xl font-averia">
            Experience the Magic of Timeless Movies
          </h2>
          <p className="font-averia">
            At Retro Cinema, we celebrate the rich heritage of cinema by
            curating an exclusive collection of iconic films that have stood the
            test of time. Dive into the captivating storytelling, mesmerizing
            performances, and unparalleled craftsmanship that define these
            cinematic masterpieces.
          </p>
        </motion.article>
        <motion.article className="mb-5 overflow-hidden" variants={webDescVars}>
          <h2 className="text-3xl font-averia">Rediscover the Classics</h2>
          <p className="font-averia">
            Immerse yourself in a handpicked selection of classic films, ranging
            from beloved favorites to timeless gems, including movies featured
            in the prestigious IMDb Top 250 list. From heartwarming dramas to
            thrilling adventures and unforgettable comedies, our collection
            spans various genres to cater to every cinematic preference.
          </p>
        </motion.article>
        <motion.article className="mb-5 overflow-hidden" variants={webDescVars}>
          <h2 className="text-3xl font-averia">
            Unparalleled Quality and Nostalgia
          </h2>
          <p className="font-averia">
            Relive the magic of the silver screen with our high-quality
            screenings that honor the original brilliance of these cinematic
            marvels. Whether you're a seasoned cinephile or a newcomer to
            classic cinema, our platform offers an opportunity to appreciate the
            artistry and storytelling prowess of legendary filmmakers.
          </p>
        </motion.article>
        <motion.article className="mb-5 overflow-hidden" variants={webDescVars}>
          <h2 className="text-3xl font-averia">
            Your Ticket to Timeless Entertainment
          </h2>
          <p>
            Step into Retro Cinema and rediscover the magic of storytelling, the
            brilliance of iconic performances, and the everlasting allure of
            classic movies. Prepare to be captivated as we take you on a
            cinematic voyage through the ages.
          </p>
        </motion.article>
      </motion.section>
    </AnimatePresence>
  );
}
