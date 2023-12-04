export default async function getMovie(ID: number): Promise<movie> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/movie?id=${ID}`, {
        method: 'GET',
    });
    const data = await res.json();
    return data[0]
}
