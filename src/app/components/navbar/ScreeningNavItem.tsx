import ListItemImage from "../ListItemImage";
import Link from "next/link";
type Props = { movieScreening: movieScreening; name: string };

const ScreeningNavItem = ({
  movieScreening: { ID, RNUMBER, MOVIETIME },
  name,
}: Props) => {
  return (
    <Link
      href={`/${ID}_${RNUMBER}_${MOVIETIME.replaceAll("/", "-")}`}
      key={ID}
      className="flex flex-row bg-black gap-10 p-5"
    >
      <ListItemImage ID={ID} no="0" width={200} height={200} name={name} />
      <p className=" self-center text-3xl">{name}</p>
    </Link>
  );
};

export default ScreeningNavItem;
