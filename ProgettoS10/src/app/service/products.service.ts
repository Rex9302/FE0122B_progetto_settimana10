import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:4201'

  constructor(private http:HttpClient) {}
  getProdotti(){
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
  }
  getProdotto(id:number){
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`)
  }

}
