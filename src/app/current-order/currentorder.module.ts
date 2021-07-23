
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentOrderRoutingModule } from './currentorder-routing.module';

import { CurrentOrderComponent } from './current-order.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CurrentOrderRoutingModule
    ],
    declarations: [CurrentOrderComponent]
})
export class CurrentOrderModule { }