import getMovieNameFromID from "@/lib/getMovieNameFromID";
import Image from "next/image";

type Props = {
  ID: string;
  no: string;
  width: number;
  height: number;
};

export default async function MovieScreeningImage({
  ID,
  no,
  width,
  height,
}: Props) {
  const name = await getMovieNameFromID(ID);
  return (
    <Image
      src={`/filmImage/${ID}_${no}.jpg`}
      width={width}
      height={height}
      alt={`Image of ${name} movie`}
    />
  );
}
