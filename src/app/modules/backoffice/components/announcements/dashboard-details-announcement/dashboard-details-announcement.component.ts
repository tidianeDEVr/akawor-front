import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PRODUCT } from 'src/app/data/interfaces';

@Component({
  selector: 'app-dashboard-details-announcement',
  templateUrl: './dashboard-details-announcement.component.html',
  styleUrls: ['./dashboard-details-announcement.component.scss']
})
export class DashboardDetailsAnnouncementComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {product: PRODUCT},){}
}
