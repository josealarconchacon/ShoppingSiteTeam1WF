import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  ngOnInit() {}

  constructor(private router: Router) { }

  navigateToCollections(genre: string): void {
    this.router.navigate(['/collections', genre]);
  }
  
  homeImage: string = "./assets/home.jpg";
  actionCollection: string = "./assets/action-collection.jpg";
  comedyCollection: string = "./assets/comedy-collection.jpg";
  dramaCollection: string = "./assets/drama-collection.jpg";
  allCollection: string = "./assets/all-collection.jpg";

  
}
