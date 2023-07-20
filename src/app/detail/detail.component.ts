import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  movieId: string;
  movieData = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.movieId = params['id'];
        this.movieData = history.state.movieData ?? 'No Data to display';
        console.log(`Movie ID: ${this.movieId}`);
        console.log(`Movie Data: ${this.movieData}`);
      },
      (error) => {
        console.log(`Error getting data: ${error}`);
      }
    );
  }
}
