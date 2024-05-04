import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ResultMovies } from '../../../models/peliculas';

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './target.component.html',
  styleUrl: './target.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TargetComponent {
  @Input() movie!: ResultMovies;
  async ngOnInit() {
  }
}
