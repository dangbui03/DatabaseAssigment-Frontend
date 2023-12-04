import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  movie: movie;
};

const MovieDesc = ({ movie }: Props) => {
  return (
    <section className=" self-start text-xl font-averia text-justify pr-5">
      <h2 className="text-6xl">Title: {movie.MNAME}</h2>

      <article className="flex gap-9 pt-5">
        <time dateTime={movie.RELEASEDAT.toString()}>
          Release year: {movie.RELEASEDAT}
        </time>
        <div>Age restriction: {movie.AGE_RESTRIC}</div>
        <div>Duration: {movie.DURATION}</div>
      </article>

      <article className="pt-5">
        <div>Gerne: {movie.GENRE}</div>
        <div>Language: {movie.MLANGUAGE}</div>
        <div>Nation: {movie.NATION}</div>
      </article>

      <article className="pt-5">
        <div>
          <p>Description:</p>
          <br />
          {movie.MDESCRIPTION}
        </div>
      </article>

      <article className="pt-5">
        <div>Director: {movie.DIRECTOR}</div>
        <div>Actor: {movie.PERFORMER}</div>
      </article>

      <div className="pt-5">ID: {movie.ID}</div>
    </section>
  );
};

export default MovieDesc;
