import { Component } from '@angular/core';
import { PRODUCT } from 'src/app/data/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public products!: PRODUCT[];
}
