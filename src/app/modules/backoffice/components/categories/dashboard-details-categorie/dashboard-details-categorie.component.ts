import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { CATEGORY, ORDER, PRODUCT } from 'src/app/data/interfaces';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';

@Component({
  selector: 'app-dashboard-details-categorie',
  templateUrl: './dashboard-details-categorie.component.html',
  styleUrls: ['./dashboard-details-categorie.component.scss']
})
export class DashboardDetailsCategorieComponent {
  public subCategories!: CATEGORY[];
  public products!: PRODUCT[];
  public orders!: ORDER[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {category: CATEGORY},
    private categoriesService: CategoriesService,
    private produitsService: ProduitsService
  ){
    if(data.category.id)
    this.categoriesService.getSubCategoriesProducts(parseInt(data.category.id))
    .then((cats)=>{
      if(cats.length>0) this.subCategories = cats;
    });
    if(data.category.categorySlug)
    this.produitsService.getProductsByCategoriesSlug(data.category.categorySlug)
    .then((prods)=>{
      this.products = prods;
    })
  }
}
