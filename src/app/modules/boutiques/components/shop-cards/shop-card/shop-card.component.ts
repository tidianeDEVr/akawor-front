import { Component, Input } from '@angular/core';
import { SHOP } from 'src/app/data/interfaces';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent {
  @Input() shop!: SHOP;
  public imageBaseUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/shops/`
  constructor(){ }
}
