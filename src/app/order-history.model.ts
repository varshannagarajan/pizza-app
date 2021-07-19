import { Order } from "./order.model";

export class OrderHistory {
    history: Order[];

  constructor(history: Order[]) {
    this.history = history
  }
}
