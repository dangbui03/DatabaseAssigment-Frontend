export default async function editFilmScreening(movieScreening: movieScreening): Promise<any> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/ticket`, {
        method: 'PUT',
        body: JSON.stringify(movieScreening)
    });
    const data = await res.json();
    return data[0]
}
