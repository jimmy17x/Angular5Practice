import {
  Directive,
  OnInit,
  OnDestroy,

  Input,
  Output,
  EventEmitter,

  HostListener, // directive listern for mouse enter , click etc

  ElementRef, // wrapper for dom
  Renderer2 
} from '@angular/core';

@Directive({
  // [] must 
  selector: '[appHighLight]',
  exportAs:'appHighLight'
})
export class HighlightDirective implements OnInit, OnDestroy {

  @Input("appHighLight")
  color: string;

  constructor(private hostElement : ElementRef,
               private rendered :Renderer2) {

    console.log("Highlight directive created");
  }

  ngOnInit() {
    console.log("highlight init");
    console.log("Color ", this.color);
  }

  ngOnDestroy() {
    console.log("highlight destroy");
  }

  @HostListener('click')
  onclick() {
    console.log("Directive clicked")
  }

  
  @HostListener('mouseenter')
  onenter() {
    console.log("Directive enter")
    this.rendered.setStyle(this.hostElement.nativeElement,
      'background',
        this.color)
  }

  
  @HostListener('mouseleave')
  onleave() {
    console.log("Directive leave")
    this.rendered.removeStyle(this.hostElement.nativeElement,
      'background')
   
  }

  setColor(color:string)
  {
    console.log("set colore , ", color)
    this.color = color
  }
}
