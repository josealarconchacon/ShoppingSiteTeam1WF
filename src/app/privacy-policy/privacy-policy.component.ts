import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit{

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
