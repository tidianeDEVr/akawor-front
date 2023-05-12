import { Component } from '@angular/core';

@Component({
  selector: 'app-single-boutique',
  templateUrl: './single-boutique.component.html',
  styleUrls: ['./single-boutique.component.scss']
})
export class SingleBoutiqueComponent {
  public shopProducts = [
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '',
  ];
  public loaderCards = [
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '',
  ];
  public isProductsLoaded:boolean = false;

  constructor(){
    setTimeout(() => {
      this.isProductsLoaded = !this.isProductsLoaded
    }, 3000);
  }
}
