export default async function getMovieScreenings(): Promise<movieScreening[]> {
  const res = await fetch(`http://127.0.0.1:8080/api/v2/screens`, {
    method: "GET",
  });
  const data = await res.json();
  return data[0];
}
