import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-and-refunds',
  templateUrl: './return-and-refunds.component.html',
  styleUrls: ['./return-and-refunds.component.css']
})
export class ReturnAndRefundsComponent implements OnInit{
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
