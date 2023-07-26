import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [MovieService],
})
export class NavBarComponent implements OnInit {
  searchTitle: string;
  movies: any[];
  constructor(private movieService: MovieService, private http: HttpClient) {}

  ngOnInit() {}
}
