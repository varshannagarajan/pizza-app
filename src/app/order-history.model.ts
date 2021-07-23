import { Order } from "./order.model";

export class OrderHistory {
  history: Order[];

  constructor(history: Order[]) {
    this.history = history
  }

  public addOrder(order: Order) {
    this.history.push(order)
    console.log(this.history)
  }
}
