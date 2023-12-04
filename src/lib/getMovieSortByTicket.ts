export default async function getMovieSortByTicket(): Promise<any> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/movies/sort/withreview`, {
        method: 'GET',
    });
    const data = await res.json();

    return data[0]
}
