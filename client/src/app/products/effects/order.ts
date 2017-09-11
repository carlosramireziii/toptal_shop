import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as orders from '../actions/order';
import { Order } from '../models/order';
import { OrderService} from '../services/order';

@Injectable()
export class OrderEffects {
  @Effect()
  createOrder$: Observable<Action> = this.actions$
    .ofType(orders.CREATE)
    .switchMap((payload) => this.orderService.create(payload)
      .map((order: Order) => new orders.CreateSuccess(order))
      .catch(error => of(new orders.CreateFail(error)))
  );

  constructor(private actions$: Actions, private orderService: OrderService) {}
}
