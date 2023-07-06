import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-summer-collection',
  templateUrl: './summer-collection.component.html',
  styleUrls: ['./summer-collection.component.css']
  
})

export class SummerCollectionComponent {
  summerCollection: string = "./assets/summer-collection.jpg";
  constructor(private router: Router) { }

}
