import { CommonModule, NgFor, NgForOf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TargetComponent } from '../target/target.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { getRecommendationsMovie } from '../../pages/IdMovies/IdMovie.service';
import { Recommendations } from '../../pages/IdMovies/IdMovie.model';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule, NgFor,],
  templateUrl: `./recomendations.component.html`,
  styleUrl: './recomendations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsComponent {
  constructor(private rutaActiva: ActivatedRoute) { }
  recommendations: Recommendations["results"] = []
  async ngOnInit() {
    let id_movie: number = this.rutaActiva.snapshot.params["id"]

    this.getService(id_movie);
  }
  async getService(id: number) {
    this.recommendations = (await getRecommendationsMovie(id)).results

  }
  trackByFn(index: number, item: any) {
    return index;
  }

}
