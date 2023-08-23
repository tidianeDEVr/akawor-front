import { Component, OnInit } from '@angular/core';
import { CATEGORY, PRODUCT } from 'src/app/data/interfaces';
import { ProduitsService } from '../../services/produits.service';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-produits',
  templateUrl: './all-produits.component.html',
  styleUrls: ['./all-produits.component.scss'],
})
export class AllProduitsComponent implements OnInit {
  public loaderCards = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];
  public products!: PRODUCT[];
  public productCategories: CATEGORY[] = [];
  public priceRangeMin = 0;
  public priceRangeMax = 0;
  public selectedPriceRangeMax = 0
  public selectedPriceRangeMin = 0;
  public isProductsLoaded: boolean = false;
  public activeCategory: CATEGORY | undefined;
  constructor(
    private produitsService: ProduitsService,
    private categoriesService: CategoriesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    const path = window.location.href.split('/');
    const slug = path[4];
    if (slug) {
      this.produitsService.getProductsByCategoriesSlug(slug).then((res:any) => {
        if(res.message === 'category not found') this.router.navigate(['/produits'])
        this.populateProducts(res);
      });
    } else {
      this.produitsService.getProducts().then((res) => {
        this.populateProducts(res);
      });
    }
    this.categoriesService.getCategoriesProducts().then((res) => {
      this.productCategories = res;
      if(slug) res.forEach((elt)=>{
        if (slug===elt.categorySlug) this.activeCategory = elt;
      })
    });
  }
  populateProducts(products:PRODUCT[]){
    this.products = products;
    this.isProductsLoaded = !this.isProductsLoaded;
    this.selectedPriceRangeMax = this.priceRangeMax;
  }
  public filterProducts() {
    var topFilter:any = document.querySelector('#top-filter')
    if(topFilter)
    var selected:any = topFilter.options[topFilter.selectedIndex].value;
    if(!selected && selected==0) return;
    
  }
  changeCategory(category: CATEGORY):any{
    if(this.activeCategory === category) this.router.navigate(['/produits']);
    this.isProductsLoaded = false;
    if (category.categorySlug)
      this.produitsService
      .getProductsByCategoriesSlug(category.categorySlug)
      .then((res) => {
        this.activeCategory = category;
        this.products = res;
        this.isProductsLoaded = true;
      });
  }
}
