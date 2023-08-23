import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { USER } from 'src/app/data/interfaces';

@Component({
  selector: 'app-dashboard-details-user',
  templateUrl: './dashboard-details-user.component.html',
  styleUrls: ['./dashboard-details-user.component.scss']
})
export class DashboardDetailsUserComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {user: USER}){}
}
