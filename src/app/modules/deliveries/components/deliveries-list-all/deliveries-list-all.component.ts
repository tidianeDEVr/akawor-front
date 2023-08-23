import { Component } from '@angular/core';
import { DATATABLE_LANGAGE_FR } from 'src/app/data/interfaces';

declare const DataTable: any;
@Component({
  selector: 'app-deliveries-list-all',
  templateUrl: './deliveries-list-all.component.html',
  styleUrls: ['./deliveries-list-all.component.scss']
})
export class DeliveriesListAllComponent {
  constructor(){
    setTimeout(() => {
      new DataTable('#myDeliveries', {
        responsive: true,
        language: DATATABLE_LANGAGE_FR,
      });
    }, 1);
  }
}