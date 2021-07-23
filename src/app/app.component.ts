import { Component } from '@angular/core';
import { MainpageComponent } from './mainpage/mainpage.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Current Order', url: '/currentorder', icon: 'bag-check' },
    { title: 'Update Order', url: '/mainpage', icon: 'create' },
    { title: 'Previous Orders', url: '/previousorders', icon: 'albums' },
    { title: 'New Order', url: '', icon: 'refresh' },
  ];
  constructor() { }
}
