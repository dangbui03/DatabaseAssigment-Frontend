import getMovieNameFromID from "@/lib/getMovieNameFromID";
import ListItemImage from "../ListItemImage";

type Props = movieScreening;

const ScreeningNavItem = async ({ ID, RNUMBER, MOVIETIME }: Props) => {
  const name = await getMovieNameFromID(ID);
  return (
    <li className="flex">
      <ListItemImage ID={ID} no="0" width={100} height={100} />
      <p>{name}</p>
    </li>
  );
};

export default ScreeningNavItem;
