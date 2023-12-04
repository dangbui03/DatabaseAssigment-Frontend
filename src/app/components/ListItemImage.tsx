import Image from "next/image";
import getMovieNameFromID from "@/lib/getMovieNameFromID";

type Props = {
  ID: number;
  no: string;
  width: number;
  height: number;
  name: string;
};

export default function ListItemImage({ ID, no, width, height, name }: Props) {
  return (
    <Image
      src={`/filmImage/${ID}_${no}.jpg`}
      width={width}
      height={height}
      alt={`Image of ${name} movie`}
    />
  );
}
