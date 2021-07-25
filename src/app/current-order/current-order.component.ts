import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ManagerService } from '../manager.service';


@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.scss'],
})
export class CurrentOrderComponent implements OnInit {

  constructor(private ms: ManagerService, public alertController: AlertController) { }

  ngOnInit() { }

  async buyButton(index: number) {

    const alert = await this.alertController.create({
      header: 'Delete Pizza',
      subHeader: 'Are you sure you want to delete this pizza from your order?',
      message: this.ms.currentOrder.pizzas[index].ToString(),
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
      }, {
        text: 'Delete',
        handler: () => {
          this.ms.removePizza(index)
        }
      }]
    });

    await alert.present();
  }
}
