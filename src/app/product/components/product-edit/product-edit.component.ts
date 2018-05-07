import { inject } from '@angular/core/testing';
import { Brand } from './../../models/brand';
import { ProductService } from './../../services/product.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  
  product: Product  = new Product();

  brands$:Observable<Brand[]>

  @ViewChild("productForm")
  form :NgForm


  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private productService: ProductService) { }

  ngOnInit() {
    // to read url/matrix parameter
    // products/edit/:id;source=list
    const id = this.route.snapshot.params['id'];
    const source = this.route.snapshot.params['source'];
    console.log("ID ", id, "source ", source);

    if (id) {
      // edit
      this.productService.getProduct(id)
          .subscribe(product => {
            this.product = product;
          });
    }

    this.brands$ = this.productService.getBrands();

  }

  saveProduct()
  {

    if(this.form.invalid)
    {
      alert('INvalid form ,cannot save')
      return
    }

    if(this.form.pristine)
    {
      alert('no changes found')
      return
    }

    this.productService
    .saveProduct(this.product)
    .subscribe(saveProduct => {
      console.log("product saved" , saveProduct);

      // option  1 go to list page
     // this.gotoList();
      // option : contnue woowrkin no the same form , then use put method
      this.product = saveProduct
      this.form.reset(saveProduct)
    })
  }



  gotoList() {
    this.router.navigateByUrl('/products/list');
    // this.router.navigate(['/products', 'list']);
  }

}
