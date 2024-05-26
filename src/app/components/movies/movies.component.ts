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
  page = signal(1);
  totalPage = signal(1);

  async getMoviesService() {
    const { results } = await getMovies(this.page());
    this.data.set(results);
    this.totalPage.set(5000)
  }
  async ngOnInit() {
    await this.getMoviesService();
  }

  async setPagination(newPage: number) {
    this.page.set(newPage);
    this.data.set((await getMovies(newPage)).results);
  }
  async clearSearch() {
    this.search.set('');
    await this.getMoviesService()
  }
  async onSearch() {
    const search = this.search();
    await (async () => {
      const { results, total_pages } = await searchMovies(
        search,
        this.page()
      );
      this.data.set(results);
      this.page.set(1);
      this.totalPage.set(total_pages);
    })();

  }
  trackByFn(index: number, item: any): any {
    return item.id;
  }

  async onKeyPress(event: KeyboardEvent) {
    const key = event.key;
    if (key === 'Enter') {
      await this.onSearch();
    }
  }
}
