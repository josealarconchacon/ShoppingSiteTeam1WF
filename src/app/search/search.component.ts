import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  // properties
  movieTitle: string;
  searchResults: any[];

  constructor(private http: HttpClient, private movieService: MovieService) {}

  ngOnInit(): void {}

  // search movie method
  searchMovies() {
    const apiKey = '55db4e09';
    const apiUrl = `http://www.omdbapi.com/?s=${this.movieTitle}&apikey=${apiKey}`;
    this.http.get(apiUrl).subscribe((data: any) => {
      this.searchResults = data.Search;
    });
  }
  // ---------------
}
