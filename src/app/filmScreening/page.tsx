import getMovies from "@/lib/getMovies";
import getMovieScreenings from "@/lib/getMovieScreenings";
import FilmScreeningList from "./components/FilmScreeningList";
import AddButtonFilmScreening from "./components/AddButtonFilmScreening";

export default async function page() {
  const movieScreenings = await getMovieScreenings();
  const movies = await getMovies();
  return (
    <main className="pt-24 flex place-content-center w-256 text-white flex-col mx-auto gap-10">
      <FilmScreeningList movieScreenings={movieScreenings} movies={movies} />
    </main>
  );
}
