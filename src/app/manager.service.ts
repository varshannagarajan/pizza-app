import { Injectable } from '@angular/core';
import { OrderHistory } from './order-history.model';
import { Order } from './order.model';
import { Size } from './size.model';
import { Topping } from './topping.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  currentOrder: Order;
  orderHistory: OrderHistory;

  constructor() { }


}
