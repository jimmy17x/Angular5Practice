import { ProductService } from './services/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductWidgetComponent } from './components/product-widget/product-widget.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes:Routes= [
  {
    //path:'products',
    path:'',
    component:ProductHomeComponent,
    //nested navigation
    children:[
      {
        path:'',
        redirectTo:'list',
        pathMatch:'prefix'
      },
      {
        path:'list',
        component:ProductListComponent
      },
      {
        path:'create',
        component:ProductEditComponent
      },
      {
        path:'edit/:id', // products/edit/12345
        component:ProductEditComponent
      }
      ,
      {
        path:'search', // products/edit/12345
        component:ProductSearchComponent
      }
      
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,

   // SharedModule
  ],
  declarations: [ProductHomeComponent, 
                  ProductListComponent, 
                  ProductEditComponent, 
                  ProductSearchComponent, 
                  ProductWidgetComponent
                ],
                providers:[
                  ProductService
                ]
})
export class ProductModule { }
