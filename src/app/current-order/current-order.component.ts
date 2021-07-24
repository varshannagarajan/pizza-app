import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.scss'],
})
export class CurrentOrderComponent implements OnInit {

  constructor(private ms: ManagerService) { }

  ngOnInit() { }

}
