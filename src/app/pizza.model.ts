import { Size } from "./size.model";
import { Topping } from "./topping.model";

export class Pizza {
    size: Size;
    topping: Topping;

  constructor(size: Size, topping: Topping) {
    this.size = size
    this.topping = topping
  }
}
