import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { USER } from 'src/app/data/interfaces';
import { Emitters } from 'src/app/emitters/emitters';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';
import { SecurityService } from 'src/app/modules/security/services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isAuthenticated: boolean = true;
  public user: USER | undefined;
  public cartLength: string = '0';
  public wishlistLength: string = '0';
  constructor(private securityService: SecurityService, private productService: ProduitsService) {}
  ngOnInit(): void {
    this.securityService.getAuthenticatedUser().then((res) => {
      if(res.userEmail) this.user = res;
      if(this.user && this.user.id)
      this.productService.getWishlist(this.user.id).then((wishlist) => {
        if (wishlist.Products) this.wishlistLength = wishlist.Products.length.toString();
      });
    });
    this.productService.getCart().then((res)=>{
      this.cartLength = res.length.toString();
      this.productService.updateCartBtn();
    })
    
  }
  logout() {
    // this.user = undefined;
    this.user = undefined;
    this.securityService.logout();
  }
}
