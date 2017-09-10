import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  
  constructor(private http: HttpClient) { }

  load() {
    return this.http.get(`http://dev.carlosramireziii.com:3001/products.json`);
  }

  add(action) {
    return this.http.post(`http://dev.carlosramireziii.com:3001/products.json`, action.payload);
  }

  update(action) {
    console.log("update payload", action);
    return this.http.patch(`http://dev.carlosramireziii.com:3001/products/${action.payload.id}`, action.payload);
  }

  remove(action) {
    return this.http.delete(`http://dev.carlosramireziii.com:3001/products/${action.payload.id}`);
  }
}
