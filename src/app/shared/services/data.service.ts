import { CartItem } from './../models/cart-item';
import { Injectable, NgModule } from '@angular/core';
import {Subject} from 'rxjs/Subject'

import  {BehaviorSubject} from 'rxjs/BehaviorSubject'
/*
  Business logic
  Data sharing with components
  web service communication
*/
@Injectable()
export class DataService {

  // asytnchronous deleayed subject 
  //amount$:Subject<number> ;
  amount$: BehaviorSubject<number>;
  total$:Subject<number> ;

  amount: number = 0;
  total:number=0;
  items: CartItem[] = [];

  constructor() { 
    console.log("Data service constructor called")
    //this.amount$ = new Subject()
    this.amount$ = new BehaviorSubject(this.amount)
    this.total$ = new Subject()
  }

  addItem(item:CartItem) {
    this.items.push(item)
    this.total+=item.qty;
    this.amount+=item.price*item.qty  ;
    console.log("Amount " , this.amount);

    //publish the amount
    this.amount$.next(this.amount)
    this.total$.next(this.total)
  }

  emptyCart() {
    this.items=[];
    this.amount=0;
    this.total=0  

        //publish the amount
       this.amount$.next(this.amount)
        this.total$.next(this.total)
  }

}
