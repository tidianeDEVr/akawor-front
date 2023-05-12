import { Component } from '@angular/core';

@Component({
  selector: 'app-all-produits',
  templateUrl: './all-produits.component.html',
  styleUrls: ['./all-produits.component.scss']
})
export class AllProduitsComponent {
  public loaderCards = ['', '', '', '', '', '', '', ''];
  public activeProducts = [
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '', ''
  ];
  public priceRangeMin = 0;
  public priceRangeMax = 1000000;
  public isProductsLoaded: boolean = false;
  constructor(){
    
  }
}
