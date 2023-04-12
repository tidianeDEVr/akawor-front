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
      imgPath: '../../../../assets/images/backgrounds/background-1.webp',
    },
    {
      imgPath: '../../../../assets/images/backgrounds/background-2.webp',
    },
    {
      imgPath: '../../../../assets/images/backgrounds/background-3.webp',
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
  public isDealsProductsLoaded:boolean = false;
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
    
    // setTimeout(() => {
    //   this.isDealsProductsLoaded = true;
    // }, 3000);
    // setTimeout(() => {
    //   this.isShopsLoaded = true;
    // }, 5000);
    document.addEventListener("DOMContentLoaded", function() {
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
  }
}
