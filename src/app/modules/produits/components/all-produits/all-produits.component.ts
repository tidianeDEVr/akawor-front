import { Component, OnInit } from '@angular/core';
import { CATEGORY, PRODUCT } from 'src/app/data/interfaces';
import { ProduitsService } from '../../services/produits.service';

@Component({
  selector: 'app-all-produits',
  templateUrl: './all-produits.component.html',
  styleUrls: ['./all-produits.component.scss']
})
export class AllProduitsComponent implements OnInit {
  public loaderCards = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  // public activeProducts = [
  //   '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '',
  //   '', '', '', '', '', '', '', '','', '', '', '', '', '', '', ''
  // ];
  public products!: PRODUCT[];
  public productCategories: CATEGORY[] = []
  public priceRangeMin = 0;
  public priceRangeMax = 1000000;
  public isProductsLoaded: boolean = false;
  public activeCategory: CATEGORY | undefined;
  constructor(private produitsService: ProduitsService){

  }

  ngOnInit(): void {
    this.produitsService.getProducts().then((res)=>{
      this.products = res;
      this.isProductsLoaded = !this.isProductsLoaded
    });
    this.produitsService.getCategoriesProducts().then((res)=>{
      this.productCategories = res
    });
  }

  public filterProducts(){
    
  }

  public changeCategory(category:CATEGORY){
    this.activeCategory = category
  }

  public resetFilter(){
    this.activeCategory = undefined
    this.priceRangeMax = 1000000
    this.priceRangeMin = 0
  }
}
