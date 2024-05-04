import { GetMovies } from "../../../models/peliculas";

export const getMovies = async (page: number) => {
  const data: GetMovies = await (
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_video=true&language=en-US&page=${page}`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGY4YmRjMzdmZWIyYWEyY2ExNTY1OWUxM2Q4NDdkMyIsInN1YiI6IjYyZTFjZjIyZGExMGYwMDEzNGEyNzlmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yek2aNe87Kp1BtDgnqqYbPEQZa7eV5WV-PKwlz2j_gU',
        },
      }
    )
  ).json();
  return data;
};

export const searchMovies = async (query: string, page: number) => {
  const data: GetMovies = await (
    await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGY4YmRjMzdmZWIyYWEyY2ExNTY1OWUxM2Q4NDdkMyIsInN1YiI6IjYyZTFjZjIyZGExMGYwMDEzNGEyNzlmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yek2aNe87Kp1BtDgnqqYbPEQZa7eV5WV-PKwlz2j_gU',
        },
      }
    )
  ).json();
  return data;
};
