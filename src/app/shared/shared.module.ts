import { DataService } from './services/data.service';
import { Address } from './models/address';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './components/like/like.component';
import { AddressComponent } from './components/address/address.component';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
                  LikeComponent,
                  AddressComponent,
                  PowerPipe,
                  FilterPipe,
                  SortPipe,
                  HighlightDirective
                ],
  exports :[
            LikeComponent,
            AddressComponent,
            PowerPipe,
            FilterPipe,
            SortPipe,
            HighlightDirective
  ],

  providers:[
    // all the services goes here
    DataService
  ]
})



export class SharedModule { }
