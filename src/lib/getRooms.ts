export default async function getRooms(): Promise<room[]> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/rooms`, {
        method: 'GET',
    });
    const data = await res.json();

    return data[0]
}
