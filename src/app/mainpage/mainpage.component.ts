import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza.model';
import { Size } from '../size.model';
import { Topping } from '../topping.model';
import { ManagerService } from '../manager.service'
import { AlertController } from '@ionic/angular';

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

  constructor(private ms: ManagerService, public alertController: AlertController) {
    this.numPizzas = '0';
    this.selectedTopping = new Topping('', 0)
    this.selectedSize = new Size('', 0)
  }

  ngOnInit() {

  }

  appendDigit(digit: string) {
    this.numPizzas = this.numPizzas == '0' ? digit : this.numPizzas + digit;
  }

  resetQuantity() {
    this.numPizzas = '0';
  }

  resetAll() {
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

  checkForErrors() {
    let errorMsg: string = ''
    if (this.selectedTopping.name == '')
      errorMsg += "Error: No topping selected" + '<br/>'
    if (this.selectedSize.name == '')
      errorMsg += "Error: No size selected" + '<br/>'
    if (parseInt(this.numPizzas) <= 0)
      errorMsg += "Error: No quantity selected" + '<br/>'
    return errorMsg
  }

  async buyButton() {

    let errorMsg = this.checkForErrors()

    if (errorMsg == '') {
      let newPizza = new Pizza(this.selectedSize, this.selectedTopping, parseInt(this.numPizzas))
      this.ms.buy(newPizza)
      this.resetAll();

      const alert = await this.alertController.create({
        header: 'Sucess!',
        subHeader: 'The pizza was added to your order!',
        message: newPizza.ToString() + '<br/>' + 'Total Order Quantity: ' + this.ms.currentOrder.orderQuantity + '<br/>' + 'Total Order Price: $' + this.ms.currentOrder.orderPrice + '<br/>',
        buttons: ['OK']
      });

      await alert.present();

    } else {
      const alert = await this.alertController.create({
        header: 'Sorry!',
        subHeader: 'There are the following errors:',
        message: errorMsg,
        buttons: ['Cancel']
      });

      await alert.present();
    }
  }
}
