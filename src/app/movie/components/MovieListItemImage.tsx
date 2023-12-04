import React from "react";
import Image from "next/image";

type Props = {
  ID: number;
  name: string;
  width: number;
  height: number;
};

const MovieListItemImage = ({ ID, name, width, height }: Props) => {
  return (
    <Image
      src={`/filmImage/${ID}_${0}.jpg`}
      width={width}
      height={height}
      alt={`poster of ${name} movie`}
    ></Image>
  );
};

export default MovieListItemImage;
