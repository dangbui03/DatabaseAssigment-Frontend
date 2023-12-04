import ConfirmButton from "./ConfirmButton";
import { useState } from "react";

type Props = {
  screening?: movieScreening;
  name?: string;
  add: boolean;
  edit: boolean;
};

const NewFilmScreeningListItem = ({ screening, name, add, edit }: Props) => {
  const [movieScreening, setMovieScreening] = useState<movieScreening>(
    screening || {
      ID: "111111111",
      MOVIETIME: "31/12/1999",
      MSSTARTIME: "00:00:00",
      RNUMBER: "A000",
    }
  );

  const [movie, setMovie] = useState<movie>();

  return (
    <li
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)) ,url('/filmImage/${
          movieScreening.ID
        }_${1}.jpg')`,
      }}
    >
      <form className="grid grid-cols-3 w-256 font-averia text-2xl place-content-center inset-0.5 p-5">
        <section className="self-center">
          <input type="text" placeholder={name || "Name"} />
        </section>
        <section className="self-center pl-14">
          <input
            type="text"
            placeholder={edit ? movieScreening.ID : "ID"}
          ></input>
          <input
            type="text"
            placeholder={edit ? movieScreening.RNUMBER : "Room number"}
          ></input>
          <input
            type="text"
            placeholder={edit ? movieScreening.MOVIETIME : "Time"}
          ></input>
        </section>
        <section className="flex justify-end gap-10 text-4xl">
          <ConfirmButton
            movieScreening={movieScreening}
            add={true}
            edit={false}
          />
        </section>
      </form>
    </li>
  );
};

export default NewFilmScreeningListItem;
