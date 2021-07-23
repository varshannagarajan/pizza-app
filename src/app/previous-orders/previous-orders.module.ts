
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviousOrdersRoutingModule } from './previous-orders-routing.module';

import { PreviousOrdersComponent } from './previous-orders.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PreviousOrdersRoutingModule
    ],
    declarations: [PreviousOrdersComponent]
})
export class PreviousOrdersModule { }