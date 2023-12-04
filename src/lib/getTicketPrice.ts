export default async function getTicketPrice(ID: string): Promise<number> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/ticket/price?id=${ID}`, {
        method: 'GET',
    });
    const data = await res.json();
    return data[0]
}
