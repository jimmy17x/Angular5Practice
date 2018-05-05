import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  memebers :string[] = ["kalsi " , "prateek"];
  show:boolean = true;
  
  isMouseOver:boolean=false;
  aboutLikes:number = 100;

  

  constructor() { }

  ngOnInit() {
  }

  empty()
  {
    this.memebers = [];
  }

  addMember(name:string){
    this.memebers.push(name);
  }

}
