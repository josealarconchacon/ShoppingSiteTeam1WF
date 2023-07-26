import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [MovieService],
})
export class NavBarComponent implements OnInit {
  searchTitle: string;
  movies: any[];
  constructor(private movieService: MovieService, private http: HttpClient) {}

  ngOnInit() {}
  // Still need to fix this block of code for searching movies
  // search movies
  searchMovies() {
    this.movieService.searchMoviesByTitle(this.searchTitle).subscribe(
      (response: any) => {
        (this.movies = response.title), toString().toLowerCase(); // Assuming the response contains the movie data
        console.log(this.movies);
      },
      (error) => {
        console.error('An error occurred during the API call:', error);
      }
    );
  }
}
