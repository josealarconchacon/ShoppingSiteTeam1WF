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

  navigateToCollections() {
    this.router.navigate(['/collections']);
  }
  
  homeImage: string = "./assets/home.jpg";
  summerCollection: string = "./assets/summer-collection.jpg";
  pantsCollection: string = "./assets/pants-collection.jpg";
  shoesCollection: string = "./assets/shoes-collection.jpg";

  
}
