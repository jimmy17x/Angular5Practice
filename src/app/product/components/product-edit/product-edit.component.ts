import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  
  product: Product  = new Product();


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

  }

  gotoList() {
    this.router.navigateByUrl('/products/list');
    // this.router.navigate(['/products', 'list']);
  }

}
