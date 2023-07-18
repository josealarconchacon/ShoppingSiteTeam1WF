import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'],
})
export class ViewAllComponent implements OnInit {
  movies: any = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  // get all movies
  getAllMovies() {
    this.movieService.getMovies().subscribe((response: any[]) => {
      console.log('Response:', response);
      this.movies = response;
    });
  }
}
