import { Component, OnInit } from '@angular/core';
import { BoutiquesService } from '../../services/boutiques.service';
import { CATEGORY } from 'src/app/data/interfaces';

@Component({
  selector: 'app-all-boutiques',
  templateUrl: './all-boutiques.component.html',
  styleUrls: ['./all-boutiques.component.scss']
})
export class AllBoutiquesComponent implements OnInit {
  public loaderShops = [
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '',
  ];
  public activeShops = [
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '', ''
  ];
  public shopCategories:any[] = []
  public activeCategory!: CATEGORY;
  public isShopLoading: boolean = true; 
  constructor(private boutiquesService: BoutiquesService){
    setTimeout(() => {
      this.isShopLoading = !this.isShopLoading;
    }, 3000);
  }
  ngOnInit(): void {
    this.boutiquesService.getCategoriesShops().then((res)=>{
      this.shopCategories = res
    })
  }
  public changeCategory(category:CATEGORY){
    if (this.isShopLoading) return;
    this.fakeLoad();
    this.activeCategory = category
  }
  public fakeLoad(){
    this.isShopLoading = true;
    setTimeout(() => {
      this.isShopLoading = false
    }, 3000);
  }
}
