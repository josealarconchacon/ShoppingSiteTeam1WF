import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  homeImage: string = "./assets/home.jpg";
  summerCollection: string = "./assets/summer-collection.jpg";
  pantsCollection: string = "./assets/pants-collection.jpg"
  shoesCollection: string = "./assets/shoes-collection.jpg"
}
