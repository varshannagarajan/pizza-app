
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './mainpage-routing.module';

import { MainpageComponent } from './mainpage.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MainPageRoutingModule
    ],
    declarations: [MainpageComponent]
})
export class MainPageModule { }