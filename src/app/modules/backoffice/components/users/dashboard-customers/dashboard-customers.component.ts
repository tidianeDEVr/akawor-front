import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/core/services/users.service';
import { DATATABLE_LANGAGE_FR, USER } from 'src/app/data/interfaces';
import { DashboardDetailsUserComponent } from '../dashboard-details-user/dashboard-details-user.component';

declare const DataTable: any;
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
  constructor(private userService: UsersService, private dialog: MatDialog){
    this.userService.getUsersDashboard()
    .then((res)=>{
      this.allUsers=res;
      setTimeout(() => {
        new DataTable('#allUsers', {
          responsive: true,
          language: DATATABLE_LANGAGE_FR
        });
      }, 1);
      res.forEach((elt)=>{
        if(elt.userRole==='ROLE_CLIENT') this.countClients++;
        if(elt.userRole==='ROLE_VENDEUR') this.countVendors++;
        if(elt.userRole==='ROLE_MODERATEUR') this.countModerators++;
      })
    });
  }

  openDetailsDialog(user: USER){
    this.dialog.open(DashboardDetailsUserComponent, {data: {user}})
  }
}
