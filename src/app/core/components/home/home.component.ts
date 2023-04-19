import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
public imagePath:string = "../../../../assets/images/products/";

  public heroBanners = [
    {
      imgPath: '../../../../assets/images/backgrounds/demo1760x880.jpg',
    },
    {
      imgPath: '../../../../assets/images/backgrounds/leap-design-1760x880.jpg',
    },
    {
      imgPath: '../../../../assets/images/backgrounds/pepi-stojanovski-610838-unsplash-1760x880w.jpg',
    }
  ]
  public dealsProducts = [
    {
      libelle: "Nom du produit 1",
      price: "5.000 F CFA",
      img: "product1.jpg",
    },
    {
      libelle: "Nom du produit 2",
      price: "5.000 F CFA",
      img: "product2.jpg",
    },
    {
      libelle: "Nom du produit 3",
      price: "5.000 F CFA",
      img: "product3.jpg",
    },
    {
      libelle: "Nom du produit 4",
      price: "5.000 F CFA",
      img: "product4.jpg",
    },
    {
      libelle: "Nom du produit 5",
      price: "5.000 F CFA",
      img: "product5.jpg",
    },
    {
      libelle: "Nom du produit 6",
      price: "5.000 F CFA",
      img: "product6.jpg",
    },
    {
      libelle: "Nom du produit 7",
      price: "5.000 F CFA",
      img: "product7.jpg",
    },
    {
      libelle: "Nom du produit 8",
      price: "5.000 F CFA",
      img: "product8.jpg",
    },
    {
      libelle: "Nom du produit 9",
      price: "5.000 F CFA",
      img: "product9.jpg",
    },
    {
      libelle: "Nom du produit 10",
      price: "5.000 F CFA",
      img: "product10.jpg",
    },
  ];
  public isProductsLoaded:boolean = false;
  public slideDealsConfig = {
    "slidesToShow": 6,
    "slidesToScroll": 3,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "speed": 300,
    'prevArrow': '#deals-btn-left',
    'nextArrow': '#deals-btn-right',
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  public topShops = [
    {
      libelle: "Adaa ada",
      img: "adaa-ada.png"
    },
    {
      libelle: "Baawaan",
      img: "baawaan.png"
    },
    {
      libelle: "Malado",
      img: "malado.png"
    },
    {
      libelle: "nefertiti's code",
      img: "nefertitis.jpeg"
    },
    {
      libelle: "Nilaja",
      img: "nilaja.jpeg"
    },
    {
      libelle: "Outalma xam xam",
      img: "outalma.png"
    },
    {
      libelle: "Senteurs d'exquises by touty",
      img: "senteursdexq.png"
    },
    {
      libelle: "Zimlam",
      img: "zimlam.png"
    }
  ]
  public isShopsLoaded:boolean = false;
  public slideShopsConfig = {
    "slidesToShow": 6,
    "slidesToScroll": 3,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "speed": 300,
    'prevArrow': '#shops-btn-left',
    'nextArrow': '#shops-btn-right',
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  public testimonials:any = [
    {
      author: "Cheikh Tidiane Ndiaye",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      author: "Cheikh Tidiane Ndiaye",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      author: "Cheikh Tidiane Ndiaye",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
  ]
  public slideTestimonialsConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "speed": 300,
  };
  public categories:any = [
    {
      libelle: "Fashion",
      childs: ["Accessoires", "Robes", "Pantalons", "T-Shirts"],
      img: "../../../../assets/images/catalogs/demo09-440x440.jpg"
    },
    {
      libelle: "Sacs",
      childs: ["Sacs à dos", "Pochettes", "Formal", "Sacs à main"],
      img: "../../../../assets/images/catalogs/bagcat-440x440.jpg"
    },
    {
      libelle: "Santé & Beauté",
      childs: ["Accessoires", "Corps", "Rouge à lèvres", "Maquillages"],
      img: "../../../../assets/images/catalogs/beauty-440x440.jpg"
    },
    {
      libelle: "Chaussures",
      childs: ["Plates", "Tongs", "Talons", "Sport"],
      img: "../../../../assets/images/catalogs/f6-440x440.jpg"
    },
    {
      libelle: "Décoration",
      childs: ["Fauteuils", "Décors", "Lampes", "Canapés"],
      img: "../../../../assets/images/catalogs/acceso-440x440.jpg",
    },
    {
      libelle: "Électronique",
      childs: ["Ordinateurs de bureau", "Ordinateurs portables", "Composants", "Téléphones"],
      img: "../../../../assets/images/catalogs/elec-440x440.jpg"
    },
    {
      libelle: "Nourriture",
      childs: ["Petit-déjeuner", "Dessert", "Gril", "Pâtes"],
      img: "../../../../assets/images/catalogs/f-440x440.jpg"
    },
    {
      libelle: "Bébé & enfants",
      childs: ["Soins bébé", "Bain", "Couches", "Fashion"],
      img: "../../../../assets/images/catalogs/baby-440x440.jpg"
    },
    {
      libelle: "Fleures",
      childs: ["Lotus", "Bouquets mixtes", "Orchidées", "Roses"],
      img: "../../../../assets/images/catalogs/rose-440x440.jpg"
    },
    {
      libelle: "Appareils électroménagers",
      childs: ["Fers", "Bouilloires", "Micro-ondes", "Réfrigérateurs"],
      img: "../../../../assets/images/catalogs/app-440x440.jpg"
    },
  ]
  public slideCategoriesConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 5,
    "arrows": false,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "speed": 300,
  };
  public bestsellersProducts =  [
    {
      libelle: "Nom du produit 1",
      price: "5.000 F CFA",
      img: "product1.jpg",
    },
    {
      libelle: "Nom du produit 2",
      price: "5.000 F CFA",
      img: "product2.jpg",
    },
    {
      libelle: "Nom du produit 3",
      price: "5.000 F CFA",
      img: "product3.jpg",
    },
    {
      libelle: "Nom du produit 4",
      price: "5.000 F CFA",
      img: "product4.jpg",
    }
  ]
  constructor(){
    window.addEventListener("load", function() {
      var cards = document.querySelectorAll('.product-card')
      cards.forEach(card => {
        var icon = card.querySelector('.zoom-icon');
        card.addEventListener('mouseover', ()=>{
          card.classList.add('hovered')
          if (icon) icon.classList.remove('d-none')
        })
        card.addEventListener('mouseout', ()=>{
          card.classList.remove('hovered')
          if (icon) icon.classList.add('d-none')
        })
      });
    });
    this.isProductsLoaded = true;
  }
}
