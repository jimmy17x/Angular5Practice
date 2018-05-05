import { Observable } from 'rxjs/Observable';
import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:7070/delayed/api/products')
  }



}
