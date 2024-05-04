import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TargetComponent } from '../target/target.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { getMovies, searchMovies } from './movies.services';
import { GetMovies } from '../../../models/peliculas';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, FormsModule, TargetComponent, NgbPagination],
  templateUrl: `./movies.component.html`,
  styleUrl: './movies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent {
  search = signal('');
  data = signal<GetMovies['results']>([]);
  private copyData = signal<GetMovies['results']>([]);
  page = signal(1);
  totalPage = signal(0);

  async getMoviesService() {
    const { results } = await getMovies(this.page());
    this.copyData.set(results);
    this.data.set(results);
  }
  async ngOnInit() {
    this.getMoviesService();
  }

  async setPagination(newPage: number) {
    this.page.set(newPage);
    this.data.set((await getMovies(newPage)).results);
  }
  clearSearch() {
    this.search.set('');
  }
  onSearch() {
    const search = this.search();
    if (search.length > 0) {
      (async () => {
        const { results, total_pages } = await searchMovies(
          search,
          this.page()
        );
        this.data.set(results);
        this.page.set(1);
        this.totalPage.set(total_pages);
      })();
    } else if (this.data().length !== 0 && search.length === 0) {
      this.data.set(this.copyData());
    }
  }
  trackByFn(index: number, item: any): any {
    return item.id; // Suponiendo que item tiene una propiedad 'id' que es única
  }

  onKeyPress(event: KeyboardEvent) {
    const key = event.key;
    if (key === 'Enter') {
      this.onSearch();
    }
  }
}
