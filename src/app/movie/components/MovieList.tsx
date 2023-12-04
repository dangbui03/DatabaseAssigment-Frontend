"use client";

import React from "react";
import MovieListItem from "./MovieListItem";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  movies: movie[];
};

const movieListVars = {
  initital: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const MovieList = ({ movies }: Props) => {
  console.log(movies);
  return (
    <motion.ul
      variants={movieListVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center gap-10"
    >
      {movies.map((movie) => {
        return <MovieListItem movie={movie} />;
      })}
    </motion.ul>
  );
};

export default MovieList;
