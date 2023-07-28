import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.css']
})
export class CookiePolicyComponent implements OnInit{

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

