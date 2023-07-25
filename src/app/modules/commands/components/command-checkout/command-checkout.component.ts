import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { OrderService } from 'src/app/core/services/order.service';
import { ORDER, USER } from 'src/app/data/interfaces';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';
import { SecurityService } from 'src/app/modules/security/services/security.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-command-checkout',
  templateUrl: './command-checkout.component.html',
  styleUrls: ['./command-checkout.component.scss']
})
export class CommandCheckoutComponent {
  public user !: USER;
  public actualStep: number = 0;
  public activeDeliveryMethod: string = 'outalma-1';
  public cart !: any[];
  public imageBaseUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/products/`;
  public totalProductAmount: number = 0;
  public totalDeliveryAmount: number = 2;
  public totalOrderAmount: number = 0;
  firstnameControl = new FormControl('', [Validators.required, Validators.min(2)]);
  lastnameControl = new FormControl('', [Validators.required, Validators.min(2)]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  phonenumberControl = new FormControl('', [Validators.required]);
  cityControl = new FormControl('', [Validators.required]);
  countryControl = new FormControl('', [Validators.required ]);
  addressControl = new FormControl('', [Validators.required]);
  additionalAddressControl = new FormControl('');
  
  constructor(
    private produitService: ProduitsService, 
    private securityService: SecurityService, 
    private orderService: OrderService){
    this.produitService.getCart()
    .then((res)=>{
      this.cart = res;
      res.forEach((elt)=>{
        if(!elt.product.productPromoPrice){
          this.totalProductAmount += elt.product.productPrice * elt.quantity;
        } else {
          this.totalProductAmount += elt.product.productPromoPrice * elt.quantity;
        }
      })
      this.totalOrderAmount = this.totalDeliveryAmount + this.totalProductAmount;
    })
    this.securityService.getAuthenticatedUser()
    .then((res)=>{
      if(res.userEmail) {
        this.user = res;
        this.emailControl.setValue(res.userEmail);
        if(res.userFirstName)
        this.firstnameControl.setValue(res.userFirstName);
        if(res.userLastName)
        this.lastnameControl.setValue(res.userLastName);
        if(res.userPhonenumber)
        this.phonenumberControl.setValue(res.userPhonenumber);
      }
    })
  }

  changeDeliveryMethod(method:string){
    this.activeDeliveryMethod = method;
  }
  nextStep(){
    if(this.actualStep+1 > 3) return;
    this.actualStep =  this.actualStep+1;
  }
  backStep(){
    if(this.actualStep-1 < 0) return;
    this.actualStep = this.actualStep - 1;
  }
  createCommand(){
    var orderToAdd: ORDER = {};
    this.orderService.createOrder(orderToAdd)
    .then((res)=>{
      console.log(res);
    })
  }
}
