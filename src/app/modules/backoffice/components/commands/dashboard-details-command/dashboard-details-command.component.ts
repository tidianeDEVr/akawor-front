import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ORDER } from 'src/app/data/interfaces';

@Component({
  selector: 'app-dashboard-details-command',
  templateUrl: './dashboard-details-command.component.html',
  styleUrls: ['./dashboard-details-command.component.scss']
})
export class DashboardDetailsCommandComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {order: ORDER}){}
}
