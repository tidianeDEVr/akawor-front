import { Component, OnInit } from '@angular/core';
import { BANNER, CATEGORY, PRODUCT, SHOP } from 'src/app/data/interfaces';
import { BoutiquesService } from 'src/app/modules/boutiques/services/boutiques.service';
import { ProduitsService } from 'src/app/modules/produits/services/produits.service';
import { CategoriesService } from '../../services/categories.service';
import { BannerService } from '../../services/banner.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public imgBannerPath = `${environment.BACKEND_IMAGES_FOLDER}/banners/`
  public heroBanners!: BANNER[];
  public isProductsLoaded: boolean = false;
  public slideDealsConfig = {
    slidesToShow: 6,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    prevArrow: '#deals-btn-left',
    nextArrow: '#deals-btn-right',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  public recentProducts!: PRODUCT[];
  public isShopsLoaded: boolean = false;
  public slideShopsConfig = {
    slidesToShow: 6,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    prevArrow: '#shops-btn-left',
    nextArrow: '#shops-btn-right',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  public categories: any = [
    {
      libelle: 'Fashion',
      childs: ['Accessoires', 'Robes', 'Pantalons', 'T-Shirts'],
      img: '../../../../assets/images/catalogs/demo09-440x440.jpg',
    },
    {
      libelle: 'Sacs',
      childs: ['Sacs à dos', 'Pochettes', 'Formal', 'Sacs à main'],
      img: '../../../../assets/images/catalogs/bagcat-440x440.jpg',
    },
    {
      libelle: 'Santé & Beauté',
      childs: ['Accessoires', 'Corps', 'Rouge à lèvres', 'Maquillages'],
      img: '../../../../assets/images/catalogs/beauty-440x440.jpg',
    },
    {
      libelle: 'Chaussures',
      childs: ['Plates', 'Tongs', 'Talons', 'Sport'],
      img: '../../../../assets/images/catalogs/f6-440x440.jpg',
    },
    {
      libelle: 'Décoration',
      childs: ['Fauteuils', 'Décors', 'Lampes', 'Canapés'],
      img: '../../../../assets/images/catalogs/acceso-440x440.jpg',
    },
    {
      libelle: 'Électronique',
      childs: [
        'Ordinateurs de bureau',
        'Ordinateurs portables',
        'Composants',
        'Téléphones',
      ],
      img: '../../../../assets/images/catalogs/elec-440x440.jpg',
    },
    {
      libelle: 'Nourriture',
      childs: ['Petit-déjeuner', 'Dessert', 'Gril', 'Pâtes'],
      img: '../../../../assets/images/catalogs/f-440x440.jpg',
    },
    {
      libelle: 'Bébé & enfants',
      childs: ['Soins bébé', 'Bain', 'Couches', 'Fashion'],
      img: '../../../../assets/images/catalogs/baby-440x440.jpg',
    },
    {
      libelle: 'Fleures',
      childs: ['Lotus', 'Bouquets mixtes', 'Orchidées', 'Roses'],
      img: '../../../../assets/images/catalogs/rose-440x440.jpg',
    },
    {
      libelle: 'Appareils électroménagers',
      childs: ['Fers', 'Bouilloires', 'Micro-ondes', 'Réfrigérateurs'],
      img: '../../../../assets/images/catalogs/app-440x440.jpg',
    },
  ];
  public slideCategoriesConfig = {
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  public bestsellersProducts = [
    {
      libelle: 'Nom du produit 1',
      price: '5.000 F CFA',
      img: 'product1.jpg',
    },
    {
      libelle: 'Nom du produit 2',
      price: '5.000 F CFA',
      img: 'product2.jpg',
    },
    {
      libelle: 'Nom du produit 3',
      price: '5.000 F CFA',
      img: 'product3.jpg',
    },
    {
      libelle: 'Nom du produit 4',
      price: '5.000 F CFA',
      img: 'product4.jpg',
    },
  ];
  public shopCategories: CATEGORY[] = []
  public productCategories: CATEGORY[] = []
  constructor(
    private produitsService: ProduitsService,
    private boutiquesService: BoutiquesService,
    private bannerService: BannerService,
    private categoriesService: CategoriesService
  ) {
    this.isProductsLoaded = true;
    this.categoriesService.getCategoriesProducts()
    .then((categories)=>{
      this.productCategories = categories;
    })
    this.categoriesService.getCategoriesShops()
    .then((categories)=>{
      this.shopCategories = categories
    })
    this.produitsService.getRecentsProducts()
    .then((res)=>{
      this.recentProducts = res;
    })
    this.bannerService.getHeroBanners()
    .then((res)=>{
      this.heroBanners = res;
    })
  }
}
