import getMovieScreening from "@/lib/getMovieScreening";
import getMovieNameFromID from "@/lib/getMovieNameFromID";
import MovieScreeningImage from "./components/movieScreeningImage";
import MovieScreeningDesc from "./components/movieScreeningDesc";
import getFormattedDate from "@/lib/getFormattedDate";
import Ticket from "./components/Ticket";
import getMovie from "@/lib/getMovie";
import getMovies from "@/lib/getMovies";

type Props = {
  params: {
    movieScreening: string;
  };
};

export async function generateMetadata({ params: { movieScreening } }: Props) {
  let data: movieScreening = {
    ID: Number(movieScreening.split("_")[0]),
    RNUMBER: movieScreening.split("_")[1],
    MOVIETIME: movieScreening.split("_")[2].replaceAll("-", "/"),
  };

  const movieScreeningData: Promise<movieScreening> = getMovieScreening(data);
  data = await movieScreeningData;

  if (!data) {
    return {
      title: `Screening not found `,
    };
  }

  const movies = await getMovies();
  const displayTerm = `${getMovieNameFromID(
    data.ID,
    movies
  )} ${getFormattedDate(data.MOVIETIME)}`;

  return {
    title: displayTerm,
    description: `Film screening for ${displayTerm}`,
  };
}

async function movieScreening({ params: { movieScreening } }: Props) {
  const screening: movieScreening = {
    ID: Number(movieScreening.split("_")[0]),
    RNUMBER: movieScreening.split("_")[1],
    MOVIETIME: movieScreening.split("_")[2].replaceAll("-", "/"),
  };

  const movieScreeningData: Promise<movieScreening> =
    getMovieScreening(screening);

  const Sdata = await movieScreeningData;

  const Mdata = await getMovie(Sdata.ID);
  const movies = await getMovies();

  const displayTerm = `${getMovieNameFromID(
    Sdata.ID,
    movies
  )} ${getFormattedDate(Sdata.MOVIETIME)}`;

  return (
    <main className="grid grid-cols-2 gap-10 h-screen pt-24">
      <MovieScreeningImage ID={Sdata.ID} name={Mdata.MNAME} />
      <MovieScreeningDesc movie={Mdata} movieScreening={Sdata} />
      <Ticket url={movieScreening} screening={Sdata} />
    </main>
  );
}

export default movieScreening;
