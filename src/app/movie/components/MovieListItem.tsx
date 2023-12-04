"use client";

import MovieListItemImage from "./MovieListItemImage";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Props = {
  movie: movie;
};

const movieListItemVars = {
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

const MovieListItem = ({ movie }: Props) => {
  return (
    <motion.li
      variants={movieListItemVars}
      className="grid grid-cols-3 w-256 font-averia gap-10 text-2xl"
    >
      <Link href={`/movie/${movie.ID}`}>
        <MovieListItemImage
          ID={movie.ID}
          name={movie.MNAME}
          width={200}
          height={200}
        />
      </Link>
      <p className=" self-center">{movie.MNAME}</p>
      <div className="flex flex-col self-center">
        <p className=" whitespace-nowrap">Director: {movie.DIRECTOR}</p>
        <p>Duration: {movie.DURATION}</p>
        <p>Release year: {movie.RELEASEDAT}</p>
      </div>
    </motion.li>
  );
};

export default MovieListItem;
