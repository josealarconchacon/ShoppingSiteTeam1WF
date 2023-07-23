import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {}
}
