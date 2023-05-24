import { Component, OnInit } from '@angular/core';
import { CATEGORY } from 'src/app/data/interfaces';
import { ProduitsService } from '../../services/produits.service';

@Component({
  selector: 'app-all-produits',
  templateUrl: './all-produits.component.html',
  styleUrls: ['./all-produits.component.scss']
})
export class AllProduitsComponent implements OnInit {
  public loaderCards = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  public activeProducts = [
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '', ''
  ];
  public productCategories: CATEGORY[] = []
  public priceRangeMin = 0;
  public priceRangeMax = 1000000;
  public isProductsLoaded: boolean = false;
  public activeCategory: CATEGORY | undefined;
  constructor(private produitsService: ProduitsService){
    this.fakeLoad();
  }
  ngOnInit(): void {
    // this.productCategories = 
    this.produitsService.getCategoriesProducts().then((res)=>{
      this.productCategories = res
    })
  }

  public filterProducts(){
    this.fakeLoad();
  }

  public changeCategory(category:CATEGORY){
    this.activeCategory = category
    this.fakeLoad()
  }

  public fakeLoad(){
    this.isProductsLoaded = false;
    setTimeout(() => {
      this.isProductsLoaded = !this.isProductsLoaded;
    }, 3000);
  }

  public resetFilter(){
    this.activeCategory = undefined
    this.priceRangeMax = 1000000
    this.priceRangeMin = 0
    this.fakeLoad()
  }
}
