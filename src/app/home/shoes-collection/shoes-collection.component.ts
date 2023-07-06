import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoes-collection',
  templateUrl: './shoes-collection.component.html',
  styleUrls: ['./shoes-collection.component.css']
})
export class ShoesCollectionComponent {
  shoesCollection: string = "./assets/shoes-collection.jpg";
  constructor(private router: Router) { }
}
