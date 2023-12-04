export default async function editTicketPrice(T_PRICE: number): Promise<any> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/ticket`, {
        method: 'PUT',
        body: JSON.stringify({ "t_price": T_PRICE })
    });
    const data = await res.json();
    return data[0]
}
