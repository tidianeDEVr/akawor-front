import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderService } from 'src/app/core/services/order.service';
import { DATATABLE_LANGAGE_FR, ORDER } from 'src/app/data/interfaces';
import { DashboardDetailsCommandComponent } from '../dashboard-details-command/dashboard-details-command.component';

declare const DataTable: any;
@Component({
  selector: 'app-dashboard-commands',
  templateUrl: './dashboard-commands.component.html',
  styleUrls: ['./dashboard-commands.component.scss'],
})
export class DashboardCommandsComponent {
  public orders!: ORDER[];
  public totalVentes:number = 0;
  constructor(private orderService: OrderService, private dialog: MatDialog) {
    this.orderService.getAllOrders().then((res) => {
      this.orders = res;
      this.orders.forEach((elt)=>{
        if(elt.orderIsPayed && elt.OrderLine?.orderLineTotalPrice) 
        this.totalVentes+= parseInt(elt.OrderLine?.orderLineTotalPrice);
      });
      setTimeout(() => {
        new DataTable('#allOrders', {
          language: DATATABLE_LANGAGE_FR,
          responsive: true,
        });
      }, 1);
    });
  }

  parseToJson(objects: string) {
    return JSON.parse(objects);
  }
  openDialogDetails(order: ORDER) {
    this.dialog.open(DashboardDetailsCommandComponent, { data: { order }, width:'800px' });
  }
}
