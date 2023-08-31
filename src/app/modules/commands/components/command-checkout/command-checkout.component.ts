import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { OrderService } from 'src/app/core/services/order.service';
import { PaymentsService } from 'src/app/core/services/payments.service';
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
  public actualStep: number = 3;
  public activeDeliveryMethod: string = 'outalma-1';
  public activePaymentMethod: string = 'paytech';
  public cart !: any[];
  public imageBaseUrl: string = `${environment.BACKEND_IMAGES_FOLDER}/products/`;
  public totalProductAmount: number = 0;
  public totalDeliveryAmount: number = 2;
  public totalOrderAmount: number = 0;
  public widthStepperLinePercent: string = '0%'
  firstnameControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
  lastnameControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  phonenumberControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  cityControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  countryControl = new FormControl('', [Validators.required, Validators.minLength(4) ]);
  addressControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  additionalAddressControl = new FormControl('');
  
  constructor(
    private produitService: ProduitsService, 
    private securityService: SecurityService, 
    private orderService: OrderService,
    private paymentsService : PaymentsService){
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
    if(this.activeDeliveryMethod == method) return;
    this.activeDeliveryMethod = method;
  }
  changePaymentMethod(method:string){
    if(this.activePaymentMethod == method) return;
    this.activePaymentMethod = method;
  }
  nextStep(){
    if(this.actualStep+1 > 3) return;
    this.actualStep =  this.actualStep+1;
    this.refreshLinePercent();
  }
  backStep(){
    if(this.actualStep-1 < 0) return;
    this.actualStep = this.actualStep - 1;
    this.refreshLinePercent();
  }
  createCommand(){
    // this.orderService.createOrder(this.hydrateNewOrderObject(), this.cart);
    if(this.activePaymentMethod=='paytech') return this.paymentsService.payWithPaytch(this.cart, this.totalOrderAmount);
    if(this.activePaymentMethod=='stripe') return this.paymentsService.payWithStripe();
    
  }
  refreshLinePercent(){
    if(this.actualStep==0) return this.widthStepperLinePercent =  `0%`;
    return this.widthStepperLinePercent =  `${this.actualStep * 33}%`
  }
  hydrateNewOrderObject():ORDER {
    var orderToAdd: ORDER = {};
    if(this.firstnameControl.value && this.firstnameControl.valid)
      orderToAdd.orderClientFirstName = this.firstnameControl.value;
    if(this.lastnameControl.value && this.lastnameControl.valid)
      orderToAdd.orderClientLastName = this.lastnameControl.value;
    if(this.phonenumberControl.value && this.phonenumberControl.valid)
      orderToAdd.orderClientPhoneNumber = this.phonenumberControl.value;
    if(this.emailControl.value && this.emailControl.valid)
      orderToAdd.orderClientEmail = this.emailControl.value;
    if(this.cityControl.value && this.cityControl.valid)
      orderToAdd.orderClientCity = this.cityControl.value;
    if(this.countryControl.value && this.countryControl.valid)
      orderToAdd.orderClientCountry = this.countryControl.value;
    if(this.addressControl.value && this.addressControl.valid)
      orderToAdd.orderClientAddress = this.addressControl.value;
    return orderToAdd;
  }
}
