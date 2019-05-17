import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://192.168.1.192:3000/api/products');
  }

  getProduct(id) {
    return this.http.get('http://192.168.1.192:3000/api/products/'+id);
  }

  getCart() {
    return this.http.get('http://192.168.1.192:3000/api/cart');
  }

  addCart(product) {
    return this.http.post('http://192.168.1.192:3000/api/cart', product);
  }

  removeCart(id) {
    return this.http.delete('http://192.168.1.192:3000/api/cart/'+id);
  }

}
