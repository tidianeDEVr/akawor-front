import { Component } from '@angular/core';
import { DATATABLE_LANGAGE_FR, PRODUCT } from 'src/app/data/interfaces';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';
import { environment } from 'src/environments/environment.development';

declare let DataTable: any;
@Component({
  selector: 'app-dashboard-announces',
  templateUrl: './dashboard-announces.component.html',
  styleUrls: ['./dashboard-announces.component.scss']
})
export class DashboardAnnouncesComponent {
  public announcements!: PRODUCT[];
  public selectedAnnouncements : PRODUCT[] = []; 
  public imgPath: string = environment.BACKEND_IMAGES_FOLDER;
  constructor(private produitService: ProduitsService){
    this.produitService.getProductsDashboard().then((res)=>{
      this.announcements = res;
      setTimeout(() => {
        new DataTable('#allAnnouncements', DATATABLE_LANGAGE_FR);
      }, 1);
    })
  }
  addToSelected(product:PRODUCT){
    // if(!this.selectedAnnouncements.includes(product)) {
    //   this.selectedAnnouncements.push(product);
    // }
  }
}
