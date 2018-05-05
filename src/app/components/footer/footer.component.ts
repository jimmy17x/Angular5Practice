import { Component, OnInit ,
                     Input,
                    Output,
                  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

//proppert binding  []
  @Input("x-company")
  company:string;

  @Input()
  date:Date;

  // event binding (contactEvent)
  // output/event binding
  @Output()
  contactEvent:EventEmitter<number> = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  contact()
  {
    // publish from this child to its subscribed event in parent
    this.contactEvent.emit(Math.random())
  }

}
