import { Component, OnInit } from '@angular/core';
import { BANNER, CATEGORY, PRODUCT, SHOP } from 'src/app/data/interfaces';
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
  public imgBannerPath = `${environment.BACKEND_IMAGES_FOLDER}/banners/`;
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

  public homeCategories: any = [
    {
      libelle: 'Mode & Beauté',
      path: 'mode-&-beaute',
      childs: [
        { libelle: 'Accessoires', path: 'accessoires' },
        { libelle: 'Robes', path: 'robes' },
        { libelle: 'Pantalons', path: 'pantalons' },
        { libelle: 'T-Shirts', path: 't-shirts' },
      ],
      img: 'assets/images/catalogs/demo09-440x440.jpg',
    },
    {
      libelle: 'Multimédia',
      path: 'multimedia',
      childs: [
        { libelle: 'Composants', path: 'composants' },
        { libelle: 'Ordinateurs de bureau', path: 'ordinateurs-de-bureau' },
        { libelle: 'Ordinateurs portables', path: 'ordinateurs-portable' },
        { libelle: 'Téléphones', path: 'telephones' },
      ],
      img: 'assets/images/catalogs/bagcat-440x440.jpg',
    },
    {
      libelle: 'Articles de maison',
      path: 'articles-de-maison',
      childs: [
        { libelle: 'Mobilier', path: 'mobilier' },
        { libelle: 'Electromenager', path: 'electromenager' },
        { libelle: 'Décoration', path: 'decoration' },
        { libelle: 'Jardinage', path: 'jardinage' },
      ],
      img: 'assets/images/catalogs/beauty-440x440.jpg',
    },
  ];
  public slideCategoriesConfig = {
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    dots: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // speed: 300,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
  public shopCategories: CATEGORY[] = [];
  public productCategories: CATEGORY[] = [];
  constructor(
    private produitsService: ProduitsService,
    private bannerService: BannerService,
    private categoriesService: CategoriesService
  ) {
    this.isProductsLoaded = true;
    this.categoriesService.getCategoriesProducts().then((categories) => {
      this.productCategories = categories;
    });
    this.categoriesService.getCategoriesShops().then((categories) => {
      this.shopCategories = categories;
    });
    this.produitsService.getRecentsProducts().then((res) => {
      this.recentProducts = res;
    });
    this.bannerService.getHeroBanners().then((res) => {
      this.heroBanners = res;
    });
  }
}
