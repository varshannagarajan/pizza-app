import { Injectable } from '@angular/core';
import { OrderHistory } from './order-history.model';
import { Order } from './order.model';
import { Pizza } from './pizza.model';
import { Size } from './size.model';
import { Topping } from './topping.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  currentOrder: Order;
  orderHistory: OrderHistory;

  constructor() {
    this.currentOrder = new Order([], new Date(), 0, 0)
    this.orderHistory = new OrderHistory([])
  }

  buy(selectedSize: Size, selectedTopping: Topping, quantity: number) {
    let newPizza = new Pizza(selectedSize, selectedTopping, quantity)
    this.currentOrder.addPizza(newPizza)
  }

  placeOrder() {
    this.orderHistory.addOrder(this.currentOrder)
    this.currentOrder = new Order([], new Date(), 0, 0)
  }

}
