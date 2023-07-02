import { Component, Input } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { IMAGE, PRODUCT, USER } from 'src/app/data/interfaces';
import { ProduitsService } from '../../../services/produits.service';
import { environment } from 'src/environments/environment.development';
import { FormControl } from '@angular/forms';
import { SecurityService } from 'src/app/modules/security/services/security.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: PRODUCT;
  public imageBaseUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/`;
  public valueControl = new FormControl(1);

  constructor(
    private toastService: ToastService,
    private productService: ProduitsService,
    private securityService: SecurityService
  ) { }
  addToCart() {
    if(this.valueControl.value)
    this.productService.addToCart(this.product, this.valueControl.value).then((res)=>{
      if (res) this.toastService.show({header:'Message d\'alerte', body:`"${this.product.productTitle}" ajouter à votre panier.`, isSuccess:true})
      if (!res) this.toastService.show({header:'Message d\'erreur', body:`Une erreur s'est produite ! Veuillez réessayer.`})
    }).catch(()=>{
      this.toastService.show({header:'Message d\'erreur', body:`Une erreur s'est produite ! Veuillez réessayer.`})
    })
  }
  addToWishlist() {
    this.securityService.getAuthenticatedUser()
    .then((user)=>{
      if(user.id)
      this.productService.addToWishlist(this.product, user.id)
      .then((res)=>{
        this.toastService.show({
          header: "Message d'alerte",
          body: `"${this.product.productTitle}" ajouter à votre liste de souhaits.`,
          isSuccess: true,
        });
        if(user.id)
        this.productService.getWishlist(user.id).then((wishlist)=>{
          let badge = document.querySelector('.badge-wishlist');
          if(badge && wishlist.Products) badge.textContent = wishlist.Products?.length.toString();
        })
      }).catch(()=>{
        this.toastService.show({header:'Message d\'erreur', body:`Une erreur s'est produite ! Veuillez réessayer.`})
      })
    })
  }
  increment() {
    if (this.valueControl.value && this.valueControl.value + 1 < 11)
      this.valueControl.setValue(this.valueControl.value + 1);
  }
  decrement() {
    if (this.valueControl.value && this.valueControl.value - 1 > 0)
      this.valueControl.setValue(this.valueControl.value - 1);
  }
}
