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

  public getPrice(): number {
    return this.quantity * (this.size.price + this.topping.price);
  }

  ToString() {
    return 'Topping: ' + this.topping.name + '<br/>' + 'Size: ' + this.size.name + '<br/>' + 'Quantity: ' + this.quantity + '<br/>' + 'Price: $' + this.getPrice() + '<br/>'
  }
}
