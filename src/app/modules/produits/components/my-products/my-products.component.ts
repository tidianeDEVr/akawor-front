import { Component } from '@angular/core';
import { ProduitsService } from '../../services/produits.service';
import { PRODUCT, USER } from 'src/app/data/interfaces';
import { SecurityService } from 'src/app/modules/security/services/security.service';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent {
  public seller!: USER;
  public myProducts!: PRODUCT[];
  public imageBaseUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/`
  constructor(
    private produitsService: ProduitsService, 
    private securityService: SecurityService,
    private router: Router
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
  editProduct(product:PRODUCT){
    alert(product.productTitle)
  }
  displayProduct(product:PRODUCT){
    this.router.navigate([`/produits/${product.productSlug}`]);
  }
  deleteProduct(product:PRODUCT){
    alert(product.productTitle)
  }
}
