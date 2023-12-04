export default async function addCustomer(customer: customer): Promise<any> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/customer`, {
        method: 'POST',
        body: JSON.stringify(customer)
    });
    const data = await res.json();
    return data[0]
}
