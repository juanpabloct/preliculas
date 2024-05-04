import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ResultMovies } from '../../../../models/peliculas';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TargetComponent {
  constructor(private router: Router) { }

  @Input() movie!: ResultMovies;
  async ngOnInit() {
  }
  onEventClick(id: number) {
    console.log(id);

    // this.router.navigate([`/movies/${id}`])
  }
}
