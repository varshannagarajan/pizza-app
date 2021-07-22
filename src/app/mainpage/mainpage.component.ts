import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza.model';
import { Size } from '../size.model';
import { Topping } from '../topping.model';
import { ManagerService } from '../manager.service'
import { Order } from '../order.model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  numPizzas: string;

  toppings: Topping[] = [
    new Topping('Vegetable', 5.99),
    new Topping('Hawaiian', 5.99),
    new Topping('Margherita', 4.99),
    new Topping('Extra Cheese', 3.99)];

  sizes: Size[] = [
    new Size('Small', 10.99),
    new Size('Medium', 11.99),
    new Size('Large', 12.99),
    new Size('Party', 15.99)];

  selectedTopping: Topping;
  selectedSize: Size;

  constructor(private ms: ManagerService) {
    this.numPizzas = '0';
    this.selectedTopping = new Topping('', 0)
    this.selectedSize = new Size('', 0)
    this.ms.currentOrder = new Order([], new Date(), 0, 0)
  }

  ngOnInit() {

  }

  appendDigit(digit: string) {
    this.numPizzas = this.numPizzas == '0' ? digit : this.numPizzas + digit;
  }

  reset() {
    this.numPizzas = '0';
  }

  buy() {
    let newPizza = new Pizza(this.selectedSize, this.selectedTopping, parseInt(this.numPizzas))
    this.ms.currentOrder.addPizza(newPizza)
    this.numPizzas = '0';
    this.selectedTopping = new Topping('', 0)
    this.selectedSize = new Size('', 0)
  }

  selectTopping(topping: Topping) {
    this.selectedTopping = topping;
  }

  selectSize(size: Size) {
    this.selectedSize = size;
  }
}
