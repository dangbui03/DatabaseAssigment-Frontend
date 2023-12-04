import Navbar from "../navbar/Navbar";
import ScreeningNav from "../navbar/ScreeningNav";
import getMovieScreenings from "@/lib/getMovieScreenings";
import getMovieNameFromID from "@/lib/getMovieNameFromID";
import getMovies from "@/lib/getMovies";

export default async function Header() {
  const movieScreenings = await getMovieScreenings();
  const movies = await getMovies();
  const screeningData = movieScreenings.map((movieScreening) => ({
    name: getMovieNameFromID(movieScreening.ID, movies),
    screening: movieScreening,
  }));
  return (
    <header className="font-averia fixed top-0 w-screen h-24 p-5 grid grid-cols-2 bg-black">
      <Navbar />
      <ScreeningNav movieScreenings={screeningData} />
    </header>
  );
}
