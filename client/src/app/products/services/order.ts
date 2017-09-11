import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {
  
  constructor(private http: HttpClient) { }

  create(action) {
    return this.http.post(`http://dev.carlosramireziii.com:3001/orders.json`, action.payload);
  }
}

