import getMovieScreening from "@/lib/getMovieScreening";
import getMovies from "@/lib/getMovies";
import getFormattedDate from "@/lib/getFormattedDate";
import getMovieNameFromID from "@/lib/getMovieNameFromID";
import TicketMain from "./components/TicketMain";

type Props = {
  params: {
    ticketForMovieScreening: string;
  };
};

export async function generateMetadata({
  params: { ticketForMovieScreening },
}: Props) {
  let data: movieScreening = {
    ID: ticketForMovieScreening.split("_")[0],
    RNUMBER: ticketForMovieScreening.split("_")[1],
    MOVIETIME: ticketForMovieScreening.split("_")[2].replaceAll("-", "/"),
    MSSTARTIME: ticketForMovieScreening.split("_")[3].replaceAll("-", ":"),
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
    title: `Ticket for ${displayTerm}`,
    description: `Purchase ticket for ${displayTerm}`,
  };
}

const page = async ({ params: { ticketForMovieScreening } }: Props) => {
  return <TicketMain />;
};

export default page;
