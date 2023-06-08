import { Component, Input } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { IMAGE, PRODUCT } from 'src/app/data/interfaces';
import { ProduitsService } from '../../../services/produits.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  
  @Input() product!: PRODUCT;
  public imageBaseUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/`
  
  constructor(private toastService: ToastService){ }
  addToCart(){
    this.toastService.show({header:'Messa d\'alerte', body:'Le produit a été ajouter a votre panier.', isSuccess:true})
  }
  addToWishlist(){
    this.toastService.show({header:'Messa d\'alerte', body:'Le produit a été ajouter a votre liste de souhaits.', isSuccess:true})
  }
}
