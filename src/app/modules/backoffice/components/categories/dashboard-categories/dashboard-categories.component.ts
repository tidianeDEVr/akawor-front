import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { CATEGORY, DATATABLE_LANGAGE_FR } from 'src/app/data/interfaces';
import { DashboardDetailsCategorieComponent } from '../dashboard-details-categorie/dashboard-details-categorie.component';
import { FormControl, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { OrderService } from 'src/app/core/services/order.service';

declare const DataTable: any;
@Component({
  selector: 'app-dashboard-categories',
  templateUrl: './dashboard-categories.component.html',
  styleUrls: ['./dashboard-categories.component.scss'],
})
export class DashboardCategoriesComponent {
  isOnEditMode: boolean = false;
  public countProdCategories: number = 0;
  public countShopCategories: number = 0;
  public allCategories !: CATEGORY[];
  public selectedCategories : CATEGORY[] = [];
  public libelleControl = new FormControl('', [Validators.required,Validators.minLength(3)]);
  public iconControl = new FormControl('', [Validators.minLength(3)]);
  public typeControl = new FormControl('', [Validators.required]);
  public parentControl = new FormControl('', [Validators.required]);
  public dataTableElt: any;
  constructor(
    private categoriesService: CategoriesService,
    private matDialog: MatDialog,
    private orderService: OrderService,
    private toastService: ToastService,
  ) {
    this.categoriesService.getAllCategories()
    .then((res)=>{
      this.allCategories = res;
      this.countCategoriesType();
      setTimeout(() => {
        this.dataTableElt = new DataTable('#allCategories', {
          responsive: true,
          language: DATATABLE_LANGAGE_FR
        });
      }, 1);
    })
  }
  addToSelected(cat:CATEGORY){}
  countCategoriesType(){
    if(!this.allCategories || this.allCategories.length===0) return;
    this.allCategories.forEach((elt)=>{
      if(elt.categoryType==='product') this.countProdCategories++;
      if(elt.categoryType==='shop') this.countShopCategories++;
    })
  }
  openDetailsDialog(cat:CATEGORY){
    this.matDialog.open(DashboardDetailsCategorieComponent, {
      data: {category: cat},
    })
  }

  editCategory(cat:CATEGORY){
    this.isOnEditMode = true;
  }
  removeCategory(cat:CATEGORY){

  }
  createCategory(){
    if(this.typeControl.invalid || this.libelleControl.invalid) return;
    var category: CATEGORY = {};
    if(this.libelleControl.value)
    category.categoryLibelle = this.libelleControl.value;
    if(this.typeControl.value)
    category.categoryType = this.typeControl.value;
    if(this.parentControl.value)
    category.parentId = this.parentControl.value;
    if(this.iconControl.value)
    category.categoryIconClass = this.iconControl.value;
    this.categoriesService.createCategory(category)
    .then((res: any)=>{
      if(res.id) {
        this.toastService.show({body: 'La catégorie a été créer !', isSuccess: true});
        this.allCategories.push(res);
      }
      if(res.message == 'Already exist') {
        this.toastService.show({body: 'Cette catégorie existe déjà !'});
      }
    })
  }
}
