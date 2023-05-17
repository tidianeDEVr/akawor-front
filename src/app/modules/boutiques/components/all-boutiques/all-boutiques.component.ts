import { Component } from '@angular/core';

@Component({
  selector: 'app-all-boutiques',
  templateUrl: './all-boutiques.component.html',
  styleUrls: ['./all-boutiques.component.scss']
})
export class AllBoutiquesComponent {
  public loaderShops = [
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '',
  ];
  public activeShops = [
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '', ''
  ];
  public shopCategories:any[] = [
    {
      libelle: 'Multimédia',
      icon: 'fa-solid fa-desktop'
    },
    {
      libelle: 'Mobilier & éléctroménager',
      icon: 'fa-solid fa-couch'
    },
    {
      libelle: 'Mode & beauté',
      icon: 'fa-solid fa-shirt'
    },
    {
      libelle: 'Sociétés de services',
      icon: 'fa-solid fa-person-digging'
    },
    {
      libelle: 'Produits alimentaires',
      icon: 'fa-solid fa-cookie-bite'
    },
    {
      libelle: 'Concessionnaires',
      icon: 'fa-solid fa-car'
    },
    {
      libelle: 'Matériaux & bricolage',
      icon: 'fa-solid fa-toolbox'
    },
    {
      libelle: 'Agences immobilières',
      icon: 'fa-solid fa-building'
    },
    {
      libelle: 'Accessoires auto moto',
      icon: 'fa-solid fa-car-battery'
    },
    {
      libelle: 'Agricoles et alimentaires',
      icon: 'fa-solid fa-wheat-awn'
    },
    {
      libelle: 'Sports, loisirs & voyages',
      icon: 'fa-solid fa-person-swimming'
    },
  ]
  public activeCategory: string = ''
  public isShopLoading: boolean = true; 
  constructor(){
    setTimeout(() => {
      this.isShopLoading = !this.isShopLoading;
    }, 3000);
  }
  public changeCategory(category:any){
    if (this.isShopLoading) return;
    this.fakeLoad();
    this.activeCategory = category.libelle
  }
  public fakeLoad(){
    this.isShopLoading = true;
    setTimeout(() => {
      this.isShopLoading = false
    }, 3000);
  }
}
