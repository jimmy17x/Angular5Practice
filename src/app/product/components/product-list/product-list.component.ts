import { Observable } from 'rxjs/Observable';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  // products: Product[] = []
  // subscription: Subscription

  products$:Observable<Product[]>

  constructor(private productService: ProductService) {

  }

  ngOnInit() {

    this.products$ =  this.productService.getProducts()
    // this.subscription = this.productService
    //   .getProducts()
    //   .subscribe(products => {
    //     this.products = products
    //     console.log("got the productds - ", products.length)
    //   })
  }

  ngOnDestroy() {
    // console.log("destroying list component")
    // this.subscription.unsubscribe()
  }

}
