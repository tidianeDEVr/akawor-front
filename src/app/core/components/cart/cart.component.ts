import { Component } from '@angular/core';
import { PRODUCT } from 'src/app/data/interfaces';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';
import { environment } from 'src/environments/environment.development';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public products!: any[];
  public imageBaseUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/products/`;
  constructor(private productService: ProduitsService, private toastService: ToastService){
    this.populateProducts();
  }
  remove(product:PRODUCT){
    if(!product || !this.products) return;
    this.productService.removeFromCart(product)
    this.populateProducts();
    this.toastService.show({body:`"${product.productTitle}" supprimé de votre panier`, isSuccess:true})
  }
  populateProducts(){
    this.productService.getCart().then((res)=>{
      this.products = res;
    })
  }
}
