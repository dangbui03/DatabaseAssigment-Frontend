import addFilmScreening from "@/lib/addFilmScreening";
import editFilmScreening from "@/lib/editFilmScreening";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  movieScreening: movieScreening;
  add: boolean;
  edit: boolean;
};

export default function ConfirmButton({ movieScreening, add, edit }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      onClick={() =>
        add
          ? addFilmScreening(movieScreening)
          : edit
          ? editFilmScreening(movieScreening.ID, movieScreening)
          : {}
      }
    >
      &#10004;
    </motion.button>
  );
}
