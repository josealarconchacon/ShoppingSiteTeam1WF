import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pants-collection',
  templateUrl: './pants-collection.component.html',
  styleUrls: ['./pants-collection.component.css']
})
export class PantsCollectionComponent {
  pantsCollection: string = "./assets/pants-collection.jpg";
  constructor(private router: Router) { }
}
