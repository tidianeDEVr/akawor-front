import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SHOP } from 'src/app/data/interfaces';

@Component({
  selector: 'app-dashboard-details-shop',
  templateUrl: './dashboard-details-shop.component.html',
  styleUrls: ['./dashboard-details-shop.component.scss']
})
export class DashboardDetailsShopComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {shop: SHOP},){}
}
