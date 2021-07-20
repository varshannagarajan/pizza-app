import { Component, OnInit } from '@angular/core';
import { Size } from '../size.model';
import { Topping } from '../topping.model';

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
  constructor() {
    this.numPizzas = '0';
  }

  ngOnInit() {

  }
  appendDigit(digit: string) {
    this.numPizzas = this.numPizzas == '0' ? digit : this.numPizzas + digit;
    console.log(this.numPizzas)
  }

  reset() {
    this.numPizzas = '0';
  }

  buy() {

  }

  selectTopping(topping: Topping) {
    this.selectedTopping = topping;
    console.log(this.selectedTopping)
  }

  selectSize(size: Size) {
    this.selectedSize = size;
    console.log(this.selectedSize)
  }
}
