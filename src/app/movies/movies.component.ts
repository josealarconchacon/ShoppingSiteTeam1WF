import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {}

  async onMovieSelected(movie: string) {
    try {
      const data = await this.movieService.getSearchMovies(movie, 'movie');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}
