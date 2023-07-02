import { Component } from '@angular/core';
import { PRODUCT, USER } from 'src/app/data/interfaces';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';
import { SecurityService } from 'src/app/modules/security/services/security.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  public imageBaseUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/`;
  public products!: PRODUCT[];
  public user!: USER;
  constructor(
    private produitsService: ProduitsService,
    private securityService: SecurityService
  ) {
    this.securityService.getAuthenticatedUser().then((user) => {
      this.user = user;
      if (user.id) {
        this.produitsService.getWishlist(user.id).then((wishlist) => {
          if (wishlist.Products) this.products = wishlist.Products;
        });
      }
    });
  }
  remove(product: PRODUCT) {
    if(this.user.id){
      this.produitsService.removeFromWishlist(product, this.user.id)
      .then((wishlist)=>{
        if(this.user.id)
        this.produitsService.getWishlist(this.user.id).then((wishlist)=>{
          let badge = document.querySelector('.badge-wishlist');
          if(badge && wishlist.Products) badge.textContent = wishlist.Products?.length.toString();
        })
        this.products.forEach((elt, index)=>{
          if(elt.id===product.id) this.products.splice(index, 1);
        })
      })
    }
  }
}
