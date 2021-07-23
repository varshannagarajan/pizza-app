import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.component.html',
  styleUrls: ['./previous-orders.component.scss'],
})
export class PreviousOrdersComponent implements OnInit {

  constructor(private ms: ManagerService) { }

  ngOnInit() { }

}
