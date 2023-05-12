import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent {
  public imagesShops = [
    '',
    'adaa-ada.png','baawaan.png','malado.png',
    'nefertitis.jpeg', 'nilaja.jpeg', 'outalma.png',
    'senteursdexq.png', 'zimlam.png',
  ]
  public choosedImage: string = ''
  constructor(){
    this.choosedImage = '../../../../../../assets/images/shops/'+this.imagesShops[Math.floor(Math.random() * 8) + 1];
  }
}
