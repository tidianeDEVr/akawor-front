import { Component } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { DATATABLE_LANGAGE_FR, USER } from 'src/app/data/interfaces';

declare let DataTable: any;
@Component({
  selector: 'app-dashboard-customers',
  templateUrl: './dashboard-customers.component.html',
  styleUrls: ['./dashboard-customers.component.scss']
})
export class DashboardCustomersComponent {
  public allUsers !: USER[];
  public selectedUsers : USER[] = [];
  public countClients:number = 0;
  public countVendors:number = 0;
  public countModerators:number = 0;
  constructor(private userService: UsersService){
    this.userService.getUsersDashboard()
    .then((res)=>{
      this.allUsers=res;
      setTimeout(() => {
        new DataTable('#allUsers', DATATABLE_LANGAGE_FR);
      }, 1);
      res.forEach((elt)=>{
        if(elt.userRole==='ROLE_CLIENT') this.countClients++;
        if(elt.userRole==='ROLE_VENDEUR') this.countVendors++;
        if(elt.userRole==='ROLE_MODERATEUR') this.countModerators++;
      })
    });
  }

  openDetailsDialog(user: USER){
    alert('open dialog user...')
  }
}
