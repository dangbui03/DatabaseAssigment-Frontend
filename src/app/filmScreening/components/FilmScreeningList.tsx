"use client";

import FilmScreeningListItem from "./FilmScreeningListItem";
import getMovieNameFromID from "@/lib/getMovieNameFromID";
import AddButtonFilmScreening from "./AddButtonFilmScreening";
import NewFilmScreeningListItem from "./NewFilmScreeningListItem";
import addFilmScreening from "@/lib/addFilmScreening";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  movieScreenings: movieScreening[];
  movies: movie[];
};

const NewFilmScreeningListItemVars = {
  initial: {
    x: -500,
  },
  animate: {
    x: 0,
  },
  exit: {
    x: -500,
  },
};

function FilmScreeningList({ movieScreenings, movies }: Props) {
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);

  return (
    <>
      <section className=" text-6xl self-end sticky top-0 right-0">
        <AddButtonFilmScreening adding={adding} setAdding={setAdding} />
      </section>

      <ul className="flex flex-col items-center gap-10">
        <AnimatePresence>
          {adding && (
            <motion.div
              variants={NewFilmScreeningListItemVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <NewFilmScreeningListItem edit={false} add={true} />
            </motion.div>
          )}
        </AnimatePresence>
        {movieScreenings.map((movieScreening) => {
          return (
            <FilmScreeningListItem
              movieScreening={movieScreening}
              key={movieScreening.ID}
              name={getMovieNameFromID(movieScreening.ID, movies)}
              editing={editing}
              setEditing={setEditing}
              deleting={deleting}
              setDeleting={setDeleting}
            />
          );
        })}
      </ul>
    </>
  );
}

export default FilmScreeningList;
