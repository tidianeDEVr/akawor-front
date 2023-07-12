import { Component } from '@angular/core';
import { DATATABLE_LANGAGE_FR } from 'src/app/data/interfaces';

declare let DataTable: any;
@Component({
  selector: 'app-dashboard-announces',
  templateUrl: './dashboard-announces.component.html',
  styleUrls: ['./dashboard-announces.component.scss']
})
export class DashboardAnnouncesComponent {
  constructor(){
    setTimeout(() => {
      new DataTable('#allAnnouncements', DATATABLE_LANGAGE_FR);
    }, 1);
  }
}
