export default async function deleteFilmScreening(ID: number): Promise<any> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/screen?id=${ID}`, {
        method: 'DELETE',
    });
    const data = await res.json();
    return data[0]
}
