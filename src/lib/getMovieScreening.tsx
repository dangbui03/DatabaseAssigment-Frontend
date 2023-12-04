export default async function getMovieScreening(
  movieScreening: movieScreening
): Promise<movieScreening> {
  const res = await fetch(
    `http://127.0.0.1:8080/api/v2/screen?id=${movieScreening.ID}&rnumber=${movieScreening.RNUMBER}&movietime=${movieScreening.MOVIETIME}`,
    {
      method: "GET",
    }
  );
  const data = await res.json();
  return data[0];
}
