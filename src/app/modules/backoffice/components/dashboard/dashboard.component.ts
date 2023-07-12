import { Component } from '@angular/core';
import { DATATABLE_LANGAGE_FR } from 'src/app/data/interfaces';
import {registerables, Chart} from 'chart.js';
declare let DataTable: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public latestCommands: any[] = [
    '','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','',
    '','','','','','','','','','','','',
  ]
  public latestProducts: any[] = ['','','','','']
  constructor(){
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
