import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})

export class CollectionsComponent {
  genre: string = '';
  movies: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.genre = params.get('genre') ?? '';
      this.getMoviesByGenre(this.genre);
    });
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
}


