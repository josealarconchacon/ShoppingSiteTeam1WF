import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnChanges {
  // properties
  movieId: string;
  movieData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

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

  ngOnChanges(): void {}

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
}
