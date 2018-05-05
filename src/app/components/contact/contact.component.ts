import { Component, OnInit } from '@angular/core';
interface Address{
  city:string;
  state?:string;// optional
  pincode:number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  // address:Address = {
  //   city:'BLR',
  //   pincode:56001
  // }

  address:Address;

  constructor() { }

  ngOnInit() {

    console.log("contact init")
    setTimeout(() => {
      this.address={
        city:"BLR",
        pincode:560035
      }
    } , 3000)
  }

}
