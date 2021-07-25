import { Injectable } from '@angular/core';
import { OrderHistory } from './order-history.model';
import { Order } from './order.model';
import { Pizza } from './pizza.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  currentOrder: Order;
  orderHistory: OrderHistory[];

  constructor() {
    this.currentOrder = new Order([], 0, 0)
    this.orderHistory = []
  }

  buy(pizza: Pizza) {
    this.currentOrder.addPizza(pizza)
  }

  placeOrder() {
    this.orderHistory.push(new OrderHistory(this.currentOrder, new Date()))
    this.currentOrder = new Order([], 0, 0)
  }

  removePizza(index: number) {
    this.currentOrder.orderPrice -= this.currentOrder.pizzas[index].getPrice()
    this.currentOrder.orderQuantity -= this.currentOrder.pizzas[index].quantity
    this.currentOrder.pizzas.splice(index, 1)
  }

}
