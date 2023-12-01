import getMovies from "./getMovies";

export default async function getMovie(ID: string): Promise<movie> {
    const movies = await getMovies()

    const name = movies.find((movie) => {
        return movie.ID === ID
    }) as movie

    return name
}
