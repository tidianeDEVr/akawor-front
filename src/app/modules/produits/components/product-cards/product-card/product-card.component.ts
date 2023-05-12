import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  
  public imagesProducts = [
    '',
    'product1.jpg','product2.jpg','product3.jpg',
    'product4.jpg', 'product5.jpg', 'product6.jpg',
    'product7.jpg', 'product8.jpg', 'product9.jpg',
    'product10.jpg', 'sac-ely-1.jpeg'
  ]
  public choosedImg: string = ''
  
  constructor(){
    this.choosedImg = '../../../../../../assets/images/products/'+this.imagesProducts[Math.floor(Math.random() * 10) + 1];
  }
}
