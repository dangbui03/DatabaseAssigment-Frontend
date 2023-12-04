export default async function getMovieScreeningTimes(): Promise<any> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/screen/time`, {
        method: 'GET',
    });
    const data = await res.json();

    return data[0]
}
