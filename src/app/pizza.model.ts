import { Size } from "./size.model";
import { Topping } from "./topping.model";

export class Pizza {
  size: Size;
  topping: Topping;
  quantity: number;

  constructor(size: Size, topping: Topping, quantity: number) {
    this.size = size
    this.topping = topping
    this.quantity = quantity
  }

  getPrice(): number {
    return this.size.price + this.topping.price;
  }
}
