import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviousOrdersComponent } from './previous-orders.component';

const routes: Routes = [
    {
        path: '',
        component: PreviousOrdersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PreviousOrdersRoutingModule { }