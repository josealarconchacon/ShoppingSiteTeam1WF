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

      // try {
      //   const data_req: any = await this.movieService.getSearchMovies(
      //     movie,
      //     'movie'
      //   );
      //   // if data_req is true, then assign movies array to data_req
      //   if (data_req.Response == 'True') this.movies = data_req.Search;
      //   else {
      //     Swal.fire('Error: Movie not found', data_req.error, 'error');
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    }
  }
}
