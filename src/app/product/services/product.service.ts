import { environment } 
        from './../../../environments/environment';

import { Product } from './../models/product';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


console.log("ENV ", environment)

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  // GET /api/products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }

  // GET /api/products/100
  getProduct(id: any): Observable<Product> {
    return this.http
          .get<Product>(`${environment.apiEndPoint}/api/products/${id}`);
  }


}
