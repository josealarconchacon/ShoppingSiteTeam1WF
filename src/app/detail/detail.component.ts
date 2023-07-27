import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  movieId: string;
  movieData: any;
  title: String;
  genre: String;
  releaseYear: Number;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.movieId = params['id'];
        this.fetchMovieData(this.movieId);
        console.log(`Movie ID: ${this.movieId}`);
        console.log(`Movie Data: ${this.movieData}`);
      },
      (error) => {
        console.log(`Error getting data: ${error}`);
      }
    );
  }

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

  saveMovie() {
    const url = 'http://localhost:3000/Save';
    const userId = 'someUserId'; // Replace this with the actual userId
    const saveData = {
      userId: userId,
      title: this.movieData.title,
      genre: this.movieData.genre,
      releaseYear: parseInt(this.movieData.year),
      description: this.movieData.description,
      imageUrl: this.movieData.image
    }
    this.http.post(url, saveData).subscribe(
      response => {
        console.log('Movie saved successfully:', response);
      },
      error => {
        console.error('Error saving movie:', error);
      }
    );
  }
}
