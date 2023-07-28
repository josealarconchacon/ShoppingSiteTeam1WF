import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../service/movie.service';
//import axios from 'axios';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnChanges {
  // properties
  movieId: string;
  movieData: any;
  genre: string = '';
  movies: any[] = [];
  email: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, public movieService: MovieService) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.movieId = params['id'];
        this.fetchMovieData(this.movieId);
        // console.log(`Movie ID: ${this.movieId}`);
      },
      (error) => {
        console.log(`Error getting data: ${error}`);
      }
    );

    
  }

  ngOnChanges(): void {
    this.route.paramMap.subscribe(params => {
      this.genre = params.get('genre') ?? '';
      this.getMoviesByGenre(this.genre);
    });
  }

  // fetch movie by id
  fetchMovieData(movieID: string) {
    const apiKey = '809f52d640msh8ba44e260d0fe3ap1b72f0jsnadbfe7ffcafb';
    const url = `https://imdb-top-100-movies.p.rapidapi.com/${movieID}`;

    this.http.get(url, { headers: { 'X-RapidAPI-Key': apiKey } }).subscribe(
      (response: any) => {
        this.movieData = response;
        console.log(`Movie Data Response: ${this.movieData}`);
      },
      (error) => {
        console.error('Error fetching movie data:', error);
      }
    );
  }
  getMoviesByGenre(genre: string): void {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
      headers: {
        'X-RapidAPI-Key': '809f52d640msh8ba44e260d0fe3ap1b72f0jsnadbfe7ffcafb',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
  };
  
  this.http.get<any[]>(url, options).subscribe(
    (response) => {
      console.log(response); // Log the API response
      this.movies = response.filter(movie => movie.genre.some((g: string) => g.toLowerCase() === genre.toLowerCase()));
      console.log(this.movies); // Log the filtered movies array
    },
    (error) => {
      console.error(error);
    }
  );
  }
  saveMovieToFavorites(movieData: any): void {
    const title = movieData.title;
    const year = movieData.year;
    const description = movieData.description;
    const image = movieData.image;

    console.log(title);
    // Fetch the user's email from localStorage
   const userEmail = localStorage.getItem('userEmail');

   if (userEmail) {

     // Call the saveMovieToUserFavorites method from the MovieService
     this.movieService.saveMovieToUserFavorites(userEmail, title, year, description, image).subscribe(
       (response) => {
        console.log(title);
         console.log('Movie saved to favorites:', response);
         // Handle success, e.g., display a success message to the user
       },
       (error) => {
         console.error('Error saving movie to favorites:', error);
         // Handle error, e.g., display an error message to the user
       }
     );
   } else {
     console.error('User email not found in localStorage.');
      }
  }
}
