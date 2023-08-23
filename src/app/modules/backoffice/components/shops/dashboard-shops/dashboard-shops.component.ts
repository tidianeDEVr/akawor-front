import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DATATABLE_LANGAGE_FR, SHOP } from 'src/app/data/interfaces';
import { BoutiquesService } from 'src/app/modules/boutiques/services/boutiques.service';
import { environment } from 'src/environments/environment.development';
import { DashboardDetailsShopComponent } from '../dashboard-details-shop/dashboard-details-shop.component';

declare const DataTable: any;
@Component({
  selector: 'app-dashboard-shops',
  templateUrl: './dashboard-shops.component.html',
  styleUrls: ['./dashboard-shops.component.scss'],
})
export class DashboardShopsComponent {
  public allShops!: SHOP[];
  public selectedShops!: SHOP[];
  public imgPath: string = `${environment.BACKEND_IMAGES_FOLDER}/shops/`;
  constructor(
    private boutiquesService: BoutiquesService,
    private dialog: MatDialog
  ) {
    this.boutiquesService.getShops().then((res) => {
      this.allShops = res;
      setTimeout(() => {
        new DataTable('#allShops', {
          responsive: true,
          language: DATATABLE_LANGAGE_FR,
        });
      }, 1);
    });
  }
  openDetailsDialog(shop: SHOP) {
    this.dialog.open(DashboardDetailsShopComponent, { data: { shop } });
  }
}
