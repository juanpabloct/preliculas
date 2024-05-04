import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { getImagesMovie, getMovie } from './IdMovie.service';
import { Movie, MovieImages } from './IdMovie.model';
import { NgFor, NgForOf } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RecommendationsComponent } from '../../components/recomendations/recomendations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgbCarouselModule, NgFor, RecommendationsComponent],
  templateUrl: './IdMovies.component.html',
  styleUrl: './IdMovies.component.scss',
})
export default class AppComponent {
  title = 'preliculas';
  movie: Movie = Object.create(null)
  images: MovieImages["posters"] = []
  languages: Movie["spoken_languages"] = []
  constructor(private rutaActiva: ActivatedRoute) { }

  async ngOnInit() {
    let id_movie: number = this.rutaActiva.snapshot.params["id"]
    this.getServices(id_movie);
  }
  async getServices(id_movie: number) {
    this.movie = await getMovie(id_movie)
    this.languages = this.movie.spoken_languages
    this.images = (await getImagesMovie(id_movie)).posters
  }
  trackByFn(index: number, item: any) {
    return index;
  }
}
