export default async function addBuyTicket(buyTicket: buy_ticket): Promise<any> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/ticket/buyticket`, {
        method: 'POST',
        body: JSON.stringify(buyTicket)
    });
    const data = await res.json();
    return data[0]
}
