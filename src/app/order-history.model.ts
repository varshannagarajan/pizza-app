import { Order } from "./order.model";

export class OrderHistory extends Order {
  orderTime: Date;

  constructor(
    order: Order,
    orderTime: Date) {
    super(order.pizzas, order.orderPrice, order.orderQuantity)
    this.orderTime = orderTime
  }

}
