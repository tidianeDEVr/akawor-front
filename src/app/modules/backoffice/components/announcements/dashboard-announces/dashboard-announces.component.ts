import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DATATABLE_LANGAGE_FR, PRODUCT } from 'src/app/data/interfaces';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';
import { environment } from 'src/environments/environment.development';
import { DashboardDetailsAnnouncementComponent } from '../dashboard-details-announcement/dashboard-details-announcement.component';
import { Router } from '@angular/router';

declare const DataTable: any;
@Component({
  selector: 'app-dashboard-announces',
  templateUrl: './dashboard-announces.component.html',
  styleUrls: ['./dashboard-announces.component.scss'],
})
export class DashboardAnnouncesComponent {
  public announcements!: PRODUCT[];
  public amountOnlineAnnounces: number = 0;
  public amountRuptureAnnounces: number = 0;
  public amountBoostedAnnounces:number = 0;
  public selectedAnnouncements: PRODUCT[] = [];
  public imgPath: string = `${environment.BACKEND_IMAGES_FOLDER}/products/`;
  constructor(private produitService: ProduitsService, private dialog: MatDialog, private router: Router) {
    this.produitService.getProductsDashboard().then((res) => {
      this.announcements = res;
      res.forEach(element => {
        if(element.productState==='ONLINE') this.amountOnlineAnnounces = this.amountOnlineAnnounces+1;
        if(element.productStock===0) this.amountRuptureAnnounces = this.amountRuptureAnnounces+1;
      });
      setTimeout(() => {
        new DataTable('#allAnnouncements', {
          responsive: true,
          language: DATATABLE_LANGAGE_FR,
        });
      }, 1);
    });
  }
  
  addToSelected(product: PRODUCT) {
    // if(!this.selectedAnnouncements.includes(product)) {
    //   this.selectedAnnouncements.push(product);
    // }
  }
  openDialogDetails(product: PRODUCT) {
    this.dialog.open(DashboardDetailsAnnouncementComponent, {data: {product}})
  }
  deleteProduct(prod: PRODUCT){
    alert(prod.productSlug+' deleted')
  }
  editProduct(product:PRODUCT){
    this.router.navigateByUrl(`/dashboard/announcements/create?edit_product=${product.productSlug}`);
  }
}
