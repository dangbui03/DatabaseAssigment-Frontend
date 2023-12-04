import deleteFilmScreening from "@/lib/deleteFilmScreening";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type Props = {
  ID: string;
  disable: boolean;
  deleting: boolean;
  setDeleting: Dispatch<SetStateAction<boolean>>;
};

export default function DeleteButtonFilmScreening({
  ID,
  disable,
  deleting,
  setDeleting,
}: Props) {
  return (
    <>
      {!deleting && (
        <motion.button
          whileHover={{ scale: 1.2 }}
          disabled={disable}
          className=" disabled:brightness-50 w-10"
          onClick={() => setDeleting(true)}
        >
          &#10005;
        </motion.button>
      )}
      {deleting && (
        <motion.div className="flex flex-col place-content-center gap-2 w-10">
          <motion.button
            whileHover={{ scale: 1.2 }}
            disabled={disable}
            className=" disabled:brightness-50 text-red-600"
            onClick={() => deleteFilmScreening(ID)}
          >
            &#10005;
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            disabled={disable}
            className=" disabled:brightness-50 text-green-600"
            onClick={() => setDeleting(false)}
          >
            &#11013;
          </motion.button>
        </motion.div>
      )}
    </>
  );
}
