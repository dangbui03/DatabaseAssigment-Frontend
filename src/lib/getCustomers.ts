export default async function getCustomers(): Promise<customer> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/customers`, {
        method: 'GET',
    });
    const data = await res.json();

    return data[0]
}
