import getMovie from "@/lib/getMovie";
import MovieListItemImage from "../components/MovieListItemImage";
import MovieDesc from "../components/MovieDesc";

type Props = {
  params: {
    movieID: string;
  };
};

export async function generateMetadata({ params: { movieID } }: Props) {
  const data: movie = await getMovie(movieID);

  if (!data) {
    return {
      title: `Movie not found`,
    };
  }

  const displayTerm = data.MNAME;

  return {
    title: displayTerm,
    description: `Film screening for ${displayTerm}`,
  };
}

const page = async ({ params: { movieID } }: Props) => {
  const data: movie = await getMovie(movieID);

  if (!data) {
    return <h2>Movie not found</h2>;
  }

  return (
    <main className="grid grid-cols-2 gap-10 h-screen pt-24 items-center justify-center w-screen -z-10">
      <MovieListItemImage
        ID={data.ID}
        name={data.MNAME}
        width={700}
        height={700}
      />
      <MovieDesc movie={data} />
    </main>
  );
};

export default page;
