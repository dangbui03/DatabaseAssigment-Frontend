import editFilmScreening from "@/lib/editFilmScreening";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch } from "react";
import { SetStateAction } from "react";

type Props = {
  disable: boolean;
  editing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
};

export default function EditButtonFilmScreening({
  disable,
  editing,
  setEditing,
}: Props) {
  return (
    <motion.button
      whileHover={disable ? {} : { scale: 1.2 }}
      disabled={disable}
      className=" disabled:brightness-50"
      onClick={() => setEditing(true)}
    >
      &#9998;
    </motion.button>
  );
}
