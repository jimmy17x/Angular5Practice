import { Brand } from './../models/brand';
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

  storage:Storage = window.localStorage
  getBrands(): Observable<Brand[]> {
    //todo: check if chache present , serve from cache else servve efrom cahche 
    let brandsJson = this.storage.getItem("brands")
    if(brandsJson)
    {
      console.log("serving from brands cache")
      let brands:Brand[] = <Brand[]>JSON.parse(brandsJson)
      return Observable.of(brands)
    }



    console.log("servicng from server")
    return this.http.
                get<Brand[]>(`${environment.apiEndPoint}/api/brands`)
                .map(brands=>{
                  // todo chache
                  console.log("caching brands")
                  this.storage.setItem("brands",JSON.stringify(brands))
                  return brands
                })



  }

  saveProduct(product:  Product): Observable<Product> {
    if  (product.id) { // update
      return  this.http
        .put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`,
          product);
    }  else  { //create
      return  this.http
        .post<Product>(`${environment.apiEndPoint}/api/products`,
          product);
    }
  }

}
