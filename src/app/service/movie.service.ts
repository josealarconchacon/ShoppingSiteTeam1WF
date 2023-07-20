import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl: string = 'https://imdb-top-100-movies.p.rapidapi.com/';
  private apiKey: string = '809f52d640msh8ba44e260d0fe3ap1b72f0jsnadbfe7ffcafb';

  movies: any[] = [];
  movieGenre: string = '';

  constructor(private http: HttpClient) {}

  // get movie method from API
  getMovies(): Observable<any> {
    const options = {
      headers: {
        'x-rapidapi-key': '809f52d640msh8ba44e260d0fe3ap1b72f0jsnadbfe7ffcafb',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    };
    return this.http.get<any>(this.apiUrl, options);
  }

  // Still need to fix this block of code for searching movies
  // search method
  searchMoviesByTitle(title: string) {
    const headers = new HttpHeaders().set('X-RapidAPI-Key', this.apiKey);
    const params = { title: title };
    return this.http.get(this.apiUrl, { headers: headers, params: params });
  }
}
