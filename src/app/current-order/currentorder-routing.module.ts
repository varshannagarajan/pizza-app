import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentOrderComponent } from './current-order.component';

const routes: Routes = [
    {
        path: '',
        component: CurrentOrderComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CurrentOrderRoutingModule { }