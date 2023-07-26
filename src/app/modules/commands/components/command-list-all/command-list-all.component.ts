import { Component } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';
import { DATATABLE_LANGAGE_FR, ORDER } from 'src/app/data/interfaces';
import { SecurityService } from 'src/app/modules/security/services/security.service';

declare let DataTable: any;
@Component({
  selector: 'app-command-list-all',
  templateUrl: './command-list-all.component.html',
  styleUrls: ['./command-list-all.component.scss'],
})
export class CommandListAllComponent {
  public orders !: ORDER[];

  constructor(private securityService: SecurityService, private orderService: OrderService){
    this.securityService.getAuthenticatedUser().then((usr)=>{
      if(usr.userEmail) {
        this.orderService.getOrdersByClients(usr.userEmail)
        .then((orders)=>{
          this.orders = orders;
          this.orders.forEach((elt)=>{
            if(elt.OrderLine?.orderLineJsonCart)
            elt.OrderLine.orderLineProducts = JSON.parse(elt.OrderLine?.orderLineJsonCart);
          })
          setTimeout(() => {
            new DataTable('#myCommands', DATATABLE_LANGAGE_FR);
          }, 1);
        })
      }
    })
  }

  jsonDecode(item: any) {
    return JSON.parse(item.content);
  }
}