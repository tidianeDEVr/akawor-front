import { Component, OnInit } from '@angular/core';
import { BoutiquesService } from '../../services/boutiques.service';
import { CATEGORY, SHOP } from 'src/app/data/interfaces';

@Component({
  selector: 'app-all-boutiques',
  templateUrl: './all-boutiques.component.html',
  styleUrls: ['./all-boutiques.component.scss']
})
export class AllBoutiquesComponent implements OnInit {
  public loaderShops = [
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '',
  ];
  public shops!: SHOP[];
  public shopCategories:any[] = []
  public activeCategory!: CATEGORY;
  public isShopLoading: boolean = true; 
  constructor(private boutiquesService: BoutiquesService){ }
  ngOnInit(): void {
    this.boutiquesService.getCategoriesShops().then((res)=>{
      this.shopCategories = res
    })
    this.boutiquesService.getActiveShop()
    .then((res:any)=>{
      this.shops = res;
      this.isShopLoading = false;
    })
  }
  public changeCategory(category:CATEGORY){
    if (this.isShopLoading) return;
    // this.isShopLoading = true;
    this.activeCategory = category
  }
}
