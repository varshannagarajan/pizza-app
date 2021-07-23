import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PreviousOrdersComponent } from './previous-orders/previous-orders.component';

const routes: Routes = [
  {
    path: 'mainpage',
    component: MainpageComponent
  },
  {
    path: 'currentorder',
    component: CurrentOrderComponent
  },
  {
    path: 'previousorders',
    component: PreviousOrdersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
