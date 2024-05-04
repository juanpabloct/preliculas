import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "movies",
        loadComponent: () => import("./pages/movies/movies.component"),
        children: [
        ]
    },
    {
        path: "movies/:id",
        loadComponent: () => import("./pages/IdMovies/IdMovies.component")
    },
    {
        path: "",
        redirectTo: "movies",
        pathMatch: "full"
    }
];
