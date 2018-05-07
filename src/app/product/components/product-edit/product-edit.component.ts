import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    // mapped in url routing configruations like this - procudts/edit/:id;source-list
    const id = this.route.snapshot.params["id"]
    const source = this.route.snapshot.params['source']

    console.log("id and soruce  " , id , source )
  }

}
