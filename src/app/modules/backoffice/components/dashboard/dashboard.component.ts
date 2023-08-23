import { Component } from '@angular/core';
import { DATATABLE_LANGAGE_FR, ORDER, PRODUCT, USER } from 'src/app/data/interfaces';
import {registerables, Chart} from 'chart.js';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';
import { environment } from 'src/environments/environment.development';
import { OrderService } from 'src/app/core/services/order.service';
import { UsersService } from 'src/app/core/services/users.service';
declare const DataTable: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public imgPath: string = `${environment.BACKEND_IMAGES_FOLDER}/products/`;
  public imageThumbnailUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/thumbnails/thumb`;
  public recentOrders!: ORDER[];
  public recentClients!: USER[];
  public latestProducts !: PRODUCT[];
  constructor(
    private produitsService: ProduitsService,
    private orderService: OrderService, 
    private userService: UsersService
  ){
    this.produitsService.getLatestProductsDashboard()
    .then((prods)=>{
      this.latestProducts = prods;
    })
    this.orderService.getRecentsOrders()
    .then((res)=>{
      this.recentOrders = res;
      setTimeout(() => {
        new DataTable('#latestCommands', {
          responsive: true,
          language: DATATABLE_LANGAGE_FR,
        });
      }, 1);
    })
    this.userService.getRecentsClients()
    .then((res)=>{
      this.recentClients = res;
    })
    setTimeout(() => {
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

  parseToJson(objects: string) {
    return JSON.parse(objects);
  }
}
