import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TargetComponent } from './components/target/target.component';
import { GetMovies } from '../../models/peliculas';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { getMovies, searchMovies } from './peliculas.services';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, FormsModule, TargetComponent, NgbPagination],
  templateUrl: `./peliculas.component.html`,
  styleUrl: './peliculas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeliculasComponent {
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
