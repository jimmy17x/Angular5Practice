import { DataService } from './../../shared/services/data.service';
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

  total:number ; // cart total amount

  // event binding (contactEvent)
  // output/event binding
  @Output()
  contactEvent:EventEmitter<number> = new EventEmitter()


  constructor(private dataService : DataService) {
      this.total = dataService.total
   }

  ngOnInit() {

     // RXJS Subscribe
     this.contactEvent
     .subscribe ( n  => {
       console.log("Contact ", n);
     })

    this.dataService.total$.subscribe(n => {
      console.log("Total subscribed from cart " + n)
      this.total = n;
    })
  }

  contact()
  {
    // publish from this child to its subscribed event in parent
    this.contactEvent.emit(Math.random())
  }

}
