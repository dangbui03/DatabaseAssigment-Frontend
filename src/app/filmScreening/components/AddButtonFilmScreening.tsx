import addFilmScreening from "@/lib/addFilmScreening";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type Props = {
  adding: boolean;
  setAdding: Dispatch<SetStateAction<boolean>>;
};

const addButtonVars = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 100,
  },
};

export default function AddButtonFilmScreening({ adding, setAdding }: Props) {
  return (
    <AnimatePresence>
      {!adding && (
        <motion.button
          variants={addButtonVars}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover={{ scale: 1.2 }}
          onClick={() => setAdding(true)}
        >
          &#10010;
        </motion.button>
      )}
    </AnimatePresence>
  );
}
