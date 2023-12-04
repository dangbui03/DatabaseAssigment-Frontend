export default async function getMovies(): Promise<movie[]> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/movies`, {
        method: 'GET',
    });
    const data = await res.json();

    return data[0]
}
