export default async function generateTickets(ID: number, RNUMBER: string, MOVIETIME: string): Promise<any> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/tickets`, {
        method: 'POST',
        body: JSON.stringify({
            "id": ID,
            "rnumber": RNUMBER,
            "movietime": MOVIETIME
        })
    });
    const data = await res.json();
    return data[0]
}
