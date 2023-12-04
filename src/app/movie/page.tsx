import React from "react";
import getMovies from "@/lib/getMovies";
import MovieList from "./components/MovieList";

export default async function page() {
  const movies = await getMovies();
  return (
    <main className="pt-24 flex place-content-center w-screen">
      <MovieList movies={movies} />
    </main>
  );
}
