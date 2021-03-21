import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}

  getProductos(){
    return this.http.get("https://jsonfy.com/items")
  }
}
