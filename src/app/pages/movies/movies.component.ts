import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MoviesComponent } from '../../components/movies/movies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MoviesComponent, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export default class AppComponent {
  title = 'preliculas';
}
