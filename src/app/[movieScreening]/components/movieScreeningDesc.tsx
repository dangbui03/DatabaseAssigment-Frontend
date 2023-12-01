import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  movie: movie;
  movieScreening: movieScreening;
};

function MovieScreeningDesc({ movie, movieScreening }: Props) {
  return (
    <section>
      <article>{movie.MDESCRIPTION}</article>
      <div>{movie.MNAME}</div>
      <time dateTime={movieScreening.MOVIETIME}>
        {getFormattedDate(movieScreening.MOVIETIME)}
        <p>{movieScreening.MSSTARTIME}</p>
      </time>
    </section>
  );
}

export default MovieScreeningDesc;
