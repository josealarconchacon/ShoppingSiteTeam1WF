import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl: string = 'https://imdb-top-100-movies.p.rapidapi.com/';
  private apiKey = '809f52d640msh8ba44e260d0fe3ap1b72f0jsnadbfe7ffcafb';

  constructor(private http: HttpClient) {}

  // get all movie
  getMovies(): Observable<any> {
    const options = {
      headers: {
        'x-rapidapi-key': '809f52d640msh8ba44e260d0fe3ap1b72f0jsnadbfe7ffcafb',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    };
    return this.http.get<any>(this.apiUrl, options);
  }

  getMovieDetails(movieId: string): Observable<any> {
    const apiKey = '55db4e09'; // Replace with your actual API key
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`;
    return this.http.get(url);
  }
}
