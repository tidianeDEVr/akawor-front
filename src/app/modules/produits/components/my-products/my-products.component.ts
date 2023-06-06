import { Component } from '@angular/core';
import { ProduitsService } from '../../services/produits.service';
import { PRODUCT, USER } from 'src/app/data/interfaces';
import { SecurityService } from 'src/app/modules/security/services/security.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent {
  public seller!: USER;
  public myProducts!: PRODUCT[];
  constructor(
    private produitsService: ProduitsService, 
    private securityService: SecurityService
    ){
      this.securityService.getAuthenticatedUser()
      .then((user)=>{
        this.seller = user;
        if(this.seller.id){
          this.produitsService.getSellerProducts(this.seller.id)
          .then((products)=>{
            this.myProducts = products;
          })
        }
      })
  }
}
