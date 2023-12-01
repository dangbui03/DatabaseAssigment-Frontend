import getMovies from "./getMovies";

export default async function getMovieNameFromID(ID: string): Promise<string> {
    const movies = await getMovies()

    const name = movies.find((movie) => {
        return movie.ID === ID
    })?.MNAME as string

    return name
}
