import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{

  constructor(){}

  ngOnInit(){}
  id:any ='';
  accordion(ids:any){
    if(this.id==ids){
      this.id = '';
    }else{
      this.id = ids;
    }
  }
}
