import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/service/movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  // property
  movies: Movie[] = [];
  name: string = '';

  constructor(
    private movieService: MovieService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.show_result_back();
  }

  async show_result_back() {
    this.activeRoute.params.subscribe(async (params: Params) => {
      this.name = params['name'];
      try {
        const data_req: any = await this.movieService.getSearchMovies(
          this.name,
          'movie'
        );
        // if data_req is true, then assign movies array to data_req
        if (data_req.Response == 'True') {
          this.movies = data_req.Search;
        } else {
          Swal.fire('Error: Movie not found', data_req.error, 'error');
        }
      } catch (error) {
        console.log(error);
      }
    });

    // save movie name in the variable name
    this.name = this.activeRoute.snapshot.params['name'];

    try {
      const data_req: any = await this.movieService.getSearchMovies(
        this.name,
        'movie'
      );
      // if data_req is true, then assign movies array to data_req
      if (data_req.Response == 'True') {
        this.movies = data_req.Search;
      } else {
        Swal.fire('Error: Movie not found', data_req.error, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
