import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent implements OnInit {
  
  // properties
  @Output() movieSelected = new EventEmitter<string>();
  @Input() placeholder: string;
  name: string;

  constructor() {}

  ngOnInit(): void {}

  select_movie() {
    this.movieSelected.emit(this.name);
  }
}
