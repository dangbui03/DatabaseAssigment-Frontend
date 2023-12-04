"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

type Props = {
  children: React.ReactNode;
};

export type movieScreeningContextType = {
  movieScreening: movieScreening | undefined;
  setMovieScreening: Dispatch<SetStateAction<movieScreening | undefined>>;
};

export const movieScreeningContext =
  createContext<movieScreeningContextType | null>(null);

export default function MovieScreeningContextProvider({ children }: Props) {
  const [movieScreening, setMovieScreening] = useState<movieScreening>();

  return (
    <movieScreeningContext.Provider
      value={{ movieScreening, setMovieScreening }}
    >
      {children}
    </movieScreeningContext.Provider>
  );
}
