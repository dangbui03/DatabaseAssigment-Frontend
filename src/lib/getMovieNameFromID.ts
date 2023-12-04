export default function getMovieNameFromID(ID: number, movies: movie[]): string {
    const name = movies.find((movie) => {
        return movie.ID === ID
    })?.MNAME as string

    return name
}
