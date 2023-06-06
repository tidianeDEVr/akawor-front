import { Component, Input } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { PRODUCT } from 'src/app/data/interfaces';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  
  @Input() product!: PRODUCT;
  public imagesProducts = [
    '',
    'product1.jpg','product2.jpg','product3.jpg',
    'product4.jpg', 'product5.jpg', 'product6.jpg',
    'product7.jpg', 'product8.jpg', 'product9.jpg',
    'product10.jpg', 'sac-ely-1.jpeg'
  ]
  public choosedImg: string = ''
  
  constructor(private toastService: ToastService){
    this.choosedImg = '../../../../../../assets/images/products/'+this.imagesProducts[Math.floor(Math.random() * 10) + 1];
  }
  addToCart(){
    this.toastService.show({header:'Messa d\'alerte', body:'Le produit a été ajouter a votre panier.', isSuccess:true})
  }
  addToWishlist(){
    this.toastService.show({header:'Messa d\'alerte', body:'Le produit a été ajouter a votre liste de souhaits.', isSuccess:true})
  }
}
