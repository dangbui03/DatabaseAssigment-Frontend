import getMovieScreening from "@/lib/getMovieScreening";
import getMovieNameFromID from "@/lib/getMovieNameFromID";
import MovieScreeningImage from "./components/movieScreeningImage";
import MovieScreeningDesc from "./components/movieScreeningDesc";
import getMovie from "@/lib/getMovie";

type Props = {
  params: {
    movieScreening: string;
  };
};

export async function generateMetadata({ params: { movieScreening } }: Props) {
  let data: movieScreening = {
    ID: movieScreening.split("_")[0],
    RNUMBER: movieScreening.split("_")[1],
    MOVIETIME: movieScreening.split("_")[2].replaceAll("-", "/"),
    MSSTARTIME: movieScreening.split("_")[3].replaceAll("-", ":"),
  };

  const movieScreeningData: Promise<movieScreening> = getMovieScreening(data);
  data = await movieScreeningData;

  const displayTerm = await getMovieNameFromID(data.ID);

  if (!data) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Film screening for ${displayTerm}`,
  };
}

async function movieScreening({ params: { movieScreening } }: Props) {
  let Sdata: movieScreening = {
    ID: movieScreening.split("_")[0],
    RNUMBER: movieScreening.split("_")[1],
    MOVIETIME: movieScreening.split("_")[2].replaceAll("-", "/"),
    MSSTARTIME: movieScreening.split("_")[3].replaceAll("-", ":"),
  };

  const movieScreeningData: Promise<movieScreening> = getMovieScreening(Sdata);

  Sdata = await movieScreeningData;

  const Mdata = await getMovie(Sdata.ID);

  return (
    <main>
      <MovieScreeningImage ID={Sdata.ID} no="1" width={1200} height={1200} />
      <MovieScreeningDesc movie={Mdata} movieScreening={Sdata} />
    </main>
  );
}

export default movieScreening;
