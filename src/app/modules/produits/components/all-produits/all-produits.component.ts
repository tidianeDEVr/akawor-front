import { Component } from '@angular/core';

@Component({
  selector: 'app-all-produits',
  templateUrl: './all-produits.component.html',
  styleUrls: ['./all-produits.component.scss']
})
export class AllProduitsComponent {
  public loaderCards = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  public activeProducts = [
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '','', '', '', '', '', '', '', ''
  ];
  public productCategories: any[] = [
    {
      libelle: 'Agroalimentaire',
      icon: 'fa-solid fa-plate-wheat'
    },
    {
      libelle: 'Animaux',
      icon: 'fa-solid fa-paw'
    },
    {
      libelle: 'Cosmétique, Santé et Bien-être',
      icon: 'fa-solid fa-heart'
    },
    {
      libelle: 'Articles de maison',
      icon: 'fa-solid fa-house-user'
    },
    {
      libelle: 'Matériaux, outils & équipements',
      icon: 'fa-solid fa-screwdriver-wrench'
    },
    {
      libelle: 'Mode & beauté',
      icon: 'fa-solid fa-heart'
    },
    {
      libelle: 'Multimédia',
      icon: 'fa-solid fa-laptop'
    },
    {
      libelle: 'Produis alimentaires',
      icon: 'fa-solid fa-drumstick-bite'
    },
    {
      libelle: 'Sports & loisirs',
      icon: 'fa-solid fa-person-running'
    },
    {
      libelle: 'Equipement de véhicules',
      icon: 'fa-solid fa-car'
    },
  ]
  public priceRangeMin = 0;
  public priceRangeMax = 1000000;
  public isProductsLoaded: boolean = false;
  public activeCategory: string = '';
  constructor(){
    this.fakeLoad();
  }

  public filterProducts(){
    this.fakeLoad();
  }

  public changeCategory(category:any){
    this.activeCategory = category.libelle
    this.fakeLoad()
  }

  public fakeLoad(){
    this.isProductsLoaded = false;
    setTimeout(() => {
      this.isProductsLoaded = !this.isProductsLoaded;
    }, 3000);
  }

  public resetFilter(){
    this.activeCategory = ''
    this.priceRangeMax = 1000000
    this.priceRangeMin = 0
    this.fakeLoad()
  }
}
