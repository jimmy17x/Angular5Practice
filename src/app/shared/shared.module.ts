import { Address } from './models/address';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './components/like/like.component';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
                  LikeComponent,
                  AddressComponent
                ],
  exports :[
            LikeComponent,
            AddressComponent
  ]
})



export class SharedModule { }
