import ScreeningNavItem from "./ScreeningNavItem";
import Link from "next/link";
import getMovieScreenings from "@/lib/getMovieScreenings";

async function ScreeningNav() {
  const movieScreenings = await getMovieScreenings();

  return (
    <ul>
      {movieScreenings.map((movieScreening) => {
        return (
          <Link
            href={`/${movieScreening.ID}_${
              movieScreening.RNUMBER
            }_${movieScreening.MOVIETIME.replaceAll(
              "/",
              "-"
            )}_${movieScreening.MSSTARTIME.replaceAll(":", "-")}`}
            key={movieScreening.ID}
          >
            <ScreeningNavItem
              ID={movieScreening.ID}
              RNUMBER={movieScreening.RNUMBER}
              MOVIETIME={movieScreening.MOVIETIME}
              MSSTARTIME={movieScreening.MSSTARTIME}
            />
          </Link>
        );
      })}
    </ul>
  );
}

export default ScreeningNav;
