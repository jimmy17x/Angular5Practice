import { HighlightDirective } from './../../shared/directives/highlight.directive';
import { Component, 
        OnInit , 
        ViewChild,
        ElementRef 
      } from '@angular/core';

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

  @ViewChild("memberName")
  inputElement:ElementRef

  @ViewChild("#p1")
  p1Element:ElementRef

  // access directive instance
  @ViewChild("highLight1")
    highLight:HighlightDirective;

  constructor() { }

  ngOnInit() {
    this.p1Element.nativeElement.textContent = "from TS"
    this.inputElement.nativeElement.focus()
    console.log("Dir " , this.highLight.color)
    this.highLight.setColor("blue")
  }

  empty()
  {
    this.memebers = [];
  }

  addMember(name:string){
    this.memebers.push(name);
  }

}
