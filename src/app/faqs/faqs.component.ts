import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FAQsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  id: any = '';
  accordion(ids: any) {
    if (this.id == ids) {
      this.id = '';
    } else {
      this.id = ids;
    }
  }
}
