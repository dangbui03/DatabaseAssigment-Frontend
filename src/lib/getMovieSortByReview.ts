export default async function getMovieSortByReview(): Promise<any> {
    const res = await fetch(`http://127.0.0.1:8080/api/v2/movies/sort/withquantity`, {
        method: 'GET',
    });
    const data = await res.json();

    return data[0]
}
