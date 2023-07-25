import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { CATEGORY } from 'src/app/data/interfaces';

@Component({
  selector: 'app-dashboard-create-vendor',
  templateUrl: './dashboard-create-vendor.component.html',
  styleUrls: ['./dashboard-create-vendor.component.scss']
})
export class DashboardCreateVendorComponent {
  firstnameControl = new FormControl('', [Validators.required, Validators.min(2)]);
  lastnameControl = new FormControl('', [Validators.required, Validators.min(2)]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  hidePassword: boolean = false;

  public categoryControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(600)]);
  public descriptionControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(600)]);
  public corpNameControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  public shopCatgories!: CATEGORY[];
  public corpNameUrl:string = '';
  constructor(private categorieService: CategoriesService){
    this.categorieService.getCategoriesShops()
    .then((res)=>{
      this.shopCatgories = res; 
    })
   }
}
