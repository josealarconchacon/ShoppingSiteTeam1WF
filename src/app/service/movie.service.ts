import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl: string = 'https://imdb-top-100-movies.p.rapidapi.com/';
  private omdb_api_key: string = '55db4e09';
  private base_url: string = 'http://www.omdbapi.com/';

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

  // searchMovies() will get a list of movies, it take two params, name and type to
  getSearchMovies(name: string, type: string) {
    const search_movie = this.http
      .get(
        `${this.base_url}?apikey=${this.omdb_api_key}&s=${name}&type=${type}`
      )
      .toPromise();
    return search_movie;
  }

  // getSearchMovieByID() will get the selected movie by the id
  getSearchMovieByID(id: string) {
    const movie_id = this.http
      .get(`${this.base_url}?apikey=${this.omdb_api_key}&i=${id}`)
      .toPromise();
    return movie_id;
  }
}
