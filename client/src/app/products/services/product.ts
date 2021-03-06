import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  
  constructor(private http: HttpClient) { }

  load() {
    return this.http.get(`http://dev.carlosramireziii.com:3001/products.json`);
  }
}
