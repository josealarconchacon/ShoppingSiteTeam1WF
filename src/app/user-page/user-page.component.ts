import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  userData: any; // Declare userData property to store the user data
  movies: any[] = [];
  

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // Fetch the email of the logged-in user from localStorage
    const email = localStorage.getItem('userEmail');

    // Fetch the user data from the backend API using the email of the logged-in user
    this.http.get<any>("http://localhost:8086/user/user?email=" + email).subscribe(
      (response: any) => {
        // Set the user data received from the backend to the userData property
        this.userData = response;
        console.log('User Data from User Component:', this.userData);

        this.getSavedMovies(email);
        
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  getMoviesByGenre(genre: string): void {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
      headers: {
        'X-RapidAPI-Key': '809f52d640msh8ba44e260d0fe3ap1b72f0jsnadbfe7ffcafb',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
  };
  
  this.http.get<any[]>(url, options).subscribe(
    (response) => {
      console.log(response); // Log the API response
      this.movies = response.filter(movie => movie.genre.some((g: string) => g.toLowerCase() === genre.toLowerCase()));
      console.log(this.movies); // Log the filtered movies array
    },
    (error) => {
      console.error(error);
    }
  );
  }

  logout() {
    this.http.post<any>("http://localhost:8086/user/logout", {}).subscribe(
      (response: any) => {
        console.log(response);
        // Clear the user data in the frontend (you can do this in any way suitable for your application)
        this.userData = null;
        // Redirect the user to the login page or any other page you want after logout
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Logout error:', error);
        // Handle any error that might occur during logout
      }
    );
  }

  getSavedMovies(email: string): void {
    // Make an API call to fetch the saved movies for the user
    this.http.get<any[]>("http://localhost:8086/save/save").subscribe(
      (response: any[]) => {
        this.movies = response;
        console.log('Saved Movies:', this.movies);
      },
      (error) => {
        console.error('Error fetching saved movies:', error);
      }
    );
  }
}