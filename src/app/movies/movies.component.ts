import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import Swal from 'sweetalert2';
import { Movie } from '../model/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  // property
  movies: Movie[] = [];

  constructor(private router: Router) {}
  ngOnInit(): void {}

  async onMovieSelected(movie: string) {
    if (!movie)
      Swal.fire(
        'There is no movie',
        'Make sure you type the movie name',
        'warning'
      );
    else {
      this.router.navigate(['/movies', movie]);
    }
  }
}
