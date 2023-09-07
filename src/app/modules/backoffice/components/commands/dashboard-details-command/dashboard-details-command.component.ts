import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ORDER } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dashboard-details-command',
  templateUrl: './dashboard-details-command.component.html',
  styleUrls: ['./dashboard-details-command.component.scss']
})
export class DashboardDetailsCommandComponent {
  public imageBaseUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/products/`;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {order: ORDER}){}
  parseToJson(objects: string) {
    return JSON.parse(objects);
  }
}
