import EditButtonFilmScreening from "./EditButtonFilmScreening";
import DeleteButtonFilmScreening from "./DeleteButtonFilmScreening";
import { Dispatch, SetStateAction, useState } from "react";
import NewFilmScreeningListItem from "./NewFilmScreeningListItem";

type Props = {
  movieScreening: movieScreening;
  name: string;
  editing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
  deleting: boolean;
  setDeleting: Dispatch<SetStateAction<boolean>>;
};

const FilmScreeningListItem = ({
  movieScreening,
  name,
  editing,
  setEditing,
  deleting,
  setDeleting,
}: Props) => {
  const [edit, setEdit] = useState(editing);
  const [_delete, set_delete] = useState(deleting);

  return (
    <>
      {edit && (
        <NewFilmScreeningListItem
          add={false}
          edit={true}
          screening={movieScreening}
          name={name}
        />
      )}
      {!edit && (
        <li
          className="grid grid-cols-3 w-256 font-averia text-2xl place-content-center inset-0.5 p-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)) ,url('/filmImage/${
              movieScreening.ID
            }_${1}.jpg')`,
          }}
        >
          <section className="self-center">{name}</section>
          <section className="self-center mx-auto">
            <p>Movie ID: {movieScreening.ID}</p>
            <p>Room number: {movieScreening.RNUMBER}</p>
            <p>Time: {movieScreening.MOVIETIME}</p>
          </section>
          <section className="flex justify-end gap-10 text-4xl">
            <EditButtonFilmScreening
              disable={false}
              editing={edit}
              setEditing={setEdit}
            />
            <DeleteButtonFilmScreening
              ID={movieScreening.ID}
              disable={false}
              deleting={_delete}
              setDeleting={set_delete}
            />
          </section>
        </li>
      )}
    </>
  );
};

export default FilmScreeningListItem;
