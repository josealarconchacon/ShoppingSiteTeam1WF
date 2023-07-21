import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'],
})
export class ViewAllComponent implements OnInit, OnChanges {
  movies: any[] = [];
  genre: string = '';

  movieId: string;
  movieData: any;

  constructor(
    private http: HttpClient,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  ngOnChanges(): void {
    this.route.paramMap.subscribe((params) => {
      this.genre = params.get('genre') ?? '';
      this.fetchMoviesByGenre(this.genre);
    });
  }

  // get all movies
  getAllMovies() {
    this.movieService.getMovies().subscribe((response: any[]) => {
      console.log('Response:', response);
      this.movies = response;
    });
  }

  // fetch movies category
  fetchMoviesByGenre(genre: string): void {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
      headers: {
        'X-RapidAPI-Key': '809f52d640msh8ba44e260d0fe3ap1b72f0jsnadbfe7ffcafb',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    };

    this.http.get<any[]>(url, options).subscribe(
      (response) => {
        this.movies = response.filter((movie) =>
          movie.genre.some(
            (g: string) => g.toLowerCase() === genre.toLowerCase()
          )
        );
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
