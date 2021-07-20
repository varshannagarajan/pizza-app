import { Pizza } from "./pizza.model";

export class Order {
  pizzas: Pizza[];
  orderTime: Date;
  orderPrice: number;
  orderQuantity: number;

  constructor(
    pizzas: Pizza[],
    orderTime: Date,
    orderPrice: number,
    orderQuantity: number
  ) {
    this.pizzas = pizzas
    this.orderTime = orderTime
    this.orderPrice = orderPrice
    this.orderQuantity = orderQuantity
  }
}
