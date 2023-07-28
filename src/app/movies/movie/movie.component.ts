import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private movieService: MovieService,
    private http: HttpClient
  ) {}

  // properties
  movie: Movie = new Movie();
  name: string = '';

  ngOnInit(): void {
    this.get_movie_detail_byID();
  }

  async get_movie_detail_byID() {
    this.name = this.activeRoute.snapshot.params['name'];
    try {
      const data_request: any = await this.movieService.getSearchMovieByID(
        this.activeRoute.snapshot.params['id']
      );
      if (data_request.Response == 'True') {
        console.log(data_request);
        this.movie = data_request;
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  }
  // access rating object from api to display the source
  get_movie_rating_source(source: string) {
    const dictionary = {
      'Internet Movie Database': '../../../assets/IMDb_Logo_Square.svg.png',
      'Rotten Tomatoes': '../../../assets/rotten.png',
      Metacritic: '../../../assets/metacritic.webp',
    };
    return dictionary[source];
  }

  // get list of actors from api
  get_actors(actor: string) {
    return actor.split(',');
  }
}
