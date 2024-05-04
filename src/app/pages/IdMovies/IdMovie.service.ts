

import { Movie, MovieImages, Recommendations } from "./IdMovie.model";

export const getMovie = async (id: number) => {
    const data: Movie = await (
        await fetch(
            `https://api.themoviedb.org/3/movie/${id}`,
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

export const getImagesMovie = async (id: number) => {
    const data: MovieImages = await (
        await fetch(
            `https://api.themoviedb.org/3/movie/${id}/images`,
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

export const getRecommendationsMovie = async (id: number) => {
    const data: Recommendations = await (
        await fetch(
            `https://api.themoviedb.org/3/movie/${id}/recommendations`,
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

