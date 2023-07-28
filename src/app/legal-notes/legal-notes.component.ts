import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-notes',
  templateUrl: './legal-notes.component.html',
  styleUrls: ['./legal-notes.component.css']
})
export class LegalNotesComponent  implements OnInit{

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
