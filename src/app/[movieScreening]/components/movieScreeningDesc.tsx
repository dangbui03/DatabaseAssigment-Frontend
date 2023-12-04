import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  movie: movie;
  movieScreening: movieScreening;
};

function MovieScreeningDesc({ movie, movieScreening }: Props) {
  return (
    <section className="p-10 font-sans">
      <article className="first-letter:text-5xl first-letter:font-averia first-letter:italic font-medium text-justify">
        {movie.MDESCRIPTION}
      </article>
      <div className="text-9xl font-averia mt-24 mb-9">{movie.MNAME}</div>
      <time dateTime={movieScreening.MOVIETIME} className="font-medium">
        {getFormattedDate(movieScreening.MOVIETIME)}
      </time>
    </section>
  );
}

export default MovieScreeningDesc;
