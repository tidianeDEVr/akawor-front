import { Component } from '@angular/core';
import { DATATABLE_LANGAGE_FR, PRODUCT } from 'src/app/data/interfaces';
import {registerables, Chart} from 'chart.js';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';
import { environment } from 'src/environments/environment.development';
declare let DataTable: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public imgPath: string = environment.BACKEND_IMAGES_FOLDER;
  public imageThumbnailUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/thumbnails/thumb`;
  public latestCommands: any[] = [
    '','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','',
    '','','','','','','','','','','','',
  ]
  public latestProducts !: PRODUCT[];
  constructor(
    private produitsService: ProduitsService
  ){
    this.produitsService.getLatestProductsDashboard()
    .then((prods)=>{
      this.latestProducts = prods;
    })
    setTimeout(() => {
      new DataTable('#latestCommands', DATATABLE_LANGAGE_FR);
      Chart.register(...registerables);
      const canvas: any = document.querySelector('#chartCanvas');
      const chart = new Chart(canvas, {
        type: "polarArea",
        data: {
          labels: ["Aada Ada", "Baawaan", "Malado", "Zimlam", "Outalma"],
          datasets: [{
            data: [240, 212, 239, 329, 350,],
            backgroundColor: [
              '#40c27d',
              '#37a369',
              '#397250',
              '#B8361B',
              '#F44336',
            ]
          }]
        },
      })
    }, 100);
  }
}
