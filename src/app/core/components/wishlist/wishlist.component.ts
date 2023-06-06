import { Component } from '@angular/core';
import { PRODUCT } from 'src/app/data/interfaces';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  public products!: PRODUCT[];
}
